import { useState, type FormEvent } from "react";

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
          border border-[#DFE1E6] bg-white
          px-[11px] text-[14px] text-[#091E42]
          outline-none placeholder:text-[#8993A4]
          focus:border-[#0065FF]
          focus:ring-1 focus:ring-[#0065FF]
          max-sm:w-full
          ${isCTA ? "w-[323px]" : "w-[280px]"}
        `}
            />

            <button
                type="submit"
                className="
          flex h-[48px] items-center justify-center
          whitespace-nowrap rounded-[4px]
          bg-[#0065FF] px-[15px]
          text-[16px] font-bold text-white
          transition-colors hover:bg-[#0052CC]
          max-sm:w-full
        "
            >
                Sign up - it’s free!
            </button>
        </form>
    );
}