import { IconType } from "react-icons";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuShieldAlert } from "react-icons/lu";
import { MdOutlineMonitor } from "react-icons/md";

import { GoShieldCheck } from "react-icons/go";
import { FaRegCircleCheck } from "react-icons/fa6";

interface ContentData {
    title: string;
    className: string;
    icon: IconType;
}

export const contentDataWithoutSimbian: ContentData[] = [
    {
        title: "Wasting valuable analyst time on false positives",
        className: "bg-red-400/10",
        icon: IoMdCloseCircleOutline,
    },
    {
        title: "Processing one alert at a time, missing the big picture",
        className: "bg-red-400/10",
        icon: MdOutlineMonitor,
    },
    {
        title: "More time fixing SOAR automation, less time on real threats",
        className: "bg-red-400/10",
        icon: LuShieldAlert,
    },
];

export const contentDataWithSimbian: ContentData[] = [
    {
        title: "90% of alerts resolved automatically, 24/7",
        className: "bg-green-400/10",
        icon: FaRegCircleCheck,
    },
    {
        title: "Correlates alerts to your environment",
        className: "bg-green-400/10",
        icon: MdOutlineMonitor,
    },
    {
        title: "Investigate every alert—no SOAR needed",
        className: "bg-green-400/10",
        icon: GoShieldCheck,
    },
];