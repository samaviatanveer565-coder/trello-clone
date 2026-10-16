import WorkSmarterCard from "./WorkSmarterCard";

const features = [
    {
        id: "integrations",
        title: "Integrations",
        description:
            "Connect the apps you are already using into your Trello workflow or add a Power-Up to fine-tune your specific needs.",
        icon: "/images/work-smarter/integrations.svg",
        buttonText: "Browse Integrations",
        buttonLink: "https://trello.com/power-ups",
    },
    {
        id: "automation",
        title: "Automation",
        description:
            "No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.",
        icon: "/images/work-smarter/automation.svg",
        buttonText: "Get to know Automation",
        buttonLink: "https://trello.com/automation",
    },
    {
        id: "mirroring",
        title: "Card mirroring",
        description:
            "View all your to-dos from multiple boards in one place. Mirror a card to keep track of work wherever you need it!",
        icon: "/images/work-smarter/card-mirroring.svg",
        buttonText: "Compare plans",
        buttonLink: "https://trello.com/pricing",
    },
];

export default function WorkSmarterSection() {
    return (
        <section
            id="work-smarter"
            className="w-full bg-white px-4 pt-[4px] pb-[90px]"
        >
            <div className="trello-container">

                {/* Section introduction */}
                <div className="max-w-[540px]">
                    <h2
                        className="
              text-[17px] font-extrabold
              uppercase text-[#091E42]
            "
                    >
                        WORK SMARTER
                    </h2>

                    <p
                        className="
              mt-[8px] text-[20px]
              leading-[26px] text-[#091E42]
            "
                    >
                        Customize the way you organize with easy
                        integrations, automation, and mirroring
                        of your to-dos across multiple locations.
                    </p>
                </div>

                {/* Three cards */}
                <div
                    className="
            mt-[50px] grid grid-cols-1
            gap-[25px] sm:grid-cols-2
            lg:grid-cols-3
          "
                >
                    {features.map((feature) => (
                        <WorkSmarterCard
                            key={feature.id}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            buttonText={feature.buttonText}
                            buttonLink={feature.buttonLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}