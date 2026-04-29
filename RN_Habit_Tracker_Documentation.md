# React Native Habit Tracker - Khóa Học Hoàn Chỉnh

> **Nguồn gốc**: Khóa học React Native từ Notion
> **Framework**: React Native (Expo SDK)
> **Router**: Expo Router v5 (file-based routing)
> **UI Library**: React Native Paper v5 (Material Design 3)
> **Backend**: Appwrite (BaaS - Backend-as-a-Service)
> **Icons**: @expo/vector-icons (MaterialCommunityIcons)

---

## Mục lục

- [12. Tùy chỉnh biểu tượng tab & trạng thái hoạt động](#12-tùy-chỉnh-biểu-tượng-tab--trạng-thái-hoạt-động)
- [13. Bắt đầu ứng dụng theo dõi thói quen: Cấu trúc dự án & Mục tiêu](#13-bắt-đầu-ứng-dụng-theo-dõi-thói-quen-cấu-trúc-dự-án--mục-tiêu)
- [14. Thiết lập Appwrite cho Backend Services](#14-thiết-lập-appwrite-cho-backend-services)
- [15. Tạo Appwrite Client trong dự án của bạn](#15-tạo-appwrite-client-trong-dự-án-của-bạn)
- [16. Xây dựng giao diện người dùng trang xác thực với React Native Paper](#16-xây-dựng-giao-diện-người-dùng-trang-xác-thực-với-react-native-paper)
- [17. Triển khai Route Guards với Expo Router](#17-triển-khai-route-guards-với-expo-router)
- [18. Xử lý logic đăng ký / đăng nhập](#18-xử-lý-logic-đăng-ký--đăng-nhập)
- [19. Hoàn thiện giao diện người dùng & Chuyển đổi giữa các chế độ xác thực](#19-hoàn-thiện-giao-diện-người-dùng--chuyển-đổi-giữa-các-chế-độ-xác-thực)
- [20. Kết nối logic xác thực với Context API](#20-kết-nối-logic-xác-thực-với-context-api)
- [21. Sử dụng Auth Provider và chuyển hướng người dùng đã đăng nhập](#21-sử-dụng-auth-provider-và-chuyển-hướng-người-dùng-đã-đăng-nhập)
- [22. Chức năng đăng xuất và kiểm tra luồng xác thực](#22-chức-năng-đăng-xuất-và-kiểm-tra-luồng-xác-thực)
- [23. Lập kế hoạch các màn hình theo dõi thói quen](#23-lập-kế-hoạch-các-màn-hình-theo-dõi-thói-quen)
- [24. Tạo kiểu Tabs & Tùy chỉnh giao diện người dùng điều hướng](#24-tạo-kiểu-tabs--tùy-chỉnh-giao-diện-người-dùng-điều-hướng)
- [25. Thiết lập Appwrite Database & Collections](#25-thiết-lập-appwrite-database--collections)
- [26. Kết nối với Appwrite Database từ React Native](#26-kết-nối-với-appwrite-database-từ-react-native)
- [27. Xây dựng giao diện người dùng màn hình thêm thói quen](#27-xây-dựng-giao-diện-người-dùng-màn-hình-thêm-thói-quen)
- [28. Thêm thói quen vào Database](#28-thêm-thói-quen-vào-database)
- [29. Xử lý quyền hạn trong Appwrite](#29-xử-lý-quyền-hạn-trong-appwrite)
- [30. Lấy & Hiển thị thói quen hôm nay](#30-lấy--hiển-thị-thói-quen-hôm-nay)
- [31. Xây dựng giao diện người dùng Thói quen](#31-xây-dựng-giao-diện-người-dùng-thói-quen)
- [32. Tạo kiểu cho Thẻ thói quen](#32-tạo-kiểu-cho-thẻ-thói-quen)
- [33. Làm cho màn hình có thể cuộn](#33-làm-cho-màn-hình-có-thể-cuộn)
- [34. Thiết lập vuốt để hoàn thành/xóa](#34-thiết-lập-vuốt-để-hoàn-thànhxóa)
- [35. Triển khai các hành động vuốt](#35-triển-khai-các-hành-động-vuốt)
- [36. Xóa một thói quen bằng cách vuốt](#36-xóa-một-thói-quen-bằng-cách-vuốt)
- [37. Sửa lỗi hành vi Swipe Ref](#37-sửa-lỗi-hành-vi-swipe-ref)
- [38. Hoàn thành một thói quen & Tạo Collection mới](#38-hoàn-thành-một-thói-quen--tạo-collection-mới)
- [39. Cập nhật chuỗi thói quen khi hoàn thành](#39-cập-nhật-chuỗi-thói-quen-khi-hoàn-thành)
- [40. Hoàn thành một thói quen và cập nhật chuỗi](#40-hoàn-thành-một-thói-quen-và-cập-nhật-chuỗi)
- [41. Tạo Collection hoàn thành thói quen](#41-tạo-collection-hoàn-thành-thói-quen)
- [42. Lấy các lần hoàn thành hôm nay](#42-lấy-các-lần-hoàn-thành-hôm-nay)
- [43. Ngăn chặn các lần hoàn thành trùng lặp](#43-ngăn-chặn-các-lần-hoàn-thành-trùng-lặp)
- [44. Đăng ký cập nhật hoàn thành thói quen (Realtime)](#44-đăng-ký-cập-nhật-hoàn-thành-thói-quen-realtime)
- [45. Tạo kiểu cho các thói quen đã hoàn thành](#45-tạo-kiểu-cho-các-thói-quen-đã-hoàn-thành)
- [46. Tạo màn hình Streaks](#46-tạo-màn-hình-streaks)
- [47. Lấy lịch sử hoàn thành thói quen](#47-lấy-lịch-sử-hoàn-thành-thói-quen)
- [48. Tính toán chuỗi hiện tại & tốt nhất](#48-tính-toán-chuỗi-hiện-tại--tốt-nhất)
- [49. Xếp hạng thói quen theo chuỗi](#49-xếp-hạng-thói-quen-theo-chuỗi)
- [50. Hiển thị Thẻ chuỗi](#50-hiển-thị-thẻ-chuỗi)
- [51. Xây dựng Bảng xếp hạng 3 thói quen hàng đầu](#51-xây-dựng-bảng-xếp-hạng-3-thói-quen-hàng-đầu)
- [52. Chỉnh sửa UI cuối & tạo kiểu](#52-chỉnh-sửa-ui-cuối--tạo-kiểu)
- [53. Outro](#53-outro)

---

## 12. Tùy chỉnh biểu tượng tab & trạng thái hoạt động

Tiếp tục tùy chỉnh giao diện của các tab, bao gồm việc thay đổi biểu tượng (icons) và cách chúng hiển thị khi hoạt động (active) hoặc không hoạt động (inactive).

**File**: `app/(tabs)/_layout.tsx`

Dùng `@expo/vector-icons/MaterialCommunityIcons`, set `tabBarIcon`, `tabBarActiveTintColor`, `tabBarInactiveTintColor`, và ẩn shadow/elevation để UI phẳng hơn.

```tsx
// app/(tabs)/_layout.tsx
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#f5f5f5" },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "#f5f5f5",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: "#5200ee",   // Màu tím chủ đạo khi active
        tabBarInactiveTintColor: "#666666", // Màu xám khi inactive
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today's Habits",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-today"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="streaks"
        options={{
          title: "Streaks",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-line"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add-habit"
        options={{
          title: "Add Habit",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
```

**Các icons được sử dụng**:

| Tab | Icon Name | Ý nghĩa |
|-----|-----------|----------|
| Today's Habits | `calendar-today` | Hiển thị thói quen trong ngày |
| Streaks | `chart-line` | Biểu đồ chuỗi |
| Add Habit | `plus-circle` | Thêm thói quen mới |

---

## 13. Bắt đầu ứng dụng theo dõi thói quen: Cấu trúc dự án & Mục tiêu

Bạn sẽ bắt đầu xây dựng ứng dụng theo dõi thói quen thực tế, bao gồm việc thiết lập cấu trúc dự án ban đầu và xác định các mục tiêu chính của ứng dụng.

### Mục tiêu của ứng dụng

```
CRUD habits       → Tạo, Đọc, Sửa, Xóa thói quen
mark complete     → Đánh dấu thói quen đã hoàn thành trong ngày
đếm streak        → Đếm chuỗi ngày liên tiếp hoàn thành
hiển thị ranking  → Xếp hạng thói quen theo streak
realtime update   → Cập nhật ngay lập tức khi có thay đổi
```

### Cấu trúc dự án

```
react-native-course/
├── app/                          # Expo Router - File-based routing
│   ├── _layout.tsx              # Root layout + Auth Guard
│   ├── auth.tsx                 # Màn hình Sign In / Sign Up
│   └── (tabs)/                  # Tab navigation group
│       ├── _layout.tsx          # Cấu hình Tabs
│       ├── index.tsx            # Today's Habits (Home)
│       ├── streaks.tsx          # Xem Streaks & Ranking
│       └── add-habit.tsx        # Form thêm thói quen mới
│
├── lib/
│   ├── appwrite.ts              # Appwrite Client & Database setup
│   └── auth-context.tsx         # AuthProvider + useAuth hook
│
├── types/
│   └── database.type.ts         # TypeScript interfaces
│
├── assets/                      # Hình ảnh, icons, splash screen
├── index.js                     # Entry point
├── app.json                     # Expo config
├── package.json                 # Dependencies
├── .env.local                   # Environment variables (secrets)
└── tsconfig.json               # TypeScript config
```

---

## 14. Thiết lập Appwrite cho Backend Services

Phần này giới thiệu về việc sử dụng một dịch vụ backend để quản lý dữ liệu và xác thực người dùng.

### Appwrite là gì?

**Appwrite** là một nền tảng `backend-as-a-service (BaaS)` mã nguồn mở (open-source) và tự lưu trữ (self-hosted). Nó cung cấp các tính năng backend cốt lõi mà nhà phát triển cần để xây dựng ứng dụng mà không phải xây dựng từ đầu.

### Tính năng chính của Appwrite

| Tính năng | Mô tả |
|-----------|--------|
| **Authentication** | Hệ thống đăng nhập/đăng ký (Email + Password, OAuth, Magic URL...) |
| **Databases** | Cơ sở dữ liệu NoSQL với Collections và Documents |
| **Storage** | Lưu trữ file/media |
| **Functions** | Serverless functions |
| **Realtime** | Cập nhật dữ liệu ngay lập tức (websocket) |

### Ưu điểm của Appwrite

- **Mã nguồn mở**: Tự do tùy chỉnh theo nhu cầu
- **Tự lưu trữ**: Cho phép kiểm soát dữ liệu và hạ tầng hoàn toàn
- **Hệ thống quản lý người dùng tốt**: Built-in user management
- **Hỗ trợ tích hợp đa dạng**: REST API, SDK nhiều ngôn ngữ
- **Linh hoạt và có khả năng mở rộng**: Từ prototype đến production
- **Cộng đồng hỗ trợ tích cực**: Tài liệu đầy đủ, cộng đồng lớn

### Thiết lập trên Appwrite Console

1. **Tạo Project** mới trên Appwrite Console
2. **Tạo Database** với 2 Collections:
   - `habits` — Lưu thông tin thói quen
   - `habit_completions` — Lưu lịch sử hoàn thành
3. **Bật Auth** — Sử dụng phương thức **Email + Password**

---

## 15. Tạo Appwrite Client trong dự án của bạn

Hướng dẫn cách kết nối ứng dụng React Native của bạn với dịch vụ Appwrite bằng cách tạo một `client` và cấu hình các thông tin cần thiết.

### Cài đặt thư viện

```bash
npm install react-native-appwrite
```

### Tạo Appwrite Client

**File**: `lib/appwrite.ts`

```typescript
// lib/appwrite.ts
import { Account, Client, Databases } from "react-native-appwrite";

// Khởi tạo Client - kết nối đến Appwrite server
export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)   // "https://fra.cloud.appwrite.io/v1"
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!) // "6862ccc60032541bfe57"
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!)   // "com.hungdev.habittracker"

// Account service - cho authentication
export const account = new Account(client);

// Databases service - cho CRUD operations
export const databases = new Databases(client);

// Database & Collection IDs
export const DATABASE_ID = process.env.EXPO_PUBLIC_DB_ID;
export const HABIT_COLLECTION_ID = process.env.EXPO_PUBLIC_HABIT_COLLECTION_ID;
export const COMPLETIONS_COLLECTION_ID = process.env.EXPO_PUBLIC_COMPLETETIONS_COLLECTION_ID;

// Realtime response type
export interface RealtimeResponse {
  events: string[];
  payload: any;
}
```

### Lưu Environment Variables

**File**: `.env.local`

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT="https://fra.cloud.appwrite.io/v1"
EXPO_PUBLIC_APPWRITE_PROJECT_ID="6862ccc60032541bfe57"
EXPO_PUBLIC_APPWRITE_PLATFORM="com.hungdev.habittracker"

EXPO_PUBLIC_DB_ID="687e8706002fe156b982"
EXPO_PUBLIC_HABIT_COLLECTION_ID="687e874a0011a5251b8d"
EXPO_PUBLIC_COMPLETETIONS_COLLECTION_ID="689b8c3d001ec9d591f1"
```

> **Lưu ý quan trọng**: Các biến môi trường có tiền tố `EXPO_PUBLIC_` mới có thể được truy cập từ mã nguồn Expo. KHÔNG bao giờ đưa credentials nhạy cảm lên GitHub — sử dụng `.env.local` và thêm vào `.gitignore`.

---

## 16. Xây dựng giao diện người dùng trang xác thực với React Native Paper

Bạn sẽ bắt đầu xây dựng giao diện người dùng cho các màn hình đăng ký (Sign Up) và đăng nhập (Sign In) của ứng dụng.

### React Native Paper là gì?

**React Native Paper** là một thư viện UI chất lượng cao, tuân thủ `Material Design 3` cho React Native. Nó cung cấp một bộ đầy đủ các `pre-built, customizable components`.

### Các thành phần được sử dụng

| Component | Mục đích |
|-----------|----------|
| `TextInput` | Ô nhập liệu cho email/password |
| `Button` | Nút bấm (contained, text mode) |
| `KeyboardAvoidingView` | Tránh bàn phím che nội dung |
| `Text` | Hiển thị text, error messages |

### Màn hình Auth

**File**: `app/auth.tsx`

```tsx
// app/auth.tsx
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function AuthScreen() {
  // State cho form
  const [isSignup, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("");

  const theme = useTheme();
  const router = useRouter();
  const { signIn, signUp } = useAuth();

  // Xử lý submit form
  const handleAuth = async () => {
    // Validate: không được trống
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Validate: password >= 6 ký tự
    if (password.length < 6) {
      setError("Passwords must be at least 6 characters long.");
      return;
    }
    setError(null);

    if (isSignup) {
      const error = await signUp(email, password);
      if (error) {
        setError(error);
        return;
      }
    } else {
      const error = await signIn(email, password);
      if (error) {
        setError(error);
        return;
      }
      // Chỉ chuyển về home khi sign in thành công
      router.replace("/");
    }
  };

  // Chuyển đổi giữa Sign In / Sign Up
  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Tiêu đề */}
        <Text style={styles.title} variant="headlineMedium">
          {isSignup ? "Create Account" : "Welcome Back"}
        </Text>

        {/* Email Input */}
        <TextInput
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
          style={styles.input}
          onChangeText={setEmail}
        />

        {/* Password Input */}
        <TextInput
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          mode="outlined"
          style={styles.input}
          onChangeText={setPassword}
        />

        {/* Error Text */}
        {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}

        {/* Nút Submit */}
        <Button mode="contained" style={styles.button} onPress={handleAuth}>
          {isSignup ? "Sign Up" : "Sign In"}
        </Button>

        {/* Nút chuyển đổi chế độ */}
        <Button
          mode="text"
          onPress={handleSwitchMode}
          style={styles.switchModeButton}
        >
          {isSignup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    marginBottom: 25,
  },
  button: {
    marginTop: 8,
  },
  switchModeButton: {
    marginTop: 16,
  },
});
```

---

## 17. Triển khai Route Guards với Expo Router

Phần này tập trung vào việc bảo vệ các tuyến đường (routes) trong ứng dụng, đảm bảo rằng chỉ những người dùng được xác thực mới có thể truy cập vào các màn hình nhất định.

### Route Guards là gì?

**Route Guards** được sử dụng để kiểm soát quyền truy cập vào các `route` nhất định dựa trên các điều kiện, chẳng hạn như trạng thái xác thực (authentication status) của người dùng.

### Ví dụ thực tế

| Trường hợp | Hành vi |
|-----------|---------|
| Chưa đăng nhập + vào `/` | Redirect → `/auth` |
| Đã đăng nhập + vào `/auth` | Redirect → `/` |
| Chưa đăng nhập + vào `/auth` | Cho phép ở lại |
| Đã đăng nhập + vào `/` | Cho phép ở lại |

### Triển khai Route Guard

**File**: `app/_layout.tsx`

```tsx
// app/_layout.tsx
import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

// RouteGuard component - kiểm tra auth trước khi render
function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();
  const [isMounted, setIsMounted] = useState(false);

  // Đánh dấu đã mount (tránh redirect trước khi component render)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Kiểm tra segments và user để redirect
  useEffect(() => {
    const inAuthGroup = segments[0] === "auth";

    // Chưa đăng nhập → không ở trang auth → redirect đến auth
    if (isMounted && !user && !inAuthGroup && !isLoadingUser) {
      router.replace("/auth");
    }
    // Đã đăng nhập → đang ở trang auth → redirect đến home
    else if (isMounted && user && inAuthGroup && !isLoadingUser) {
      router.replace("/");
    }
  }, [user, segments, router, isMounted, isLoadingUser]);

  return <>{children}</>;
}

// Root Layout - bọc toàn bộ app với providers
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <PaperProvider>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <RouteGuard>
                <Stack>
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                </Stack>
              </RouteGuard>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </PaperProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
```

**Giải thích**:

- `useSegments()` — Trả về mảng các segment của URL hiện tại. Ví dụ: URL `/auth` → `["auth"]`, URL `/` → `["(tabs)"]`
- `isMounted` — Tránh redirect trước khi component được mount lần đầu
- `isLoadingUser` — Chờ cho đến khi kiểm tra session hoàn tất trước khi redirect

---

## 18. Xử lý logic đăng ký / đăng nhập

Bạn sẽ viết mã để xử lý logic nghiệp vụ (business logic) cho quá trình đăng ký và đăng nhập người dùng, tương tác với Appwrite để tạo và xác thực tài khoản.

### React Context API là gì?

**React Context API** là một tính năng mạnh mẽ của React (từ React 16.3) cung cấp một cách để chia sẻ dữ liệu giữa các `component` mà không cần truyền `props` trực tiếp qua mọi cấp độ của cây `component` (tránh `prop drilling`).

**Cách sử dụng**:
- Tạo một `Context` bằng `createContext`
- Sử dụng `Provider` để cung cấp giá trị cho `Context`
- Sử dụng `useContext` để tiêu thụ giá trị đó trong các `component` con

### AuthContext - Quản lý trạng thái xác thực

**File**: `lib/auth-context.tsx`

```typescript
// lib/auth-context.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { ID, Models } from "react-native-appwrite";
import { account } from "./appwrite";

// Định nghĩa type cho AuthContext
type AuthContextType = {
  user: Models.User<Models.Preferences> | null;
  isLoadingUser: boolean;
  signUp: (email: string, password: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
};

// Tạo Context với undefined default
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component - bọc app
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [isLoadingUser, setisLoadingUser] = useState<boolean>(true);

  // Khi app khởi động → kiểm tra đã có session chưa
  useEffect(() => {
    getUser();
  }, []);

  // Lấy user hiện tại từ Appwrite
  const getUser = async () => {
    try {
      const session = await account.get();
      setUser(session);
    } catch {
      // Không có session → user = null
      setUser(null);
    } finally {
      setisLoadingUser(false);
    }
  };

  // Đăng ký tài khoản mới
  const signUp = async (
    email: string,
    password: string
  ): Promise<string | null> => {
    try {
      // Bước 1: Tạo account mới
      await account.create(ID.unique(), email, password);
      // Bước 2: Tự động đăng nhập luôn
      await signIn(email, password);
      return null; // Thành công
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
      return "An error occured during sign up";
    }
  };

  // Đăng nhập
  const signIn = async (
    email: string,
    password: string
  ): Promise<string | null> => {
    try {
      // Bước 1: Tạo session với email/password
      await account.createEmailPasswordSession(email, password);
      // Bước 2: Lấy thông tin user và lưu vào state
      const session = await account.get();
      setUser(session);
      return null; // Thành công
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
      return "An error occured during sign in";
    }
  };

  // Đăng xuất
  const signOut = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoadingUser, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook để sử dụng AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be inside of the AuthProvider");
  }
  return context;
}
```

### Luồng đăng ký (Sign Up)

```
1. User nhập email + password
2. Gọi account.create(ID.unique(), email, password)
   → Tạo tài khoản mới trên Appwrite
3. Gọi signIn(email, password) để auto-login
   → account.createEmailPasswordSession()
   → account.get() → lưu vào user state
4. RouteGuard redirect → "/"
```

### Luồng đăng nhập (Sign In)

```
1. User nhập email + password
2. Gọi account.createEmailPasswordSession(email, password)
   → Tạo session trên Appwrite
3. Gọi account.get() → lấy thông tin user
4. Lưu user vào state
5. RouteGuard redirect → "/"
```

---

## 19. Hoàn thiện giao diện người dùng & Chuyển đổi giữa các chế độ xác thực

Hoàn thiện giao diện người dùng của trang xác thực và triển khai chức năng chuyển đổi giữa các chế độ đăng ký và đăng nhập.

### Toggle giữa Sign In / Sign Up

Trong `app/auth.tsx`, state `isSignup` kiểm soát:

```tsx
// State toggle
const [isSignup, setIsSignUp] = useState<boolean>(false);

// Tiêu đề thay đổi theo mode
<Text style={styles.title} variant="headlineMedium">
  {isSignup ? "Create Account" : "Welcome Back"}
</Text>

// Nút submit thay đổi theo mode
<Button mode="contained" style={styles.button} onPress={handleAuth}>
  {isSignup ? "Sign Up" : "Sign In"}
</Button>

// Nút chuyển đổi
<Button mode="text" onPress={handleSwitchMode}>
  {isSignup
    ? "Already have an account? Sign In"
    : "Don't have an account? Sign Up"}
</Button>

// Logic chuyển đổi
const handleSwitchMode = () => {
  setIsSignUp((prev) => !prev);
};
```

### Validate form

```tsx
const handleAuth = async () => {
  // 1. Kiểm tra không trống
  if (!email || !password) {
    setError("Please fill in all fields");
    return;
  }
  // 2. Kiểm tra độ dài password
  if (password.length < 6) {
    setError("Passwords must be at least 6 characters long.");
    return;
  }
  // ... xử lý đăng ký/đăng nhập
};
```

---

## 20. Kết nối logic xác thực với Context API

Phần này giới thiệu cách quản lý trạng thái xác thực toàn cục (global authentication state) bằng cách sử dụng `Context API` của React.

### Tạo AuthContext

**File**: `lib/auth-context.tsx`

```typescript
// Tạo Context với type đầy đủ
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider cung cấp các giá trị
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider
      value={{ user, isLoadingUser, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook để sử dụng
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be inside of the AuthProvider");
  }
  return context;
}
```

### Sử dụng trong component

```tsx
// Ở bất kỳ đâu trong app
import { useAuth } from "@/lib/auth-context";

function MyComponent() {
  const { user, signOut } = useAuth();

  if (user) {
    return <Text>Welcome, {user.name}!</Text>;
  }
  return <Text>Please sign in</Text>;
}
```

---

## 21. Sử dụng Auth Provider và chuyển hướng người dùng đã đăng nhập

Bạn sẽ triển khai một `Auth Provider` (nhà cung cấp xác thực) sử dụng `Context API` để quản lý trạng thái đăng nhập của người dùng và tự động chuyển hướng họ đến màn hình chính sau khi đăng nhập thành công.

### AuthProvider trong Root Layout

**File**: `app/_layout.tsx`

```tsx
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>          {/* ← Bọc app với AuthProvider */}
        <PaperProvider>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <RouteGuard>    {/* ← Kiểm tra auth và redirect */}
                <Stack>
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                </Stack>
              </RouteGuard>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </PaperProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
```

### Luồng chuyển hướng

```
┌─────────────────────────────────────────────────────────┐
│                    App khởi động                        │
│                         ↓                               │
│              AuthProvider.getUser()                     │
│                         ↓                               │
│              isLoadingUser = true                       │
│                         ↓                               │
│              Kiểm tra session trên Appwrite             │
│                    ↓              ↓                     │
│              Có session       Không có session          │
│                    ↓              ↓                     │
│           user = userObj      user = null               │
│                    ↓              ↓                     │
│         isLoadingUser = false                    │
│                    ↓              ↓                     │
│     RouteGuard phát hiện user tồn tại     │
│                    ↓              ↓                     │
│      Đang ở /auth? → redirect /      Đang ở /? → stay   │
│                    ↓              ↓                     │
│              Home Screen          Auth Screen            │
└─────────────────────────────────────────────────────────┘
```

---

## 22. Chức năng đăng xuất và kiểm tra luồng xác thực

Hoàn thiện chức năng đăng xuất và kiểm tra toàn bộ luồng xác thực để đảm bảo mọi thứ hoạt động đúng như mong đợi.

### Sign Out trong AuthContext

```typescript
// lib/auth-context.tsx
const signOut = async () => {
  try {
    // Xóa session hiện tại trên Appwrite
    await account.deleteSession("current");
    // Xóa user khỏi state
    setUser(null);
  } catch (error) {
    console.log(error);
  }
};
```

### Nút Sign Out trên Home Screen

**File**: `app/(tabs)/index.tsx`

```tsx
// app/(tabs)/index.tsx
import { useAuth } from "@/lib/auth-context";

export default function Index() {
  const { signOut, user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.title}>
          Today's Habit
        </Text>
        {/* Nút Sign Out */}
        <Button mode="text" onPress={signOut} icon={"logout"}>
          Sign Out
        </Button>
      </View>
      {/* ... */}
    </View>
  );
}
```

### Kiểm tra luồng xác thực

| Hành động | Kết quả |
|-----------|---------|
| App khởi động có session | Tự động vào Home |
| App khởi động không có session | Redirect đến Auth |
| Đăng nhập thành công | Redirect đến Home |
| Đăng ký thành công | Auto login → Redirect đến Home |
| Bấm Sign Out | Xóa session → Redirect đến Auth |

---

## 23. Lập kế hoạch các màn hình theo dõi thói quen

Bạn sẽ lên kế hoạch chi tiết cho các màn hình chính của ứng dụng theo dõi thói quen.

### Ba màn hình chính

```
app/
├── (tabs)/
│   ├── index.tsx        → Home (Today) - Danh sách habits hôm nay
│   ├── add-habit.tsx    → Add Habit - Form thêm thói quen mới
│   └── streaks.tsx       → Streaks - Xem thứ hạng streak
```

### Mô tả chi tiết

| Màn hình | Route | Mục đích |
|----------|-------|----------|
| **Home (Today)** | `/` hoặc `/(tabs)/index.tsx` | Hiển thị danh sách thói quen hôm nay, đánh dấu hoàn thành, vuốt để xóa |
| **Add Habit** | `/(tabs)/add-habit.tsx` | Form nhập thông tin thói quen mới |
| **Streaks** | `/(tabs)/streaks.tsx` | Xem streak hiện tại, streak tốt nhất, xếp hạng top 3 |

---

## 24. Tạo kiểu Tabs & Tùy chỉnh giao diện người dùng điều hướng

Tiếp tục tùy chỉnh giao diện của các tab và các yếu tố điều hướng khác để mang lại trải nghiệm người dùng tốt nhất.

### Tùy chỉnh Tab Bar

**File**: `app/(tabs)/_layout.tsx`

```tsx
<Tabs
  screenOptions={{
    // Header (thanh trên cùng)
    headerStyle: { backgroundColor: "#f5f5f5" },
    headerShadowVisible: false,

    // Tab Bar (thanh dưới cùng)
    tabBarStyle: {
      backgroundColor: "#f5f5f5",
      borderTopWidth: 0,      // Bỏ đường viền trên
      elevation: 0,           // Bỏ shadow Android
      shadowOpacity: 0,       // Bỏ shadow iOS
    },

    // Màu sắc icon
    tabBarActiveTintColor: "#5200ee",  // Tím chủ đạo
    tabBarInactiveTintColor: "#666666", // Xám nhạt
  }}
>
```

### Nguyên tắc thiết kế

- **Màu chủ đạo**: `#5200ee` (tím) — nhất quán toàn app
- **Background**: `#f5f5f5` (xám nhạt) — tạo độ tương phản
- **Border/Shadow**: Ẩn để UI phẳng, hiện đại hơn
- **Icon rõ ràng**: Sử dụng icon có ý nghĩa trực quan

---

## 25. Thiết lập Appwrite Database & Collections

Phần này hướng dẫn cách cấu hình cơ sở dữ liệu (database) và các bộ sưu tập (collections) trong Appwrite để lưu trữ dữ liệu thói quen của người dùng.

### Appwrite Permissions

Appwrite cung cấp một cơ chế quyền hạn linh hoạt để quản lý người dùng, nhóm hoặc vai trò nào có thể truy cập một tài nguyên cụ thể.

**Hai cấp độ quyền hạn**:

| Cấp độ | Mô tả |
|--------|-------|
| **Collection level** | Áp dụng cho mọi tài liệu trong bộ sưu tập |
| **Document level** | Cấp quyền cho từng tài liệu riêng lẻ (cần bật **Document Security**) |

### Thiết lập Collections

#### Collection `habits`

Lưu thông tin thói quen của người dùng.

| Attribute | Type | Mô tả |
|-----------|------|--------|
| `user_id` | string | Appwrite User ID |
| `title` | string | Tên thói quen |
| `description` | string | Mô tả chi tiết |
| `frequency` | string | `daily`, `weakly`, `monthly` |
| `streak_count` | integer | Số ngày streak hiện tại |
| `last_completed` | string | ISO timestamp lần hoàn thành cuối |
| `created_at` | string | ISO timestamp tạo |

#### Collection `habit_completions`

Lưu lịch sử hoàn thành thói quen (để tính streak chính xác).

| Attribute | Type | Mô tả |
|-----------|------|--------|
| `habit_id` | string | Reference đến habit document |
| `user_id` | string | Appwrite User ID |
| `completed_at` | string | ISO timestamp |

### Thiết lập Permissions

1. Vào **Settings** của Collection
2. Bật **Document Security**
3. Thêm permissions cho `user`:
   - **Read**: `read("user:{user_id}")`
   - **Write**: `write("user:{user_id}")`

> **Lưu ý**: `user:{user_id}` là role đại diện cho chủ sở hữu document. Khi tạo document từ React Native, Appwrite sẽ tự động thay thế bằng ID của user đang đăng nhập.

### TypeScript Interfaces

**File**: `types/database.type.ts`

```typescript
// types/database.type.ts
import { Models } from "react-native-appwrite";

// Habit document
export interface Habit extends Models.Document {
  user_id: string;
  title: string;
  description: string;
  frequency: string;
  streak_count: number;
  last_completed: string;
  created_at: string;
}

// Habit completion document
export interface HabitCompletion extends Models.Document {
  habit_id: string;
  user_id: string;
  completed_at: string;
}
```

---

## 26. Kết nối với Appwrite Database từ React Native

Bạn sẽ học cách tương tác với cơ sở dữ liệu Appwrite từ ứng dụng React Native của mình, bao gồm các thao tác đọc, ghi, cập nhật và xóa dữ liệu (CRUD operations).

### Các hàm CRUD

```typescript
// Import từ react-native-appwrite
import { ID, Query } from "react-native-appwrite";
import { databases, DATABASE_ID, HABIT_COLLECTION_ID } from "@/lib/appwrite";

// 1. Đọc - Lấy danh sách documents
await databases.listDocuments(
  DATABASE_ID ?? "",
  HABIT_COLLECTION_ID ?? "",
  [Query.equal("user_id", userId)]  // Filter theo user
);

// 2. Tạo - Thêm document mới
await databases.createDocument(
  DATABASE_ID ?? "",
  HABIT_COLLECTION_ID ?? "",
  ID.unique(),  // ID tự động
  {
    user_id: user.$id,
    title: "Drink Water",
    description: "Drink 8 glasses a day",
    frequency: "daily",
    streak_count: 0,
    last_completed: new Date().toISOString(),
    created_at: new Date().toISOString(),
  }
);

// 3. Cập nhật - Sửa document
await databases.updateDocument(
  DATABASE_ID ?? "",
  HABIT_COLLECTION_ID ?? "",
  habitId,
  {
    streak_count: habit.streak_count + 1,
    last_completed: new Date().toISOString(),
  }
);

// 4. Xóa - Xóa document
await databases.deleteDocument(
  DATABASE_ID ?? "",
  HABIT_COLLECTION_ID ?? "",
  habitId
);
```

### Các Query operators

```typescript
import { Query } from "react-native-appwrite";

// Filter theo user_id
Query.equal("user_id", userId)

// Filter ngày >= hôm nay (cho completions)
const today = new Date();
today.setHours(0, 0, 0, 0);
Query.greaterThanEqual("completed_at", today.toISOString())

// Các operator khác
Query.notEqual("status", "completed")
Query.lessThan("age", 18)
Query.contains("title", "water")
```

---

## 27. Xây dựng giao diện người dùng màn hình thêm thói quen

Thiết kế và xây dựng giao diện người dùng cho màn hình cho phép người dùng thêm thói quen mới vào ứng dụng.

### Màn hình Add Habit

**File**: `app/(tabs)/add-habit.tsx`

```tsx
// app/(tabs)/add-habit.tsx
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  SegmentedButtons,
  Text,
  TextInput,
} from "react-native-paper";

const FREQUENCIES = ["daily", "weakly", "monthly"];

export default function AddHabitScreen() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [error, setError] = useState<string>("");

  return (
    <View style={styles.container}>
      {/* Input: Title */}
      <TextInput
        label="Title"
        mode="outlined"
        onChangeText={setTitle}
        style={styles.input}
      />

      {/* Input: Description */}
      <TextInput
        label="Description"
        mode="outlined"
        onChangeText={setDescription}
        style={styles.input}
      />

      {/* Segmented Buttons: Frequency */}
      <View style={styles.frequenctContainer}>
        <SegmentedButtons
          value={frequency}
          onValueChange={setFrequency}
          buttons={FREQUENCIES.map((freq) => ({
            value: freq,
            label: freq.charAt(0).toUpperCase() + freq.slice(1),
          }))}
        />
      </View>

      {/* Submit Button */}
      <Button
        mode="contained"
        onPress={handleSubmit}
        disabled={!title || !description}
      >
        Add Habit
      </Button>

      {/* Error Display */}
      {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  input: {
    marginBottom: 8,
  },
  frequenctContainer: {
    marginBottom: 24,
  },
});
```

### SegmentedButtons Component

`SegmentedButtons` là component từ React Native Paper cho phép chọn một trong nhiều options. Ở đây dùng để chọn frequency: `daily`, `weakly`, `monthly`.

```tsx
<SegmentedButtons
  value={frequency}                    // Giá trị hiện tại
  onValueChange={setFrequency}         // Callback khi chọn
  buttons={[
    { value: "daily", label: "Daily" },
    { value: "weakly", label: "Weakly" },
    { value: "monthly", label: "Monthly" },
  ]}
/>
```

---

## 28. Thêm thói quen vào Database

Triển khai logic để lưu trữ thông tin thói quen mới vào cơ sở dữ liệu Appwrite.

### Submit Handler

**File**: `app/(tabs)/add-habit.tsx`

```tsx
import { DATABASE_ID, databases, HABIT_COLLECTION_ID } from "@/lib/appwrite";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ID } from "react-native-appwrite";

const handleSubmit = async () => {
  if (!user || !DATABASE_ID || !HABIT_COLLECTION_ID) return;

  try {
    // Tạo document mới trong habits collection
    await databases.createDocument(
      DATABASE_ID,
      HABIT_COLLECTION_ID,
      ID.unique(),  // Tạo ID duy nhất tự động
      {
        user_id: user.$id,           // Lấy từ AuthContext
        title,                         // Từ state
        description,                   // Từ state
        frequency,                     // Từ state (daily/weakly/monthly)
        streak_count: 0,               // Mới tạo → streak = 0
        last_completed: new Date().toISOString(),
        created_at: new Date().toISOString(),
      }
    );

    // Điều hướng về màn hình trước (Home)
    router.back();

  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
      return;
    }
    setError("There was an error creating the habit");
  }
};
```

---

## 29. Xử lý quyền hạn trong Appwrite

Bạn sẽ tìm hiểu cách cấu hình và quản lý các quyền hạn trong Appwrite để đảm bảo rằng dữ liệu của người dùng được bảo mật và chỉ những người dùng có quyền mới có thể truy cập hoặc sửa đổi chúng.

### Cách hoạt động

Khi bạn bật **Document Security** trong Collection settings, bạn cần set quyền tại thời điểm tạo document:

```typescript
// Trong Appwrite Console:
// 1. Vào Collection "habits"
// 2. Settings → Document Security → ON

// 3. Thêm Attributes:
//    - user_id, title, description, frequency, streak_count,
//      last_completed, created_at (string/integer)

// 4. Indexes:
//    - user_id (ASC) - để query nhanh theo user
```

### Khi tạo document từ client

Appwrite sẽ tự động gán `user:{user_id}` role cho document dựa trên session hiện tại. Miễn là user đang đăng nhập, họ sẽ có quyền đọc/ghi document họ tạo.

### Các Roles có sẵn

| Role | Mô tả |
|------|-------|
| `*` | Mọi người (public) |
| `users` | Tất cả user đã đăng nhập |
| `user:{id}` | User cụ thể |
| `team:{id}` | Thành viên team |
| `role:admin` | Admin |

---

## 30. Lấy & Hiển thị thói quen hôm nay

Triển khai chức năng để lấy các thói quen đã được lên lịch cho ngày hiện tại từ cơ sở dữ liệu và hiển thị chúng trên màn hình.

### Fetch Habits

**File**: `app/(tabs)/index.tsx`

```tsx
// Lấy tất cả habits của user
const fetchHabits = useCallback(async () => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID ?? "",
      HABIT_COLLECTION_ID ?? "",
      [Query.equal("user_id", user?.$id ?? "")]  // Filter theo user
    );
    setHabits(response.documents as Habit[]);
  } catch (error) {
    console.error(error);
  }
}, [user?.$id]);
```

### Fetch Today's Completions

```tsx
// Lấy completions của hôm nay
const fetchTodayCompletetions = useCallback(async () => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Midnight hôm nay

    const response = await databases.listDocuments(
      DATABASE_ID ?? "",
      COMPLETIONS_COLLECTION_ID ?? "",
      [
        Query.equal("user_id", user?.$id ?? ""),
        Query.greaterThanEqual("completed_at", today.toISOString()),
      ]
    );

    const completions = response.documents as HabitCompletion[];
    // Lưu mảng habit_ids đã hoàn thành
    setCompletedHabits(completions.map((c) => c.habit_id));
  } catch (error) {
    console.error(error);
  }
}, [user?.$id]);
```

### Kiểm tra habit đã hoàn thành chưa

```tsx
// Check habit có trong danh sách completions hôm nay không
const isHabitCompleted = (habitsId: string) =>
  completedHabits?.includes(habitsId);
```

---

## 31. Xây dựng giao diện người dùng Thói quen

Card có `title`, `description`, `streak badge` và `frequency badge`.

### Habit Card Component

**File**: `app/(tabs)/index.tsx`

```tsx
<Surface
  style={isHabitCompleted(habit.$id) ? styles.cardCompleted : styles.card}
  elevation={0}
>
  <View style={styles.cardContent}>
    {/* Tiêu đề */}
    <Text style={styles.cardTitle}>{habit.title}</Text>

    {/* Mô tả */}
    <Text style={styles.cardDescription}>{habit.description}</Text>

    {/* Footer: Streak + Frequency badges */}
    <View style={styles.cardFooter}>
      {/* Streak Badge */}
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

      {/* Frequency Badge */}
      <View style={styles.frequencyBadge}>
        <Text style={styles.frequencyText}>
          {habit.frequency.charAt(0).toUpperCase() +
            habit.frequency.slice(1)}
        </Text>
      </View>
    </View>
  </View>
</Surface>
```

---

## 32. Tạo kiểu cho Thẻ thói quen

Bo góc, shadow nhẹ, màu nền variant theo theme.

### Styles cho Habit Card

```tsx
const styles = StyleSheet.create({
  card: {
    marginBottom: 18,
    borderRadius: 18,
    backgroundColor: "#f7f2fa",   // Tím nhạt
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
    opacity: 0.6,   // Mờ đi khi đã hoàn thành
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

  // Streak badge - cam nhạt
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

  // Frequency badge - tím nhạt
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
});
```

---

## 33. Làm cho màn hình có thể cuộn

Dùng `ScrollView` (vài item) hoặc **FlatList** (nhiều item) + `keyExtractor`.

### ScrollView cho Habits

**File**: `app/(tabs)/index.tsx`

```tsx
<View style={styles.container}>
  {/* Header */}
  <View style={styles.header}>
    <Text variant="headlineSmall" style={styles.title}>
      Today's Habit
    </Text>
    <Button mode="text" onPress={signOut} icon={"logout"}>
      Sign Out
    </Button>
  </View>

  {/* Empty State */}
  {habits?.length === 0 ? (
    <View style={styles.emptState}>
      <Text style={styles.emptStateText}>
        No Habits yet. Add your first Habit!
      </Text>
    </View>
  ) : (
    /* Scrollable List */
    <ScrollView showsVerticalScrollIndicator={false}>
      {habits?.map((habit, index) => (
        <Swipeable
          key={habit.$id}  // Dùng $id làm key
          // ... các props khác
        >
          <Surface>...</Surface>
        </Swipeable>
      ))}
    </ScrollView>
  )}
</View>
```

### So sánh ScrollView vs FlatList

| | ScrollView | FlatList |
|---|---|---|
| **Số lượng items** | Vài chục items | Hàng trăm - hàng nghìn |
| **Performance** | Render tất cả cùng lúc | Chỉ render items visible |
| **Props** | `children` | `data`, `renderItem`, `keyExtractor` |
| **Use case** | Form, static content | Lists, feeds |

---

## 34. Thiết lập vuốt để hoàn thành/xóa

Dùng `react-native-gesture-handler` `Swipeable` để hiện actions trái/phải.

### Cài đặt

```bash
npm install react-native-gesture-handler
```

### Swipeable Component

**File**: `app/(tabs)/index.tsx`

```tsx
import { ScrollView, Swipeable } from "react-native-gesture-handler";

// Swipe TRÁI → Xóa (Delete)
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

// Swipe PHẢI → Hoàn thành (Complete)
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
```

### Styles cho Swipe Actions

```tsx
const styles = StyleSheet.create({
  swipeActionLeft: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
    backgroundColor: "#ef3935",  // Đỏ - Xóa
    borderRadius: 18,
    marginBottom: 18,
    marginTop: 2,
    paddingLeft: 16,
  },

  swipeActionRight: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
    backgroundColor: "#4caf50",  // Xanh - Hoàn thành
    borderRadius: 18,
    marginBottom: 18,
    marginTop: 2,
    paddingRight: 16,
  },
});
```

---

## 35. Triển khai các hành động vuốt

Trái: xóa habit. Phải: đánh dấu hoàn thành. Đừng quên đóng Swipeable ref.

### Swipeable với onSwipeableOpen

**File**: `app/(tabs)/index.tsx`

```tsx
{habits?.map((habit, index) => (
  <Swipeable
    key={habit.$id}

    // Ref để đóng Swipeable sau khi xử lý
    ref={(ref) => {
      swipeableRefs.current[habit.$id] = ref;
    }}

    // Không bounce khi vuốt quá
    overshootRight={false}
    overshootLeft={false}

    // Render actions
    renderLeftActions={renderLeftActions}
    renderRightActions={() => renderRightActions(habit.$id)}

    // Xử lý khi vuốt mở
    onSwipeableOpen={(direction) => {
      if (direction === "left") {
        // Vuốt TRÁI → Xóa
        handleDeleteHabit(habit.$id);
      } else if (direction === "right") {
        // Vuốt PHẢI → Hoàn thành
        handleCompleteHabit(habit.$id);
      }
      // ĐÓNG SWIPEABLE REF để không bị stuck
      (swipeableRefs.current[habit.$id] as Swipeable | null)?.close();
    }}
  >
    <Surface style={styles.card}>
      {/* ... card content ... */}
    </Surface>
  </Swipeable>
))}
```

### Luồng xử lý vuốt

```
1. User vuốt card sang TRÁI hoặc PHẢI
2. Swipeable hiển thị action view (đỏ/xanh)
3. User tiếp tục vuốt qua ngưỡng
4. → onSwipeableOpen được gọi với direction
5. → Gọi handler tương ứng (delete/complete)
6. → Đóng Swipeable ref (close())
7. → Card trở về vị trí bình thường
```

---

## 36. Xóa một thói quen bằng cách vuốt

`databases.deleteDocument` theo id.

### Delete Handler

```tsx
const handleDeleteHabit = async (id: string) => {
  try {
    await databases.deleteDocument(
      DATABASE_ID!,
      HABIT_COLLECTION_ID!,
      id  // Document ID cần xóa
    );
    // useEffect sẽ tự refetch sau khi realtime notification
  } catch (error) {
    console.error(error);
  }
};
```

### Tích hợp vào Swipeable

```tsx
onSwipeableOpen={(direction) => {
  if (direction === "left") {
    handleDeleteHabit(habit.$id);  // ← Vuốt trái = xóa
  } else if (direction === "right") {
    handleCompleteHabit(habit.$id); // ← Vuốt phải = complete
  }
  (swipeableRefs.current[habit.$id] as Swipeable | null)?.close();
}}
```

---

## 37. Sửa lỗi hành vi Swipe Ref

Lưu `ref` theo `habit.$id`, đóng sau khi xử lý để không bị kẹt trạng thái.

### Vấn đề phổ biến

Khi dùng `map()` để render nhiều `Swipeable`, nếu không lưu ref đúng cách, Swipeable có thể bị "kẹt" ở trạng thái đã mở.

### Giải pháp

```tsx
// Lưu refs theo habit.$id
const swipeableRefs = useRef<{ [key: string]: Swipeable | null }>({});

// Gán ref khi render
<Swipeable
  key={habit.$id}
  ref={(ref) => {
    swipeableRefs.current[habit.$id] = ref;
  }}
  // ... other props
/>

// Đóng ref SAU KHI xử lý action
onSwipeableOpen={(direction) => {
  if (direction === "left") {
    handleDeleteHabit(habit.$id);
  } else if (direction === "right") {
    handleCompleteHabit(habit.$id);
  }
  // Đóng ref để reset trạng thái
  (swipeableRefs.current[habit.$id] as Swipeable | null)?.close();
}}
```

---

## 38. Hoàn thành một thói quen & Tạo Collection mới

Tạo record trong `habit_completions`. Cập nhật `habits.streak_count` và `last_completed`.

### Complete Handler

**File**: `app/(tabs)/index.tsx`

```tsx
const handleCompleteHabit = async (id: string) => {
  // Ngăn chặn duplicate completions
  if (!user || completedHabits?.includes(id)) return;

  try {
    // Bước 1: Tạo completion record
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

    // Bước 2: Cập nhật habit (tăng streak)
    const habit = habits?.find((h) => h.$id === id);
    const currentDate = new Date().toISOString();

    if (!habit) return;

    await databases.updateDocument(
      DATABASE_ID!,
      HABIT_COLLECTION_ID!,
      id,
      {
        streak_count: habit.streak_count + 1,
        last_completed: currentDate,
      }
    );
  } catch (error) {
    console.error(error);
  }
};
```

---

## 39. Cập nhật chuỗi thói quen khi hoàn thành

### Option 1: Đơn giản (streak_count trên document)

Mỗi lần complete → tăng `streak_count` thêm 1.

```typescript
// Đơn giản nhưng không chính xác
await databases.updateDocument(DATABASE_ID!, HABIT_COLLECTION_ID!, id, {
  streak_count: habit.streak_count + 1,
});
```

### Option 2: Chính xác (dựa trên completion history)

Tính streak dựa trên khoảng cách ngày giữa các lần completion (xem phần Streaks ở dưới).

---

## 40. Hoàn thành một thói quen và cập nhật chuỗi

Tạo completion → tính toán → cập nhật `habits`.

### Luồng hoàn thành

```
1. User vuốt phải habit card
2. handleCompleteHabit(habitId) được gọi
3. Check: Đã complete hôm nay chưa?
   → Nếu rồi: return (không làm gì)
   → Nếu chưa: tiếp tục
4. databases.createDocument (COMPLETIONS_COLLECTION)
   → Tạo record: { habit_id, user_id, completed_at }
5. databases.updateDocument (HABITS_COLLECTION)
   → streak_count: +1
   → last_completed: now
6. Realtime notification kích hoạt fetchHabits()
7. UI cập nhật với streak mới
```

---

## 41. Tạo Collection hoàn thành thói quen

`habit_completions` chứa lịch sử để bạn có thể tính **current/best streak** về sau.

### Cấu trúc Collection `habit_completions`

| Field | Type | Mục đích |
|-------|------|----------|
| `habit_id` | string | Liên kết với habit |
| `user_id` | string | User sở hữu |
| `completed_at` | string | Timestamp hoàn thành |

### Tại sao cần collection riêng?

1. **Lịch sử đầy đủ**: Biết user đã complete ngày nào
2. **Tính streak chính xác**: Dựa trên ngày thực tế, không phải số lần
3. **Thống kê**: Total completions, best streak, patterns
4. **Realtime**: Dễ dàng subscribe để cập nhật UI

---

## 42. Lấy các lần hoàn thành hôm nay

Filter theo `completed_at >= startOfToday`.

### Fetch Completions

**File**: `app/(tabs)/index.tsx`

```tsx
const fetchTodayCompletetions = useCallback(async () => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Midnight UTC today

    const response = await databases.listDocuments(
      DATABASE_ID ?? "",
      COMPLETIONS_COLLECTION_ID ?? "",
      [
        Query.equal("user_id", user?.$id ?? ""),
        Query.greaterThanEqual("completed_at", today.toISOString()),
      ]
    );

    const completions = response.documents as HabitCompletion[];
    // Trích xuất habit_ids để check completed status
    setCompletedHabits(completions.map((c) => c.habit_id));
  } catch (error) {
    console.error(error);
  }
}, [user?.$id]);
```

---

## 43. Ngăn chặn các lần hoàn thành trùng lặp

Check đã có completion của `habit_id` trong hôm nay chưa → nếu có thì không ghi thêm.

### Prevent Duplicate

```tsx
const handleCompleteHabit = async (id: string) => {
  // Ngăn double-tap và duplicate completions
  if (!user || completedHabits?.includes(id)) return;

  try {
    // ... tạo completion record
    // ... cập nhật habit
  } catch (error) {
    console.error(error);
  }
};
```

### Cách hoạt động

```tsx
// State lưu habit_ids đã complete hôm nay
const [completedHabits, setCompletedHabits] = useState<string[]>();

// Check trước khi complete
const isHabitCompleted = (habitsId: string) =>
  completedHabits?.includes(habitsId);

// Render right action: "Completed!" nếu đã hoàn thành
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
```

---

## 44. Đăng ký cập nhật hoàn thành thói quen (Realtime)

`client.subscribe` vào channel collection để tự động refetch khi có create/update/delete.

### Realtime Subscription

**File**: `app/(tabs)/index.tsx`

```tsx
import { client, RealtimeResponse } from "@/lib/appwrite";

useEffect(() => {
  if (user) {
    // Subscribe vào habits collection
    const habitsChannel = `databases.${DATABASE_ID}.collections.${HABIT_COLLECTION_ID}.documents`;
    const habitsSubcription = client.subscribe(
      habitsChannel,
      (response: RealtimeResponse) => {
        const { events } = response;

        // Check event type
        if (events.some(e => e.includes(".create"))) {
          fetchHabits();
        } else if (events.some(e => e.includes(".update"))) {
          fetchHabits();
        } else if (events.some(e => e.includes(".delete"))) {
          fetchHabits();
        }
      }
    );

    // Subscribe vào completions collection
    const comepletionChannel = `databases.${DATABASE_ID}.collections.${COMPLETIONS_COLLECTION_ID}.documents`;
    const completionsSubcription = client.subscribe(
      comepletionChannel,
      (response: RealtimeResponse) => {
        if (response.events.some(e => e.includes(".create"))) {
          fetchTodayCompletetions();
        }
      }
    );

    // Initial fetch
    fetchHabits();
    fetchTodayCompletetions();

    // Cleanup: unsubscribe khi unmount
    return () => {
      habitsSubcription();
      completionsSubcription();
    };
  }
}, [user, fetchHabits, fetchTodayCompletetions]);
```

### Channel format

```
databases.{DATABASE_ID}.collections.{COLLECTION_ID}.documents
```

### Event types

| Event | Trigger |
|-------|---------|
| `databases.*.collections.*.documents.*.create` | Document mới được tạo |
| `databases.*.collections.*.documents.*.update` | Document được cập nhật |
| `databases.*.collections.*.documents.*.delete` | Document được xóa |

---

## 45. Tạo kiểu cho các thói quen đã hoàn thành

Làm mờ (opacity), đổi màu nền/border để phân biệt với chưa hoàn thành.

### Conditional Styling

```tsx
// Kiểm tra đã complete chưa
const isHabitCompleted = (habitsId: string) =>
  completedHabits?.includes(habitsId);

// Apply style dựa trên trạng thái
<Surface
  style={
    isHabitCompleted(habit.$id)
      ? styles.cardCompleted  // Đã complete: opacity 0.6
      : styles.card           // Chưa complete: opacity 1
  }
  elevation={0}
>
  {/* ... */}
</Surface>
```

### Card Completed Style

```tsx
cardCompleted: {
  marginBottom: 18,
  borderRadius: 18,
  backgroundColor: "#f7f2fa",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 8,
  elevation: 4,
  opacity: 0.6,  // ← Mờ đi khi đã hoàn thành
},
```

---

## 46. Tạo màn hình Streaks

Tải `habits` và `habit_completions`, tính **streak**, **bestStreak**, **total** cho từng habit.

### Màn hình Streaks

**File**: `app/(tabs)/streaks.tsx`

```tsx
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

  // Fetch habits
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

  // Fetch ALL completions (không filter ngày)
  const fetchCompletetions = useCallback(async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID ?? "",
        COMPLETIONS_COLLECTION_ID ?? "",
        [Query.equal("user_id", user?.$id ?? "")]
      );
      setCompletedHabits(response.documents as HabitCompletion[]);
    } catch (error) {
      console.error(error);
    }
  }, [user?.$id]);
```

---

## 47. Lấy lịch sử hoàn thành thói quen

`listDocuments` của `habit_completions` theo `user_id`.

### Fetch All Completions (không filter ngày)

```tsx
// Lấy TẤT CẢ completions của user (từ đầu)
const fetchCompletetions = useCallback(async () => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID ?? "",
      COMPLETIONS_COLLECTION_ID ?? "",
      [Query.equal("user_id", user?.$id ?? "")]
      // KHÔNG có filter ngày - lấy tất cả để tính streak
    );

    const completions = response.documents as HabitCompletion[];
    setCompletedHabits(completions);
  } catch (error) {
    console.error(error);
  }
}, [user?.$id]);
```

> **Lưu ý**: Ở màn hình Streaks, ta cần lấy TOÀN BỘ completions (không filter ngày) để tính streak chính xác từ đầu.

---

## 48. Tính toán chuỗi hiện tại & tốt nhất

Sort theo ngày, đi qua từng phần tử, tăng `currentStreak` nếu liên tiếp (<= 1 ngày chênh), ngắt chuỗi thì reset.

### Streak Calculation Algorithm

**File**: `app/(tabs)/streaks.tsx`

```tsx
// Tính streak cho một habit cụ thể
const getStreakData = useCallback(
  (habitId: string): { streak: number; bestStreak: number; total: number } => {
    // 1. Lọc completions cho habit này
    const habitCompletions = completedHabits
      .filter((c) => c.habit_id === habitId)
      .sort(
        (a, b) =>
          new Date(a.completed_at).getTime() -
          new Date(b.completed_at).getTime()  // Sort ascending
      );

    if (habitCompletions.length === 0) {
      return { streak: 0, bestStreak: 0, total: 0 };
    }

    // 2. Khởi tạo biến
    let bestStreak = 1;
    let currentStreak = 1;
    let total = habitCompletions.length;
    let lastDate = new Date(habitCompletions[0].completed_at);

    // 3. Duyệt qua các completions
    for (let i = 1; i < habitCompletions.length; i++) {
      const date = new Date(habitCompletions[i].completed_at);

      // Tính khoảng cách ngày
      const diff =
        (date.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);

      if (diff <= 1.5) {
        // Liên tiếp (cùng ngày hoặc cách 1 ngày)
        currentStreak += 1;
      } else {
        // Chuỗi bị ngắt - cập nhật best nếu cần
        if (currentStreak > bestStreak) {
          bestStreak = currentStreak;
        }
        currentStreak = 1; // Bắt đầu chuỗi mới
      }
      lastDate = date;
    }

    // 4. Cập nhật best streak lần cuối
    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
    }

    return { streak: currentStreak, bestStreak, total };
  },
  [completedHabits]
);
```

### Giải thích thuật toán

```
Ví dụ: Completions vào các ngày [Jan 1, Jan 2, Jan 5, Jan 6, Jan 7, Jan 10]

Jan 1 → Jan 2: diff = 1 day  → streak++
Jan 2 → Jan 5: diff = 3 days → streak = 1, best = 2 (reset)
Jan 5 → Jan 6: diff = 1 day  → streak++
Jan 6 → Jan 7: diff = 1 day  → streak++
Jan 7 → Jan 10: diff = 3 days → streak = 1, best = 3 (reset)

Kết quả: currentStreak = 1, bestStreak = 3, total = 6
```

---

## 49. Xếp hạng thói quen theo chuỗi

Sort theo `bestStreak` giảm dần.

### Ranking Logic

```tsx
// Cập nhật rankedHabits khi habits hoặc completions thay đổi
useEffect(() => {
  if (habits.length > 0) {
    // Tính streak data cho mỗi habit
    const habitStreaks = habits.map((habit) => {
      const { streak, bestStreak, total } = getStreakData(habit.$id);
      return { habit, streak, bestStreak, total };
    });

    // Sort theo bestStreak giảm dần
    const ranked = habitStreaks.sort((a, b) => b.bestStreak - a.bestStreak);
    setRankedHabits(ranked);
  } else {
    setRankedHabits([]);
  }
}, [habits, completedHabits, getStreakData]);
```

---

## 50. Hiển thị Thẻ chuỗi

Mỗi thẻ: tên habit, mô tả, badges: 🔥current, 🏆best, ✅total.

### Streak Card

**File**: `app/(tabs)/streaks.tsx`

```tsx
{rankedHabits.map(
  ({ habit, streak, bestStreak, total }, key: number) => (
    <Card
      key={habit.$id}
      style={[styles.card, key === 0 && styles.firstCard]}
    >
      <Card.Content>
        {/* Tiêu đề */}
        <Text variant="titleMedium" style={styles.habitTitle}>
          {habit.title}
        </Text>

        {/* Mô tả */}
        <Text style={styles.habitDescription}>
          {habit.description}
        </Text>

        {/* Stats Row: Current, Best, Total */}
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
```

### Styles cho Stats Badges

```tsx
const styles = StyleSheet.create({
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop: 8,
  },

  // Current streak - cam nhạt
  statsBadge: {
    backgroundColor: "#fff3e0",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    minWidth: 60,
  },

  // Best streak - vàng nhạt
  statsBadgeGold: {
    backgroundColor: "#fffde7",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    minWidth: 60,
  },

  // Total - xanh lá nhạt
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
    color: "#888",
    marginTop: 2,
    fontWeight: "500",
  },
});
```

---

## 51. Xây dựng Bảng xếp hạng 3 thói quen hàng đầu

Hiển thị top 3 với huy hiệu và màu sắc khác nhau (vàng/bạc/đồng).

### Top 3 Streaks Panel

```tsx
{/* Top 3 Streaks Ranking */}
{rankedHabits.length > 0 && (
  <View style={styles.rankingContainer}>
    <Text style={styles.rankingTitle}>🥇 Top Streaks</Text>

    {rankedHabits.slice(0, 3).map((item, key) => (
      <View key={key} style={styles.rankingRow}>
        {/* Medal Badge */}
        <View style={[styles.rankingBadge, badgeStyles[key]]}>
          <Text style={styles.rankingBadgeText}>{key + 1}</Text>
        </View>

        {/* Habit Name */}
        <Text style={styles.rankingHabit}>{item.habit.title}</Text>

        {/* Best Streak */}
        <Text style={styles.rankingStreak}>{item.bestStreak}</Text>
      </View>
    ))}
  </View>
)}
```

### Medal Badge Styles

```tsx
const styles = StyleSheet.create({
  rankingBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: "#e0e0e0",
  },

  // 🥇 Gold - Rank 1
  badge1: {
    backgroundColor: "#FFD700",
  },

  // 🥈 Silver - Rank 2
  badge2: {
    backgroundColor: "#C0C0C0",
  },

  // 🥉 Bronze - Rank 3
  badge3: {
    backgroundColor: "#CD7F32",
  },

  rankingBadgeText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
  },
});
```

### Ranking Container Style

```tsx
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
```

---

## 52. Chỉnh sửa UI cuối & tạo kiểu

Nhất quán màu sắc, khoảng cách, typographic scale, trạng thái tap/active/disabled.

### Bảng màu sắc sử dụng

| Màu | Hex | Sử dụng |
|-----|-----|---------|
| Tím chủ đạo | `#5200ee` | Active tab, button, border rank 1 |
| Tím nhạt | `#f7f2fa` / `#ede7f6` | Card background, frequency badge |
| Cam streak | `#ff9800` | Streak badge, streak text |
| Cam nhạt | `#fff3e0` | Streak badge background |
| Xanh lá | `#4caf50` | Swipe complete action |
| Đỏ | `#ef3935` | Swipe delete action |
| Vàng | `#fffde7` | Best streak badge background |
| Xanh lá nhạt | `#e8f5ef` | Total badge background |
| Vàng gold | `#FFD700` | Rank 1 medal |
| Bạc | `#C0C0C0` | Rank 2 medal |
| Đồng | `#CD7F32` | Rank 3 medal |
| Xám | `#666666` | Inactive tab, empty state text |
| Nền | `#f5f5f5` | App background |
| Text chính | `#22223b` | Card title |
| Text phụ | `#6c5c80` | Card description |

### Typographic Scale

| Element | Font Size | Weight |
|---------|-----------|--------|
| Card Title | 20px | Bold |
| Habit Title (streaks) | 18px | Bold |
| Stats Badge Text | 15px | Bold |
| Card Description | 15px | Normal |
| Frequency Text | 14px | Bold |
| Streak Text | 14px | Bold |
| Stats Label | 11px | Medium (500) |

---

## 53. Outro

Bạn đã đi qua: RN cơ bản, Expo Router, Auth, DB, Realtime, UI, gestures, tính streak. Tiếp theo: tối ưu code, test, build thật (EAS), publish.

### Tổng kết những gì đã học

| Chủ đề | Công nghệ |
|--------|-----------|
| **Routing** | Expo Router (file-based) |
| **Authentication** | Appwrite Auth (Email + Password) |
| **State Management** | React Context API |
| **Route Guards** | Expo Router + useAuth |
| **Database** | Appwrite Databases + CRUD |
| **Realtime** | Appwrite Realtime subscriptions |
| **UI Components** | React Native Paper (Material Design 3) |
| **Icons** | @expo/vector-icons |
| **Gestures** | react-native-gesture-handler (Swipeable) |
| **Streak Calculation** | Custom algorithm với date diff |
| **Environment** | .env.local (EXPO_PUBLIC_) |

### Các bước tiếp theo

1. **Tối ưu code**: Refactor duplicate code, extract reusable components
2. **Testing**: Viết unit tests, integration tests
3. **Build thật**: Sử dụng EAS (Expo Application Services) để build APK/AAB
4. **Publish**: Đưa ứng dụng lên App Store / Google Play Store
5. **Mở rộng**:
   - Thêm notification (push notifications)
   - Widget cho màn hình chính
   - Charts để visualize progress
   - Social features (share streak, compete với friends)

---

## Cấu trúc file hoàn chỉnh

```
app/
├── _layout.tsx              # Root layout + AuthGuard + Providers
├── auth.tsx                 # Sign In / Sign Up screen
└── (tabs)/
    ├── _layout.tsx          # Tabs config (3 tabs)
    ├── index.tsx            # Today's Habits + Swipeable
    ├── streaks.tsx          # Streaks + Ranking
    └── add-habit.tsx        # Add Habit form

lib/
├── appwrite.ts              # Client + Databases setup
└── auth-context.tsx         # AuthProvider + useAuth

types/
└── database.type.ts         # Habit + HabitCompletion interfaces

.env.local                   # Secrets (gitignored)

app.json                     # Expo config
package.json                 # Dependencies
```

---

## Dependencies (package.json)

```json
{
  "dependencies": {
    "@expo/vector-icons": "^14.1.0",
    "expo": "~52.0.0",
    "expo-blur": "~14.0.0",
    "expo-haptics": "~14.0.0",
    "expo-image": "~2.0.0",
    "expo-splash-screen": "~0.30.0",
    "expo-status-bar": "~2.0.0",
    "expo-constants": "~17.0.0",
    "expo-router": "~5.0.0",
    "react": "18.3.1",
    "react-native": "0.76.9",
    "react-native-gesture-handler": "~2.24.0",
    "react-native-reanimated": "~3.16.0",
    "react-native-safe-area-context": "4.17.0",
    "react-native-screens": "~4.5.0",
    "react-native-paper": "^5.14.0",
    "react-native-appwrite": "^0.5.0"
  }
}
```
