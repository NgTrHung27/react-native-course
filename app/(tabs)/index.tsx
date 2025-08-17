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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ID, Query } from "react-native-appwrite";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import { Button, Surface, Text } from "react-native-paper";

export default function Index() {
  const { signOut, user } = useAuth();
  const swipeableRefs = useRef<{ [key: string]: Swipeable | null }>({});

  const [habits, setHabits] = useState<Habit[]>();
  const [completedHabits, setCompletedHabits] = useState<string[]>();

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

  const fetchTodayCompletetions = useCallback(async () => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const response = await databases.listDocuments(
        DATABASE_ID ?? "",
        COMPLETIONS_COLLECTION_ID ?? "",
        [
          Query.equal("user_id", user?.$id ?? ""),
          Query.greaterThanEqual("completed_at", today.toISOString()),
        ]
      );

      const completion = response.documents as HabitCompletion[];
      setCompletedHabits(completion.map((c) => c.habit_id));
    } catch (error) {
      console.error(error);
    }
  }, [user?.$id]);
  const renderLeftActions = (
    progressAnimatedValue: any,
    dragAnimatedValue: any,
    swipeable: any
  ) => {
    return (
      <View style={styles.swipeActionLeft}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={32}
          color="#f5f5f5"
        />
      </View>
    );
  };

  const isHabitCompleted = (habitsId: string) =>
    completedHabits?.includes(habitsId);

  const renderRightActions = (habitsId: string) => {
    return (
      <View style={styles.swipeActionRight}>
        {isHabitCompleted(habitsId) ? (
          <Text style={{ color: "#fff" }}>Completed!</Text>
        ) : (
          <MaterialCommunityIcons
            name="check-circle-outline"
            size={32}
            color="#f5f5f5"
          />
        )}
      </View>
    );
  };

  const handleDeleteHabit = async (id: string) => {
    try {
      await databases.deleteDocument(DATABASE_ID!, HABIT_COLLECTION_ID!, id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompleteHabit = async (id: string) => {
    if (!user || completedHabits?.includes(id)) return;
    try {
      await databases.createDocument(
        DATABASE_ID!,
        COMPLETIONS_COLLECTION_ID!,
        ID.unique(),
        {
          habit_id: id,
          user_id: user.$id,
          completed_at: new Date().toISOString(),
        }
      );
      const habit = habits?.find((h) => h.$id === id);
      const currentDate = new Date().toISOString();
      if (!habit) return;
      await databases.updateDocument(DATABASE_ID!, HABIT_COLLECTION_ID!, id, {
        streak_count: habit.streak_count + 1,
        last_completed: currentDate,
      });
    } catch (error) {
      console.error(error);
    }
  };
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
            fetchTodayCompletetions();
          }
        }
      );
      fetchHabits();
      fetchTodayCompletetions();

      return () => {
        habitsSubcription();
        completionsSubcription();
      };
    }
  }, [user, fetchHabits, fetchTodayCompletetions]);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text variant="headlineSmall" style={styles.title}>
          Today&apos;s Habit
        </Text>
        <Button mode="text" onPress={signOut} icon={"logout"}>
          Sign Out
        </Button>
      </View>
      {habits?.length === 0 ? (
        <View style={styles.emptState}>
          <Text style={styles.emptStateText}>
            {" "}
            No Habits yet. Add your first Habit!
          </Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {habits?.map((habit, index) => (
            <Swipeable
              key={index}
              ref={(ref) => {
                swipeableRefs.current[habit.$id] = ref;
              }}
              overshootRight={false}
              overshootLeft={false}
              renderLeftActions={renderLeftActions}
              renderRightActions={() => renderRightActions(habit.$id)}
              onSwipeableOpen={(direction) => {
                if (direction === "left") {
                  handleDeleteHabit(habit.$id);
                } else if (direction === "right") {
                  handleCompleteHabit(habit.$id);
                }
                (swipeableRefs.current[habit.$id] as Swipeable | null)?.close();
              }}
            >
              <Surface
                key={index}
                style={
                  (styles.card,
                  isHabitCompleted(habit.$id) && styles.cardCompleted)
                }
                elevation={0}
              >
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{habit.title}</Text>
                  <Text style={styles.cardDescription}>
                    {habit.description}
                  </Text>
                  <View style={styles.cardFooter}>
                    <View style={styles.streakBadge}>
                      <MaterialCommunityIcons
                        name="fire"
                        size={18}
                        color={"#ff9800"}
                      />
                      <Text style={styles.streakText}>
                        {habit.streak_count} day streak
                      </Text>
                    </View>
                    <View style={styles.frequencyBadge}>
                      <Text style={styles.frequencyText}>
                        {habit.frequency.charAt(0).toUpperCase() +
                          habit.frequency.slice(1)}
                      </Text>
                    </View>
                  </View>
                </View>
              </Surface>
            </Swipeable>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 24,
  },
  title: {
    fontWeight: "bold",
  },
  card: {
    marginBottom: 18,
    borderRadius: 18,
    backgroundColor: "#f7f2fa",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  cardCompleted: {
    marginBottom: 18,
    borderRadius: 18,
    backgroundColor: "#f7f2fa",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    opacity: 0.6,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#22223b",
  },
  cardDescription: {
    fontSize: 15,
    marginBottom: 16,
    color: "#6c5c80",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  streakBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff3e0",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  streakText: {
    marginLeft: 6,
    color: "#ff9800",
    fontWeight: "bold",
    fontSize: 14,
  },
  frequencyBadge: {
    backgroundColor: "#ede7f6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  frequencyText: {
    color: "#7c4dff",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
  emptState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptStateText: {
    color: "#666666",
  },
  swipeActionLeft: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
    backgroundColor: "#ef3935",
    borderRadius: 18,
    marginBottom: 18,
    marginTop: 2,
    paddingLeft: 16,
  },
  swipeActionRight: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
    backgroundColor: "#4caf50",
    borderRadius: 18,
    marginBottom: 18,
    marginTop: 2,
    paddingRight: 16,
  },
});
