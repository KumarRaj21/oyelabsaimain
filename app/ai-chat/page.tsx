"use client";
import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { useSelector } from "react-redux";
import translations from "../components/languages";
import { RootState } from "@/redux/store";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AiChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  type Language = keyof typeof translations;
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage) as Language;
  const language: Language = selectedLanguage || "English";
  const t = translations[language] || translations.English;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        inputValue,
        "Yes, I am here",
      ]);
      setInputValue("");
      setShowChat(true);
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="p-4 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-foreground" />
          <h2 className="golos-text-400">Oyelabs AI</h2>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>KR</AvatarFallback>
        </Avatar>
      </header>

      {/* Main Section */}
      <div className="h-[76vh] flex flex-col justify-center items-center px-4">
        {!showChat ? (
          <div className="w-full flex flex-col justify-center items-center">
            {/* Initial Section */}
            <div className="flex items-center gap-3 mb-7">
              <Sparkles className="sm:h-10 sm:w-10 h-5 w-5 text-foreground" />
              <h2 className="text-xl text-center sm:text-5xl golos-text-500">
                {t?.aiChat?.head || "What can I help with?"}
              </h2>
            </div>

            {/* Input Section */}
            <PlaceholdersAndVanishInput
              placeholders={[
                t?.aiChat?.inputPlaceholders?.first || "Enter Your Name",
                t?.aiChat?.inputPlaceholders?.second || "Type something...",
                t?.aiChat?.inputPlaceholders?.third || "Start typing",
              ]}
              onChange={(e) => handleInputChange(e)}
              onSubmit={() => handleFormSubmit()}
            />
          </div>
        ) : (
          <div className="relative h-screen w-full">
            {/* Chat Section */}
            <div className="absolute top-0 left-0 flex flex-col gap-2 p-4 w-full">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-md max-w-xs ${index % 2 === 0 ? "ml-auto" : "mr-auto "
                    }`}
                  style={{
                    alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
                  }}
                >
                  {msg}
                </div>
              ))}
            </div>

            {/* Input Section */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center p-4">
              <PlaceholdersAndVanishInput
                placeholders={[
                  "Enter your name",
                  "Type something...",
                  "Start typing",
                ]}
                onChange={(e) => handleInputChange(e)}
                onSubmit={() => handleFormSubmit()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiChat;