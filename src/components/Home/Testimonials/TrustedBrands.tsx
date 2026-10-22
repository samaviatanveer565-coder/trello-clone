export default function TrustedBrands() {
    return (
        <div className="w-full pt-[35px]">
            <p className="text-center text-[18px] leading-[27px] text-[var(--text-primary)]">
                Join a community of millions of users globally
                who are using Trello to get more done.
            </p>

            <div className="mt-[25px] flex w-full justify-center">
                <img
                    src="/images/testimonials/trusted-brands.svg"
                    alt="Visa, Coinbase, John Deere, Zoom, Grand Hyatt and Fender"
                    className="trusted-brands-logo block h-auto w-[900px]"
                />
            </div>
        </div>
    );
}