import { useState } from "react";
import RevealOnScroll from "../../common/RevealOnScroll";
import FeatureTab from "./FeatureTab";
import FeaturePreview from "./FeaturePreview";

const features = [
    {
        id: "inbox",
        title: "Inbox",
        description:
            "When it’s on your mind, it goes in your Inbox. Capture your to-dos from anywhere, anytime.",
        image: "/images/trello101/inbox.png",
    },
    {
        id: "boards",
        title: "Boards",
        description:
            'Your to-do list may be long, but it can be manageable! Keep tabs on everything from "to-dos to tackle" to "mission accomplished!"',
        image: "/images/trello101/boards.png",
    },
    {
        id: "planner",
        title: "Planner",
        description:
            "Drag, drop, get it done. Snap your top tasks into your calendar and make time for what truly matters.",
        image: "/images/trello101/planner.png",
    },
] as const;

type FeatureId = (typeof features)[number]["id"];

export default function Trello101() {
    const [activeFeature, setActiveFeature] =
        useState<FeatureId>("inbox");

    const selectedFeature =
        features.find((feature) => feature.id === activeFeature) ??
        features[0];

    return (
        <section className="w-full bg-[var(--section-bg)] pt-[10px] pb-[90px]">
            <div className="mx-auto w-full max-w-[1200px] px-4">

                {/* Section heading */}
                <div className="max-w-[550px]">
                    <p className="text-[15px] font-extrabold uppercase text-[var(--text-primary)]">
                        TRELLO 101
                    </p>

                    <p className="mt-[10px] text-[18px] leading-[26px] text-[var(--text-primary)]">
                        Stay organized and efficient with Inbox, Boards, and Planner.
                        Every to-do, idea, or responsibility—no matter how small—finds
                        its place, keeping you at the top of your game.
                    </p>
                </div>

                {/* Tabs and preview */}
                <div className="mt-[50px] grid grid-cols-1 items-start gap-[25px] md:grid-cols-[350px_minmax(0,1fr)]">

                    {/* Left: Feature selection */}
                    <RevealOnScroll repeat direction="left" exitEarly>
                    <div className="flex flex-col gap-[14px]">
                        {features.map((feature) => (
                            <FeatureTab
                                key={feature.id}
                                title={feature.title}
                                description={feature.description}
                                isActive={activeFeature === feature.id}
                                onClick={() => setActiveFeature(feature.id)}
                            />
                        ))}
                    </div>
                    </RevealOnScroll>

                    {/* Right: Selected original image */}
                    <RevealOnScroll repeat direction="right" exitEarly>
                    <FeaturePreview
                        image={selectedFeature.image}
                        title={selectedFeature.title}
                    />
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}