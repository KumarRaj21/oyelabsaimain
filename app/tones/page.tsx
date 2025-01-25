"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FaPlus } from "react-icons/fa6";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import translations from '../components/languages';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const cardData = [
    {
        id: 1,
        title: "Tone for the small passage",
        description:
            "A card that showcases a set of tools that you use to create your product.",
    },
    {
        id: 2,
        title: "Card Tone for the message",
        description:
            "A card that showcases a set of tools that you use to create your product.",
    },
    {
        id: 3,
        title: "Oyelabs AI",
        description:
            "A card that showcases a set of tools that you use to create your product.",
    },
    {
        id: 4,
        title: "Extension AI",
        description:
            "A card that showcases a set of tools that you use to create your product.",
    },
];

const Tones = () => {
    const [title, setTitle] = useState("");
    const [tone, setTone] = useState("");

    type Language = keyof typeof translations;
    const selectedLanguage = useSelector(
        (state: RootState) => state.language.selectedLanguage
    ) as Language;
    const language: Language = selectedLanguage || "English";
    const t = translations[language] || translations.English;

    return (
        <div className='px-6 pb-6 w-full'>
            <Dialog>
                <Card className='w-full justify-between items-center flex border-[1px] border-accent shadow-sm rounded-lg py-4 px-8 mb-4'>
                    <div className='flex w-full justify-start items-start flex-col gap-3'>
                        <Label className='lg:text-2xl md:text-xl text-lg w-full golos-text-500'>
                            Oyelabs AI</Label>
                        <Label className='text-gray-400 text-xs md:text-sm w-[90%]'>
                            {t?.tones?.cardContent || "At Oyelabs, we’re at the forefront of crafting intelligent, AI-driven solutions that redefine industries and unlock new possibilities. From streamlining business processes to creating personalized customer experiences."}
                        </Label>
                    </div>
                    <DialogTrigger>
                        <Button
                            className='rounded-3xl px-5 text-background hover:text-background gap-2 bg-foreground hover:bg-foreground'>
                            <FaPlus />  {t?.tones?.buttons?.addTone || "Add tone"}
                        </Button>
                    </DialogTrigger>
                </Card>
                <p className='w-full text-md font-semibold text-start border-accent border-b-[1px] pb-4 mb-4 text-gray-400'>{t?.tones?.heading || "All Tones"}</p>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                    {cardData.map((card) => (
                        <Card
                            key={card.id}
                            className="w-80 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg text-white flex flex-col items-start"
                        >
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-sm text-gray-200">{card.description}</p>
                            <button className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
                                Explore
                            </button>
                        </Card>
                    ))}
                </div>

                <DialogContent className="!rounded-xl">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold">
                            {t?.tones?.dialog?.head || "Add a Tone"}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="pt-3 px-3 py-1 w-full flex flex-col justify-between items-start gap-1">
                        <div className="w-full justify-center items-start flex flex-col gap-2">
                            <Label className="text-gray-400 text-md text-start w-full">
                                {t?.tones?.dialog?.title || "Title"}
                            </Label>
                            <Textarea
                                placeholder={
                                    t?.tones?.dialog?.titlePlaceHolder || "example: Proffesional"
                                }
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                maxLength={30}
                            />
                            <span className="text-gray-500 text-xs self-end">
                                {title.length}/30
                            </span>
                        </div>
                        <div className="w-full justify-center items-start flex flex-col gap-2">
                            <Label className="text-gray-400 text-md text-start w-full">
                                {t?.tones?.dialog?.tone || "Tone"}
                            </Label>
                            <Textarea
                                placeholder={
                                    t?.tones?.dialog?.tonePlaceHolder ||
                                    "example: Responsd Professionally with a focus on bussieness benifits and Strategic values."
                                }
                                className="h-[27vh]"
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                                maxLength={250}
                            />
                            <span className="text-gray-500 text-xs self-end">
                                {tone.length}/250
                            </span>
                        </div>
                        <div className="w-full justify-end items-center flex mt-1">
                            <Button className="text-background hover:text-background gap-2 text-md rounded-lg">
                                {t?.tones?.dialog?.buttons.save || "Save"}
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};
export default Tones;
