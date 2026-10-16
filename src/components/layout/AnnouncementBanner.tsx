export default function AnnouncementBanner() {
    return (
        <div className="flex min-h-[72px] w-full items-center justify-center bg-[#DEEBFF] px-4 py-4">
            <p className="text-center text-[17px] leading-[22px] text-[#091E42]">
                Accelerate your teams' work with AI features 🤖 now available
                for all Premium and Enterprise!{" "}
                <a
                    href="https://trello.com/premium"
                    className="text-[#0065FF] hover:underline"
                >
                    Learn more.
                </a>
            </p>
        </div>
    );
}