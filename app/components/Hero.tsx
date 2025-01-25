import RetroGrid from "@/components/ui/retro-grid";
import { RainbowButton } from "../../components/ui/rainbow-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { Label } from "@/components/ui/label";
export function Hero() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-5 bg-background">
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <Label className="z-10 whitespace-pre-wrap text-center text-5xl tracking-tighter text-foreground  font-bold ">
          OyeLabs AI
        </Label>

        <div className="w-1/2 mt-4 text-center">
          <TextAnimate animation="blurInUp" by="character">
            At Oyelabs, we’re at the forefront of crafting intelligent,
            AI-driven solutions that redefine industries and unlock new
            possibilities. From streamlining business processes to creating
            personalized customer experiences, our advanced AI technologies are
            designed to empower businesses with smarter, faster, and more
            scalable solutions.
          </TextAnimate>
        </div>

        <RetroGrid />
      </div>
      <RainbowButton />
    </div>
  );
}
