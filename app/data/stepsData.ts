import { IconType } from "react-icons";
import { FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import { HiOutlineBeaker } from "react-icons/hi2";
import { BsBarChart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

export interface Step {
    title: string;
    description: string;
    icon: IconType;
    iconColorClass: string;
    ringColorClass: string;
    bgColorClass: string;
}


export const steps: Step[] = [
    {
        title: "Triaged & Reported",
        description: "SOC Agent handled investigation and reporting",
        icon: FaRegCheckCircle,
        iconColorClass: "text-green-500",
        ringColorClass: "ring-green-500",
        bgColorClass: "bg-green-900/30",
    },
    {
        title: "Automated Response",
        description: "Incident automatically contained",
        icon: HiOutlineBeaker,
        iconColorClass: "text-blue-500",
        ringColorClass: "ring-blue-500",
        bgColorClass: "bg-blue-900/30",
    },
    {
        title: "Comprehensive Analysis",
        description: "AI recognized patterns",
        icon: BsBarChart,
        iconColorClass: "text-purple-500",
        ringColorClass: "ring-purple-500",
        bgColorClass: "bg-purple-900/30",
    },
    {
        title: "Accurate Detection",
        description: "Zero false positives",
        icon: IoEyeOutline,
        iconColorClass: "text-indigo-500",
        ringColorClass: "ring-indigo-500",
        bgColorClass: "bg-indigo-900/30",
    },
    {
        title: "24/7 Coverage",
        description: "No analyst fatigue",
        icon: FaRegClock,
        iconColorClass: "text-teal-500",
        ringColorClass: "ring-teal-500",
        bgColorClass: "bg-teal-900/30",
    },
];
