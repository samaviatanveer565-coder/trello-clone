import {
    Inbox,
    CalendarDays,
    Zap,
    Plug,
    Copy,
    Settings,
    LayoutGrid,
    Megaphone,
Package,
Code2,
Pencil,
Blocks,
Globe2,
Lightbulb,
Star,
Building2,
    type LucideIcon,
} from "lucide-react";

import type { MenuItem } from "./menuData";

type MegaMenuItemProps = {
    item: MenuItem;
};

const icons: Record<string, LucideIcon> = {
    inbox: Inbox,
    calendar: CalendarDays,
    zap: Zap,
    plug: Plug,
    copy: Copy,
    settings: Settings,
    grid: LayoutGrid,
    megaphone: Megaphone,
package: Package,
code: Code2,
pencil: Pencil,
blocks: Blocks,
globe: Globe2,
lightbulb: Lightbulb,
star: Star,
building: Building2,
};

export default function MegaMenuItem({ item }: MegaMenuItemProps) {
    const Icon = item.icon ? icons[item.icon] : undefined;

    return (
        <a
            href={item.href}
            className="
        block rounded-[4px] p-[10px]
        text-[#091E42]
        transition-colors duration-150
        hover:bg-[#F7F8F9]
      "
        >
            <div className="flex items-center gap-[12px]">
                {Icon && (
                    <Icon
                        size={17}
                        strokeWidth={2}
                        className="shrink-0 text-[#7A869A]"
                    />
                )}

                <span className="text-[15px] font-semibold">
                    {item.title}
                </span>
            </div>

            <p className="mt-[9px] text-[12px] leading-[17px] text-[#44546F]">
                {item.description}
            </p>
        </a>
    );
}