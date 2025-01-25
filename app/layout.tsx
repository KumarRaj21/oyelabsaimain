"use client";

import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import AuthLayout from "./components/layouts/AuthLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClerkProvider>
          <Provider store={store}>
            <AuthProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
              >
                <RootContent>{children}</RootContent>
              </ThemeProvider>
            </AuthProvider>
          </Provider>
        </ClerkProvider>
      </body>
    </html>
  );
}

function RootContent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const pathname = typeof window !== "undefined" ? usePathname() : ""; // Avoid SSR mismatches
  const router = useRouter();

  const [isReady, setIsReady] = useState(false);
  const authRoutes = ["/signin", "/", "/signup"];
  const isAuthRoute = authRoutes.includes(pathname);

  useEffect(() => {
    setIsReady(true);

    if (!isAuthenticated && !isAuthRoute) {
      router.push("/signin");
    }
  }, [isAuthenticated, isAuthRoute, pathname, router]);

  if (!isReady) {
    return (
      <div className="w-full h-screen flex text-center justify-center items-center">
        Loading...
      </div>
    );
  }

  if (isAuthenticated) {
    return !isAuthRoute ? (
      <DashboardLayout>{children}</DashboardLayout>
    ) : (
      <AuthLayout>{children}</AuthLayout>
    );
  }

  return <AuthLayout>{children}</AuthLayout>;
}
