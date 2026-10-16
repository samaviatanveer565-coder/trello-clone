import SignupForm from "./SignupForm";

export default function Hero() {
    return (
        <section
            id="hero"
            className="w-full overflow-hidden bg-[#F4F5F7] pt-[100px]"
        >
            <div
                className="
          mx-auto
          grid
          min-h-[0px]
          w-full
          max-w-[1200px]
          grid-cols-2
          items-center
          gap-0
          max-lg:px-6
          max-md:min-h-0
          max-md:grid-cols-1
          max-md:gap-8
          max-md:py-16
        "
            >
                {/* LEFT SIDE: Heading and signup */}
                <div className="relative z-10 w-full">
                    <h1
                        className="
              max-w-[570px]
              font-display
              text-[44px]
              leading-[1.2]
              font-extrabold
              tracking-[-0.7px]
              text-[#091E42]
              max-md:text-[34px]
              max-sm:text-[30px]
            "
                    >
                        Capture, organize, and tackle your to-dos from anywhere.
                    </h1>

                    <p
                        className="
              mt-[12px]
              max-w-[475px]
              text-[20px]
              leading-[29px]
              text-[#091E42]
            "
                    >
                        Escape the clutter and chaos—unleash your productivity
                        with Trello.
                    </p>

                    <div className="mt-[29px]">
                        <SignupForm />
                    </div>

                    <p
                        className="
              mt-[37px]
              max-w-[465px]
              text-[18px]
              leading-[28px]
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

                    <a
                        href="#video"
                        className="
              mt-[23px]
              inline-flex
              items-center
              gap-[9px]
              text-[17px]
              text-[#0065FF]
              font-bold
              hover:underline
            "
                    >
                        Watch video

                        <span
                            className="
                flex
                h-[21px]
                w-[21px]
                items-center
                justify-center
                rounded-full
                border
                border-[#0065FF]
              "
                            aria-hidden="true"
                        >
                            <svg
                                width="9"
                                height="9"
                                viewBox="0 0 12 12"
                                fill="currentColor"
                            >
                                <path d="M3 1.5L10 6L3 10.5V1.5Z" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* RIGHT SIDE: Original Trello animated video */}
                <div
                    className="
            relative
            flex
            h-full
            w-full
            items-center
            justify-start
            max-md:justify-center
          "
                >
                    <video
                        src="/videos/hero-video.mp4"
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        aria-label="Trello Inbox mobile application animation"
                        className="
              block
              h-auto
              w-[650px]
              max-w-none
              max-md:w-full
              max-md:max-w-[540px]
          

            "
                    />
                </div>
            </div>
        </section>
    );
}