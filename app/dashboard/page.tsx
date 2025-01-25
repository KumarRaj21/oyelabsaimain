"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { useSelector } from "react-redux";
import translations from "../components/languages";
import { RootState } from "@/redux/store";

const Dashboard = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  type Language = keyof typeof translations;
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.selectedLanguage
  ) as Language;
  const language: Language = selectedLanguage || "English";
  const t = translations[language] || translations.English;

  const menuItems = [
    { key: "all", href: "/all" },
    { key: "aiAssistant", href: "/ai-assistant" },
    { key: "yourPlan", href: "/plan" },
    { key: "teamMembers", href: "/team" },
    { key: "recent", href: "/recent" },
    { key: "documents", href: "/documents" },
    { key: "templates", href: "/templates" },
    { key: "overview", href: "/overview" },
  ].map((item) => ({
    ...item,
    label:
      t.dashboard.headSection.menuItems[
        item.key as keyof typeof t.dashboard.headSection.menuItems
      ],
  }));

  if (!isVisible) return null;

  return (
    <div className="flex flex-col w-full max-h-screen bg-background">
      {/* Header Section */}
      <div className="py-3 md:py-4 px-3 border-b-[0.8px] border-t-[0.8px] border-accent">
        <header className="space-y-2">
          <div className="flex items-center justify-between flex-col w-full">
            <p className="text-sm text-muted-foreground pb-1 text-start w-full">
              {" "}
              {t?.dashboard?.headSection?.header || "Dashboard"}
            </p>
            <div className="flex justify-between items-center w-full">
              <h1 className="text-[32px] tracking-tight golos-text-700">
                {t?.dashboard?.headSection?.mainHead || "Welcome"},{" "}
                <span className="text-foreground">ZERRO.</span>
              </h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="rounded-3xl px-5">
                  {t?.dashboard?.headSection?.buttons?.mydocuments ||
                    "My Documents"}
                </Button>
                <Button className="bg-foreground hover:bg-foreground text-background hover:text-background rounded-3xl px-5">
                  <Plus className="mr-auto h-4 w-4" />
                  {t?.dashboard?.headSection?.buttons?.new || "New"}
                </Button>
              </div>
            </div>
          </div>
          <nav className="flex gap-6 overflow-x-hidden md:gap-8 pt-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
      </div>

      {/* Main Content Section */}
      <main className="px-3 py-4">
        <div className="relative  rounded-lg border-[0.8px] border-accent p-6 shadow-sm bg-card">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-xl golos-text-400">
                {t?.dashboard?.externalChatbotSection?.heading ||
                  "Introducing External Chatbots"}
              </h2>
              <p className="text-muted-foreground">
                {t?.dashboard?.externalChatbotSection?.content ||
                  "Allow end users to create, train, and embed custom chatbots directly onto their websites."}
              </p>
            </div>
          </div>
          <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:block">
            <Image
              src="/Chat bot-pana (1).svg"
              alt="Chatbot illustration"
              width={120}
              height={120}
              className="opacity-100"
            />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Button className="bg-foreground hover:bg-foreground text-background hover:text-background rounded-3xl px-4">
              {t?.dashboard?.externalChatbotSection?.buttons?.tryitnow ||
                "Try it Now"}
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsVisible(false)}
              className="rounded-3xl px-4"
            >
              {t?.dashboard?.externalChatbotSection?.buttons?.dismiss ||
                "Dismiss"}
            </Button>
          </div>
        </div>
      </main>

      {/* search section */}
      <main className="px-3">
        <div className="relative rounded-lg border-[0.8px] p-6 shadow-sm bg-card border-accent">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-foreground" />
                <h2 className="text-xl golos-text-400">
                  {t?.dashboard?.searchSection?.heading ||
                    "Hey, How can I help you?"}
                </h2>
              </div>
              <Input
                type="search"
                placeholder={
                  t?.dashboard?.searchSection?.inputPlaceholder ||
                  "Search for templates and documents..."
                }
                className="h-12 w-full"
              />
            </div>
            <Button
              variant="outline"
              className="h-12 w-full justify-start gap-2 md:w-auto bg-foreground hover:bg-foreground text-background hover:text-background rounded-3xl px-4"
            >
              <Plus className="h-4 w-4" />
              {t?.dashboard?.searchSection?.buttons?.createBlank ||
                "Create a Blank Document"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
