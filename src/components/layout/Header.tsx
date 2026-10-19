import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MegaMenu from "./Navbar/MegaMenu";
import { featuresMenu, solutionsMenu, plansMenu, resourcesMenu } from "./Navbar/menuData";

export default function Header() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    return (
        <header className="relative z-50 h-[60px] w-full bg-white">
            <div className="mx-auto flex h-full w-full max-w-[1350px] items-center justify-between">

                {/* Logo + Navigation */}
                <div className="flex h-full items-center gap-[29px]">

                    <a href="/" className="flex shrink-0 items-center ">
                        <img
                            src="/images/trello-logo.svg"
                            alt="Atlassian Trello"
                            className="w-[110px] h-auto"
                        />
                    </a>

                    <nav className="flex h-full items-center gap-[30px] text-[15px] font-semibold text-trello-navy">

                        <button
                            type="button"
                            onClick={() =>
                                setOpenMenu(openMenu === "features" ? null : "features")
                            }
                            aria-expanded={openMenu === "features"}
                            aria-controls="features-menu"
                            className="inline-flex h-full items-center gap-[4px] whitespace-nowrap hover:text-[#0065FF]"
                        >
                            Features
                            <ChevronDown size={16} strokeWidth={2.5} />
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setOpenMenu(openMenu === "solutions" ? null : "solutions")
                            }
                            aria-expanded={openMenu === "solutions"}
                            aria-controls="solutions-menu"
                            className="inline-flex h-full items-center gap-[4px] whitespace-nowrap hover:text-[#0065FF]"
                        >
                            Solutions
                            <ChevronDown size={16} strokeWidth={2.5} />
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                setOpenMenu(openMenu === "plans" ? null : "plans")
                            }
                            aria-expanded={openMenu === "plans"}
                            aria-controls="plans-menu"
                            className="inline-flex h-full items-center gap-[4px] whitespace-nowrap hover:text-[#0065FF]"
                        >
                            Plans <ChevronDown size={16} strokeWidth={2.5} />
                        </button>

                        <a href="#pricing" className="inline-flex items-center gap-[4px] whitespace-nowrap">
                            Pricing
                        </a>

                        <button
                            type="button"
                            onClick={() =>
                                setOpenMenu(openMenu === "resources" ? null : "resources")
                            }
                            aria-expanded={openMenu === "resources"}
                            aria-controls="resources-menu"
                            className="inline-flex h-full items-center gap-[4px] whitespace-nowrap hover:text-[#0065FF]"
                        >
                            Resources
                            <ChevronDown size={16} strokeWidth={2.5} />
                        </button>

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
                        className="flex h-full items-center justify-center bg-trello-blue px-[20px] text-[16px] text-white font-bold  transition-colors hover:bg-[#0052CC]"
                    >
                        Get Trello for free
                    </a>

                </div>
            </div>


            {/* Features dropdown */}
            {openMenu === "features" && (
                <MegaMenu
                    id="features-menu"
                    data={featuresMenu}
                />
            )}

            {openMenu === "solutions" && (
                <MegaMenu id="solutions-menu" data={solutionsMenu} />
            )}

            {openMenu === "plans" && (
                <MegaMenu id="plans-menu" data={plansMenu} />
            )}

            {openMenu === "resources" && (
                <MegaMenu id="resources-menu" data={resourcesMenu} />
            )}

        </header>
    );
}