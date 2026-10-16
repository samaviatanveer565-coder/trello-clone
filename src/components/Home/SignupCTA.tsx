import SignupForm from "./SignupForm";

export default function SignupCTA() {
    return (
        <section
            id="signup"
            className="
        flex min-h-[305px] w-full
        items-center justify-center
        bg-[#F4F5F7]
        px-4 py-[65px]
      "
        >
            <div className="mx-auto w-full max-w-[700px] text-center">

                {/* Heading */}
                <h2
                    className="
            font-display
            text-[28px]
            leading-[36px]
            font-extrabold
            text-[#091E42]
            max-sm:text-[25px]
          "
                >
                    Get started with Trello today
                </h2>

                {/* Reusable SignupForm */}
                <div className="mx-auto mt-[22px] max-w-[520px]">
                    <SignupForm variant="cta" />
                </div>

                {/* Privacy policy */}
                <p
                    className="
            mt-[37px]
            text-[17px]
            leading-[26px]
            text-[#091E42]
          "
                >
                    By entering my email, I acknowledge the{" "}
                    <a
                        href="https://www.atlassian.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0065FF] hover:underline"
                    >
                        Atlassian Privacy Policy
                    </a>
                </p>

            </div>
        </section>
    );
}