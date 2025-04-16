import { IconType } from "react-icons";
import { FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import { HiOutlineBeaker } from "react-icons/hi2";
import { BsBarChart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

export interface Step {
    title: string;
    description: string;
    icon: IconType;
    iconClassName: string;
    color: string;
}

export const steps: Step[] = [
    {
        title: "Triaged & Reported",
        description: "SOC Agent handled investigation and reporting",
        icon: FaRegCheckCircle,
        iconClassName: "text-green-500",
        color: "bg-green-900/30",
    },
    {
        title: "Automated Response",
        description: "Incident automatically contained",
        icon: HiOutlineBeaker,
        iconClassName: "text-blue-500",
        color: "bg-blue-900/30",
    },
    {
        title: "Comprehensive Analysis",
        description: "AI recognized patterns",
        icon: BsBarChart,
        iconClassName: "text-purple-500",
        color: "bg-purple-900/30",
    },
    {
        title: "Accurate Detection",
        description: "Zero false positives",
        icon: IoEyeOutline,
        iconClassName: "text-indigo-500",
        color: "bg-indigo-900/30",
    },
    {
        title: "24/7 Coverage",
        description: "No analyst fatigue",
        icon: FaRegClock,
        iconClassName: "text-teal-500",
        color: "bg-teal-900/30",
    },
];