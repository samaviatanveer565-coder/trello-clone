import type { MenuData } from "./menuData";
import MegaMenuItem from "./MegaMenuItem";

type MegaMenuProps = {
    id: string;
    data: MenuData;
};

export default function MegaMenu({ id, data }: MegaMenuProps) {
    return (
        <div
            id={id}
            className="
        absolute left-1/2 top-full z-50
        w-full max-w-[1100px]
        -translate-x-1/2
        bg-white shadow-lg
      "
        >
            <div className="grid grid-cols-[3fr_1fr]">

                {/* LEFT: Menu links */}
                <div className="px-[20px] py-[35px]">

                  {data.heading && (
  <h2 className="mb-[20px] text-[20px] font-bold text-[#091E42]">
    {data.heading}
  </h2>
)}

                    <div className="grid grid-cols-2 gap-x-[25px] gap-y-[25px]">
                        {data.items.map((item) => (
                            <MegaMenuItem key={item.title} item={item} />
                        ))}
                    </div>

                    {data.specialCard && (
  <div className="mt-[20px] flex items-center justify-between gap-[20px] bg-[#FFFBF0] px-[20px] py-[22px]">

    <div>
      <div className="flex items-center gap-[10px]">
        <span className="text-[20px]">⚡</span>

        <h3 className="text-[15px] font-semibold text-[#091E42]">
          {data.specialCard.title}
        </h3>
      </div>

      <p className="mt-[10px] text-[12px] text-[#44546F]">
        {data.specialCard.description}
      </p>
    </div>

    <a
      href={data.specialCard.buttonLink}
      className="shrink-0 rounded-[4px] border border-[#FF9F1A] bg-white px-[15px] py-[12px] text-[14px] text-[#091E42] hover:bg-[#FFF1CC]"
    >
      {data.specialCard.buttonText}
    </a>

  </div>
)}

                </div>

                {/* RIGHT: Highlight panel */}
                <div className="bg-[#F7F5FF] px-[20px] py-[35px]">

                    <h3 className="text-[20px] font-bold text-[#091E42]">
                        {data.sidebar.title}
                    </h3>

                    <p className="mt-[12px] text-[13px] leading-[20px] text-[#44546F]">
                        {data.sidebar.description}
                    </p>

                    {data.sidebar.links && (
  <div className="mt-[20px] flex flex-col gap-[15px]">
    {data.sidebar.links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className="text-[14px] font-semibold text-[#091E42] hover:text-[#0065FF] hover:underline"
      >
        {link.label}
      </a>
    ))}
  </div>
)}

                    {data.sidebar.buttonText && data.sidebar.buttonLink && (
                        <a
                            href={data.sidebar.buttonLink}
                            className="
                mt-[15px] inline-flex min-h-[44px]
                items-center justify-center
                rounded-[4px] border border-[#6E5DC6]
                bg-white px-[14px]
                text-[14px] text-[#091E42]
                hover:bg-[#F1EDFF]
              "
                        >
                            {data.sidebar.buttonText}
                        </a>
                    )}

                </div>
            </div>
        </div>
    );
}