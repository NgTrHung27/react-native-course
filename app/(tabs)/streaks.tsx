import {
  client,
  COMPLETIONS_COLLECTION_ID,
  DATABASE_ID,
  databases,
  HABIT_COLLECTION_ID,
  RealtimeResponse,
} from "@/lib/appwrite";
import { useAuth } from "@/lib/auth-context";
import { Habit, HabitCompletion } from "@/types/database.type";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Query } from "react-native-appwrite";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Text } from "react-native-paper";

export default function StreaksScreen() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [completedHabits, setCompletedHabits] = useState<HabitCompletion[]>([]);
  const [rankedHabits, setRankedHabits] = useState<
    {
      habit: Habit;
      streak: number;
      bestStreak: number;
      total: number;
    }[]
  >([]);
  const badgeStyles = [styles.badge1, styles.badge2, styles.badge3];
  const { user } = useAuth();

  const fetchHabits = useCallback(async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID ?? "",
        HABIT_COLLECTION_ID ?? "",
        [Query.equal("user_id", user?.$id ?? "")]
      );
      setHabits(response.documents as Habit[]);
    } catch (error) {
      console.error(error);
    }
  }, [user?.$id]);

  const fetchCompletetions = useCallback(async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID ?? "",
        COMPLETIONS_COLLECTION_ID ?? "",
        [Query.equal("user_id", user?.$id ?? "")]
      );

      const completion = response.documents as HabitCompletion[];
      setCompletedHabits(completion);
    } catch (error) {
      console.error(error);
    }
  }, [user?.$id]);

  useEffect(() => {
    if (user) {
      const habitsChannel = `databases.${DATABASE_ID}.collections.${HABIT_COLLECTION_ID}.documents`;
      const habitsSubcription = client.subscribe(
        habitsChannel,
        (response: RealtimeResponse) => {
          if (
            response.events.includes(
              "databases.*.collections.*.documents.*.create"
            )
          ) {
            fetchHabits();
          } else if (
            response.events.includes(
              "databases.*.collections.*.documents.*.update"
            )
          ) {
            fetchHabits();
          } else if (
            response.events.includes(
              "databases.*.collections.*.documents.*.delete"
            )
          ) {
            fetchHabits();
          }
        }
      );
      const comepletionChannel = `databases.${DATABASE_ID}.collections.${COMPLETIONS_COLLECTION_ID}.documents`;
      const completionsSubcription = client.subscribe(
        comepletionChannel,
        (response: RealtimeResponse) => {
          if (
            response.events.includes(
              "databases.*.collections.*.documents.*.create"
            )
          ) {
            fetchCompletetions();
          }
        }
      );
      fetchHabits();
      fetchCompletetions();

      return () => {
        habitsSubcription();
        completionsSubcription();
      };
    }
  }, [fetchCompletetions, fetchHabits, user]);

  // Calculate streak data for a habit
  const getStreakData = useCallback(
    (
      habitId: string
    ): { streak: number; bestStreak: number; total: number } => {
      const habitCompletions = completedHabits
        .filter((c) => c.habit_id === habitId)
        .sort(
          (a, b) =>
            new Date(a.completed_at).getTime() -
            new Date(b.completed_at).getTime()
        );
      if (habitCompletions.length === 0) {
        return {
          streak: 0,
          bestStreak: 0,
          total: 0,
        };
      }

      let bestStreak = 1;
      let currentStreak = 1;
      let streak = 1;
      let total = habitCompletions.length;
      let lastDate = new Date(habitCompletions[0].completed_at);

      for (let i = 1; i < habitCompletions.length; i++) {
        const date = new Date(habitCompletions[i].completed_at);
        const diff =
          (date.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);
        if (diff <= 1.5) {
          currentStreak += 1;
        } else {
          if (currentStreak > bestStreak) bestStreak = currentStreak;
          currentStreak = 1;
        }
        lastDate = date;
      }
      if (currentStreak > bestStreak) bestStreak = currentStreak;
      streak = currentStreak;
      return { streak, bestStreak, total };
    },
    [completedHabits]
  );

  // Update rankedHabits whenever habits or completedHabits change
  useEffect(() => {
    if (habits.length > 0) {
      const habitStreaks = habits.map((habit) => {
        const { streak, bestStreak, total } = getStreakData(habit.$id);
        return { habit, streak, bestStreak, total };
      });
      const ranked = habitStreaks.sort((a, b) => b.bestStreak - a.bestStreak);
      setRankedHabits(ranked);
    } else {
      setRankedHabits([]);
    }
  }, [habits, completedHabits, getStreakData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="headlineSmall">
        Habit Streaks
      </Text>
      {rankedHabits.length > 0 && (
        <View style={styles.rankingContainer}>
          <Text style={styles.rankingTitle}> 🥇 Top Streaks</Text>
          {rankedHabits.slice(0, 3).map((item, key) => (
            <View key={key} style={styles.rankingRow}>
              <View style={[styles.rankingBadge, badgeStyles[key]]}>
                <Text style={styles.rankingBadgeText}>{key + 1}</Text>
              </View>
              <Text style={styles.rankingHabit}>{item.habit.title}</Text>
              <Text style={styles.rankingStreak}>{item.bestStreak}</Text>
            </View>
          ))}
        </View>
      )}
      {habits.length === 0 ? (
        <View>
          <Text>No Habits yet. Add your first Habit!</Text>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          {rankedHabits.map(
            ({ habit, streak, bestStreak, total }, key: number) => (
              <Card
                key={habit.$id}
                style={[styles.card, key === 0 && styles.firstCard]}
              >
                <Card.Content>
                  <Text variant="titleMedium" style={styles.habitTitle}>
                    {habit.title}
                  </Text>
                  <Text style={styles.habitDescription}>
                    {habit.description}
                  </Text>
                  <View style={styles.statsRow}>
                    <View style={styles.statsBadge}>
                      <Text style={styles.statsBadgeText}>🔥 {streak}</Text>
                      <Text style={styles.statsLabel}>Current</Text>
                    </View>
                    <View style={styles.statsBadgeGold}>
                      <Text style={styles.statsBadgeText}>🏆 {bestStreak}</Text>
                      <Text style={styles.statsLabel}>Best</Text>
                    </View>
                    <View style={styles.statsBadgeGreen}>
                      <Text style={styles.statsBadgeText}>✅ {total}</Text>
                      <Text style={styles.statsLabel}>Total</Text>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            )
          )}
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    marginBottom: 18,
    borderRadius: 18,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  firstCard: {
    borderWidth: 2,
    borderColor: "#7c4dff",
  },
  habitTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 2,
  },
  habitDescription: {
    color: "#6c6c80",
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop: 8,
  },
  statsBadge: {
    backgroundColor: "#fff3e0",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    minWidth: 60,
  },
  statsBadgeGold: {
    backgroundColor: "#fffde7",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    minWidth: 60,
  },
  statsBadgeGreen: {
    backgroundColor: "#e8f5ef",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    minWidth: 60,
  },
  statsBadgeText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#22223b",
  },
  statsLabel: {
    fontSize: 11,
    color: "##888",
    marginTop: 2,
    fontWeight: "500",
  },
  rankingContainer: {
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
  },

  rankingTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
    color: "#7c4dff",
    letterSpacing: 0.5,
  },

  rankingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 8,
  },
  rankingBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: "#e0e0e0",
  },
  badge1: {
    backgroundColor: "#FFD700", // Gold
  },
  badge2: {
    backgroundColor: "#C0C0C0", // Silver
  },
  badge3: {
    backgroundColor: "#CD7F32", // Bronze
  },
  rankingBadgeText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
  },
  rankingHabit: {
    flex: 1,
    fontSize: 15,
    color: "#333",
    fontWeight: "600",
  },
  rankingStreak: { fontSize: 14, color: "#7c4dff", fontWeight: "bold" },
});
