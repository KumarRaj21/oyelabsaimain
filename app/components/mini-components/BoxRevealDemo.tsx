import BoxReveal from "./BoxReveal";
import Image from "next/image";
import me from "../images/me.jpg";

export async function BoxRevealDemo() {
  return (
    <>
      <div className="h-full w-full items-center justify-center overflow-hidden pt-8 lg:ml-10">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p className="w-full">
              As the developer of BlogBliss, I’m proud to introduce a platform
              where clarity and simplicity converge. Our tagline, "Pure
              Information, With Minimal Distraction – Clarity in Every Detail,"
              reflects our commitment to a clean, black and white design that
              keeps the focus on the content. By minimizing visual clutter, we
              enhance readability and ensure that users can fully engage with
              the information presented. At BlogBliss, simplicity in design
              fosters a deeper connection with the content, allowing for a more
              impactful and immersive experience.
            </p>
          </div>
        </BoxReveal>
      </div>
      <div className="flex justify-start items-center">
        <div className="mt-6 w-[3rem] h-[3rem]  relative lg:ml-10 ">
          <Image
            src={me}
            alt="Header"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-full"
          />
        </div>
        <h3 className="text-black tracking-tight font-bold lg:ml-3 mt-7 text-lg">
          Abhishek Singh Chauhan .
        </h3>
      </div>
    </>
  );
}
