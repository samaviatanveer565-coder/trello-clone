export default function AnnouncementBanner() {
    return (
        <div className="flex min-h-[72px] w-full items-center justify-center bg-[var(--announcement-bg)] px-4 py-4">
            <p className="text-center text-[17px] leading-[22px] text-[var(--announcement-text)]]">
                Accelerate your teams' work with AI features 🤖 now available
                for all Premium and Enterprise!{" "}
                <a
                    href="https://trello.com/premium"
                    className="text-[var(--announcement-link)] hover:underline"
                >
                    Learn more.
                </a>
            </p>
        </div>
    );
}