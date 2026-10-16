type FooterLinkProps = {
  title: string;
  description: string;
  href: string;
};

export default function FooterLink({
  title,
  description,
  href,
}: FooterLinkProps) {
  return (
    <a
      href={href}
      className="
        block rounded-[3px]
        px-[8px] py-[8px]
        text-white transition-colors
        hover:bg-white/10
        focus-visible:outline-2
        focus-visible:outline-white
      "
    >
      <h3 className="text-[14px] font-semibold">
        {title}
      </h3>

      <p className="mt-[8px] text-[11px] leading-[15px]">
        {description}
      </p>
    </a>
  );
}