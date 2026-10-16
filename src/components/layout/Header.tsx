import { ChevronDown } from "lucide-react";
export default function Header() {
    return (
        <header className="h-[52px] w-full bg-white">
            <div className="mx-auto flex h-full w-full max-w-[1100px] items-center justify-between">

                {/* Logo + Navigation */}
                <div className="flex h-full items-center gap-[28px]">

                    <a href="/" className="flex shrink-0 items-center">
                        <img
                            src="/images/trello-logo.svg"
                            alt="Atlassian Trello"
                            className="w-[100px] h-auto"
                        />
                    </a>

                    <nav className="flex h-full items-center gap-[28px] text-[15px] font-semibold text-trello-navy">

                        <a href="#features" className="whitespace-nowrap">
                            Features <ChevronDown size={16} strokeWidth={2.5} />
                        </a>

                        <a href="#solutions" className="whitespace-nowrap">
                            Solutions <ChevronDown size={16} strokeWidth={2.5} />
                        </a>

                        <a href="#plans" className="whitespace-nowrap">
                            Plans <ChevronDown size={16} strokeWidth={2.5} />
                        </a>

                        <a href="#pricing" className="whitespace-nowrap">
                            Pricing
                        </a>

                        <a href="#resources" className="whitespace-nowrap">
                            Resources <ChevronDown size={16} strokeWidth={2.5} />
                        </a>

                    </nav>
                </div>

                {/* Right Buttons */}
                <div className="flex h-full shrink-0 items-center">

                    <a
                        href="#login"
                        className="flex h-full items-center px-[22px] text-[16px] font-semibold text-trello-navy"
                    >
                        Log in
                    </a>

                    <a
                        href="#signup"
                        className="flex h-full items-center justify-center bg-trello-blue px-[22px] text-[16px] text-white font-bold  transition-colors hover:bg-[#0052CC]"
                    >
                        Get Trello for free
                    </a>

                </div>
            </div>
        </header>
    );
}