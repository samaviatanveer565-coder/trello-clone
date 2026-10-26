import { useState, type FormEvent } from "react";
import RevealOnScroll from "../common/RevealOnScroll";

type SignupFormProps = {
    variant?: "hero" | "cta";
};

export default function SignupForm({
    variant = "hero",
}: SignupFormProps) {
    const [email, setEmail] = useState("");

    const isCTA = variant === "cta";

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!email.trim()) return;

        // Frontend-only learning clone.
        // No real account is created.
        console.log("Signup email:", email);
    }

    return (
        <RevealOnScroll repeat direction="zoom">
        <form
            onSubmit={handleSubmit}
            className={`
        flex w-full flex-wrap items-center gap-[14px]
        max-sm:flex-col max-sm:items-stretch
        ${isCTA ? "justify-center" : "justify-start"}
      `}
        >
            <input
                type="email"
                placeholder="Email"
                aria-label="Email address"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={`
          h-[48px] max-w-full rounded-[4px]
          border border-[var(--trello-border)] bg-[var(--input-bg)]
          px-[11px] text-[14px] text-[var(--input-text)]
          outline-none placeholder:text-[var(--input-placeholder)]
          focus:border-trello-blue
          focus:ring-1 focus:ring-trello-blue
          max-sm:w-full
          ${isCTA ? "w-[323px]" : "w-[280px]"}
        `}
            />

            <button
                type="submit"
                className="
          flex h-[48px] items-center justify-center
          whitespace-nowrap rounded-[4px]
          bg-[var(--signup-button-bg)] px-[15px]
          text-[16px] font-bold text-white
          transition-colors hover:bg-[var(--signup-button-hover)]
          max-sm:w-full
        "
            >
                Sign up - it’s free!
            </button>
        </form>
        </RevealOnScroll>
    );
}