
//MessageActionSection poore section ka parent hoga.
//Iski responsibility blue background, heading, cards ka order aur data manage karna hogi.
import MessageActionCard from "./MessageActionCard";
import RevealOnScroll from "../../common/RevealOnScroll";

const cards = [
    {
        id: "email",
        title: "Email Magic",
        description:
            "Easily turn your emails into to-dos! Just forward them to your Trello Inbox, and they’ll be transformed by AI into organized to-dos with all the links you need.",
        image: "/images/message-action/email-magic.png",
        imageAlt: "Email transformed into a Trello Inbox task",
        iconColor: "#9361F7",
        reverse: false,
    },
    {
        id: "messages",
        title: "Message App Sorcery",
        description:
            "Need to follow up on a message from Slack or Microsoft Teams? Send it directly to your Trello board! Your favorite app interface lets you save messages that appear in your Trello Inbox with AI-generated summaries and links.",
        image: "/images/message-action/message-app.png",
        imageAlt: "Message converted into a Trello task",
        iconColor: "#00C7E5",
        reverse: true,
    },
];

export default function MessageActionSection() {
    return (
        <section
            id="message-action"
            className="w-full px-4 pt-[32px] pb-[80px]"
            style={{
                backgroundImage: `linear-gradient(
                    to bottom,
                    var(--message-action-blue) 0%,
                    var(--message-action-blue) calc(100% - 230px),
                    var(--message-action-bottom) calc(100% - 230px),
                    var(--message-action-bottom) 100%
                )`,
            }}
        >
            <div className="trello-container relative z-10">

                {/* Section heading */}
                <div className="mx-auto mb-[75px] max-w-[680px] text-center">
                    <h2 className="text-[36px] leading-[40px] font-extrabold text-white">
                        From message to action
                    </h2>

                    <p className="mt-[8px] text-[20px] leading-[27px] text-white">
                        Quickly turn communication from your favorite apps into
                        to-dos, keeping all your discussions and tasks organized
                        in one place.
                    </p>
                </div>

                {/* Reusable cards */}
                <div className="flex flex-col gap-[55px]">
                    {cards.map((card, index) => (
                        <RevealOnScroll
                            key={card.id}
                            repeat
                            direction={index === 0 ? "left" : "right"}
                            exitEarly
                        >
                            <MessageActionCard
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                image={card.image}
                                imageAlt={card.imageAlt}
                                iconColor={card.iconColor}
                                reverse={card.reverse}
                            />
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    );
}
