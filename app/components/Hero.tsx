"use client"

import { TextAnimate } from "@/components/ui/text-animate";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
export function Hero() {

  const { isAuthenticated } = useAuth();
  const router = useRouter()

  const handleLogin = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    }
    else {
      router.push("/signin")
    }
  };
  return (
    <div className="flex flex-col h-[100vh] w-full justify-center items-center gap-5 bg-background overflow-y-hidden">
      <div className="relative flex  w-full flex-col items-center justify-center h-full">
        <Label className="z-10 whitespace-pre-wrap text-center text-5xl tracking-tighter text-foreground golos-text-700">
          Oyelabs AI
        </Label>

        <div className="w-1/2 mt-7 text-center">
          <TextAnimate animation="blurInUp" by="character">
            At Oyelabs, we’re at the forefront of crafting intelligent,
            AI-driven solutions that redefine industries and unlock new
            possibilities. From streamlining business processes to creating
            personalized customer experiences, our advanced AI technologies are
            designed to empower businesses with smarter, faster, and more
            scalable solutions.
          </TextAnimate>
        </div>
      </div>
      <Button
        onClick={handleLogin}
        className="w-72 h-16 p-4 relative bottom-48 rounded-xl border-0 text-2xl  px-8 py-2 font-medium text-primary-foreground bg-foreground"
      >
        Let's get started
      </Button>
    </div>
  );
}
