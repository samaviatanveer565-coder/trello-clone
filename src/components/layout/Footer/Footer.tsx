import { useState } from "react";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import { FiGlobe, FiChevronDown } from "react-icons/fi";

import FooterLink from "./FooterLink";

const footerLinks = [
    {
        id: "about",
        title: "About Trello",
        description: "What's behind the boards.",
        href: "https://trello.com/about",
    },
    {
        id: "jobs",
        title: "Jobs",
        description: "Learn about open roles on the Trello team.",
        href: "https://www.atlassian.com/company/careers",
    },
    {
        id: "apps",
        title: "Apps",
        description: "Download the Trello App for your Desktop or Mobile devices.",
        href: "https://trello.com/platforms",
    },
    {
        id: "contact",
        title: "Contact us",
        description: "Need anything? Get in touch and we can help.",
        href: "https://trello.com/contact",
    },
];

const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/trelloapp/",
        icon: FaInstagram,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/trelloapp/",
        icon: FaFacebookF,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/trello/",
        icon: FaLinkedinIn,
    },
    {
        name: "X",
        href: "https://x.com/trello",
        icon: FaXTwitter,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@trello",
        icon: FaYoutube,
    },
];

export default function Footer() {
    const [languageOpen, setLanguageOpen] = useState(false);

    return (
       <footer className="w-full bg-[var(--footer-bg)] text-white transition-colors duration-200">
            <div className="trello-container">

                {/* TOP FOOTER */}
                <div
                    className="
            grid grid-cols-1 gap-6
            pt-[25px] pb-[15px]
            sm:grid-cols-2
            lg:grid-cols-[160px_repeat(4,minmax(0,1fr))]
            lg:gap-[15px]
          "
                >
                    {/* Footer branding */}
                    <div className="px-[8px]">
                        <a href="/" aria-label="Trello homepage">
                            <img
                                src="/images/trello-logo.svg"
                                alt="Atlassian Trello"
                                className="w-[110px] brightness-0 invert"
                            />
                        </a>

                        <a
                            href="https://trello.com/login"
                            className="
                mt-[18px] block text-[14px]
                font-semibold hover:underline
              "
                        >
                            Log In
                        </a>
                    </div>

                    {/* Reusable footer links */}
                    {footerLinks.map((link) => (
                        <FooterLink
                            key={link.id}
                            title={link.title}
                            description={link.description}
                            href={link.href}
                        />
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#506080]" />

                {/* BOTTOM FOOTER */}
                <div
                    className="
            flex flex-col gap-5
            py-[20px]
            lg:flex-row lg:items-center
            lg:justify-between
          "
                >
                    {/* Language selector */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setLanguageOpen((open) => !open)}
                            aria-expanded={languageOpen}
                            aria-controls="footer-language-menu"
                            className="
                flex items-center gap-3
                text-[14px] font-semibold
                hover:text-[#DEEBFF]
              "
                        >
                            <FiGlobe size={19} />
                            English
                            <FiChevronDown size={16} />
                        </button>

                        {languageOpen && (
                            <div
                                id="footer-language-menu"
                                className="
                  absolute bottom-full left-0 z-20
                  mb-3 w-[160px] rounded-[5px]
                  border border-[#DFE1E6]
                  bg-white p-2 text-[#091E42] shadow-lg
                "
                            >
                                <span className="block px-3 py-2 text-[13px] font-semibold">
                                    English
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Legal links */}
                    <div
                        className="
              flex flex-wrap items-center
              gap-x-[22px] gap-y-3
              text-[11px]
            "
                    >
                        <a
                            href="https://www.atlassian.com/legal/privacy-policy"
                            className="hover:underline"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="https://www.atlassian.com/legal/cloud-terms-of-service"
                            className="hover:underline"
                        >
                            Terms
                        </a>

                        <span>Copyright © 2026 Atlassian</span>
                    </div>

                    {/* Social media */}
                    <div className="flex items-center gap-[22px]">
                        {socialLinks.map((social) => {
                            const SocialIcon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="
                    flex h-[22px] w-[22px]
                    items-center justify-center
                    rounded-full border border-white
                    text-white transition-opacity
                    hover:opacity-70
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-white
                  "
                                >
                                    <SocialIcon size={12} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}