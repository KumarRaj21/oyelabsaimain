"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  RiImageAiLine,
  RiChatAiLine,
  RiBarChartBoxAiLine,
} from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { SiClarifai } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiVideoAiLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import translations from "../languages";
import MobileSidebar from "../sidebars/MobileSidebar";
import DeskTopSidebar from "../sidebars/DeskTopSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardNavbar from "../Navbar/dashboard-navbar";

const navigationBase : {
  name: string;
  key: string;
  path: string;
  Icon: JSX.Element;
  sublinks?: { name: string; key: string; path: string }[];
}[] =[
  {
    name: "Dashboard",
    key: "dashboard",
    path: "/dashboard",
    Icon: <RxDashboard size={18} />,
  },
  {
    name: "Tones",
    key: "tones",
    path: "/tones",
    Icon: <SiClarifai size={18} />,
  },
  {
    name: "AI Chat",
    key: "aiChat",
    path: "/ai-chat",
    Icon: <RiChatAiLine size={18} />,
    sublinks: [
      { name: "AI Chat", key: "aiChat", path: "/ai-chat" },
      {
        name: "Realtime Voice Chat",
        key: "realTimeVoiceChat",
        path: "/ai-chat/real-time",
      },
      { name: "AI File Chat", key: "aiFileChat", path: "/ai-chat/file" },
      { name: "AI Web Chat", key: "aiWebChat", path: "/ai-chat/web" },
      { name: "Chat Settings", key: "chatSettings", path: "/ai-chat/settings" },
    ],
  },
  {
    name: "AI Content",
    key: "aiContent",
    path: "/ai-content",
    Icon: <RiBarChartBoxAiLine size={18} />,
    sublinks: [
      { name: "AI Editor", key: "aiEditor", path: "/ai-content/editor" },
      { name: "AI Writer", key: "aiWriter", path: "/ai-content/writer" },
      { name: "AI Rewriter", key: "aiRewriter", path: "/ai-content/rewriter" },
      {
        name: "AI Artical Wizard",
        key: "aiArticlewizard",
        path: "/ai-content/article",
      },
      { name: "AI Code", key: "aiCode", path: "/ai-content/code" },
    ],
  },
  {
    name: "AI Image",
    key: "aiImage",
    path: "/ai-image",
    Icon: <RiImageAiLine size={18} />,
    sublinks: [
      { name: "AI Image", key: "aiImage", path: "/ai-image" },
      { name: "AI Product Shot", key: "aiProduct", path: "/ai-image/product" },
      {
        name: "AI Chat Image",
        key: "aiChatImage",
        path: "/ai-image/chat-image",
      },
      { name: "AI Vision", key: "aiVision", path: "/ai-image/vision" },
    ],
  },
  {
    name: "AI Video",
    key: "aiVideo",
    path: "/ai-videopro",
    Icon: <RiVideoAiLine size={18} />,
    sublinks: [
      { name: "AI Video Pro", key: "aiVideopro", path: "/ai-videopro" },
      { name: "AI Persona", key: "aiPersona", path: "/ai-video/persona" },
      { name: "AI Video", key: "aiVideo", path: "/ai-video" },
      { name: "AI Avatar", key: "aiAvatar", path: "/ai-video/avatar" },
    ],
  },
  {
    name: "AI Social Media",
    key: "aisocialMedia",
    path: "/ai-socialmedia",
    Icon: <IoShareSocialSharp size={18} />,
    sublinks: [
      { name: "AI Youtube", key: "aiYoutube", path: "/ai-socialmedia/youtube" },
      {
        name: "AI Social Media",
        key: "aisocialMedia",
        path: "/ai-socialmedia",
      },
      { name: "AI RSS", key: "aiRSS", path: "/ai-socialmedia/RSS" },
      {
        name: "Scheduled Posts",
        key: "aiScheduledPosts",
        path: "/ai-socialmedia/posts",
      },
    ],
  },
  {
    name: "Subscriptions",
    key: "subscriptions",
    path: "/subscriptions",
    Icon: <SiClarifai size={18} />,
  },
  {
    name: "Settings",
    key: "settings",
    path: "/settings",
    Icon: <LuSettings size={18} />,
  },
  {
    name: "Profile",
    key: "profile",
    path: "/profile",
    Icon: <FaUserCircle size={18} />,
  },
];

export default function Home({ children }: { children: React.ReactNode }) {
  type Language = keyof typeof translations;
  type SidebarKeys = keyof (typeof translations)[Language]["sidebar"];
  const language =
    (useSelector(
      (state: RootState) => state.language.selectedLanguage
    ) as Language) || "English";

  const translatedNavigation = navigationBase.map((item) => ({
    ...item,
    name: translations[language]?.sidebar[item.key as SidebarKeys] || item.name,
  }));
  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);
  const [currentPath, setCurrentPath] = useState("/dashboard");
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const [isMobileSidebarMinimized, setIsMobileSidebarMinimized] =
    useState(true);

  const pathname = usePathname();
  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      router.push("/dashboard");
    }
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      router.push("/dashboard");
    }
  }, [router]);

  if (!hydrated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>loading....</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col overflow-y-hidden w-full">
      <div className="flex overflow-y-hidden w-full justify-between items-center">
        <MobileSidebar
          navigation={translatedNavigation}
          router={router}
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
          isMobileSidebarMinimized={isMobileSidebarMinimized}
          setIsMobileSidebarMinimized={setIsMobileSidebarMinimized}
        />
        <DeskTopSidebar
          navigation={translatedNavigation}
          isSidebarMinimized={isSidebarMinimized}
          setIsSidebarMinimized={setIsSidebarMinimized}
          router={router}
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
        <ScrollArea
          className={`flex flex-col ${
            isSidebarMinimized
              ? "lg:w-[calc(100%-4rem)]"
              : "lg:w-[calc(100%-16rem)]"
          } h-screen relative p-0 m-0 gap-4 bg-background transition-all duration-300`}
        >
          <DashboardNavbar className="sticky top-0 z-50 px-6 py-4 bg-background shadow-sm" />
          <div className="px-2 w-full">{children}</div>
        </ScrollArea>
      </div>
    </main>
  );
}
