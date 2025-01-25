"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { HTMLAttributes, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Moon, Search, Sun, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setLanguage } from "@/redux/slices/languageSlice";
import translations from "../languages";

type Props = HTMLAttributes<HTMLDivElement>;

const DashboardNavbar = ({ className, ...props }: Props) => {
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const language = useSelector(
    (state: RootState) => state.language.selectedLanguage as keyof typeof translations
  );

  const t = translations[language] || translations["English"];

  const onThemeClick = (theme: string) => {
    setTheme(theme);
    window.location.reload();
  };

  const getDotColor = (selectedTheme: string) => {
    switch (selectedTheme) {
      case "light":
        return "bg-gray-200";
      case "dark":
        return "bg-black";
      case "rose":
        return "bg-pink-500";
      case "orange":
        return "bg-orange-500";
      case "green":
        return "bg-green-500";
      case "system":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleShortcut = (e: any) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleShortcut);

    return () => {
      document.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  return (
    <div className={cn("", className)} {...props}>
      <div className="flex justify-between gap-6">
        <div className="relative w-[420px]">
          <Input
            ref={searchInputRef}
            placeholder={t?.navbar?.inputPlaceholder || "Search for templates..."}
            className="pl-8 bg-secondary outline-none rounded-3xl"
          />
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground mr-2" />
          <div className="bg-background text-foreground golos-text-light text-xs rounded-3xl px-4 right-2 top-2 absolute justify-center items-center py-1">
            ctrl + k
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-1 justify-start items-center">
            <Button className="p-3 rounded-md" variant={"ghost"}>
              <Link href={"/"}>{t?.navbar?.buttons?.overview || "Overview"}</Link>
            </Button>
            <Button className="p-3 rounded-md" variant={"ghost"}>
              <Link href={"/projects"}>{t?.navbar?.buttons?.projects || "Projects"}</Link>
            </Button>
            <Button className="p-3 rounded-md" variant={"ghost"}>
              <Link href={"/library"}>{t?.navbar?.buttons?.library || "Library"}</Link>
            </Button>
            <Button className="p-3 rounded-md" variant={"ghost"}>
              <Link href={"/settings"}>{t?.navbar?.buttons?.settings || "Settings"}</Link>
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Globe className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => dispatch(setLanguage("English"))}>
                English {language === "English" && <span className="ml-auto">✓</span>}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => dispatch(setLanguage("Spanish"))}>
                Spanish {language === "Spanish" && <span className="ml-auto">✓</span>}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="w-8 h-8">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="flex flex-col mx-auto ">
              <DropdownMenuItem onClick={() => onThemeClick("light")}>
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${getDotColor(
                    "light"
                  )} mr-2`}
                />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onThemeClick("dark")}>
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${getDotColor(
                    "dark"
                  )} mr-2`}
                />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onThemeClick("rose")}>
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${getDotColor(
                    "rose"
                  )} mr-2`}
                />
                Rose
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onThemeClick("orange")}>
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${getDotColor(
                    "orange"
                  )} mr-2`}
                />
                Orange
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onThemeClick("green")}>
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${getDotColor(
                    "green"
                  )} mr-2`}
                />
                Green
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onThemeClick("system")}>
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${getDotColor(
                    "system"
                  )} mr-2`}
                />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="icon" className="w-8 h-8">
            <Bell className="w-4 h-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>KR</AvatarFallback>
              </Avatar>

            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;


