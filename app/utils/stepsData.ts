import { IconType } from "react-icons";
import { FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import { HiOutlineBeaker } from "react-icons/hi2";
import { BsBarChart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

export interface Step {
    title: string;
    description: string;
    icon: IconType;
    color: string;
}

export const steps: Step[] = [
    {
        title: "Triaged & Reported",
        description: "SOC Agent handled investigation and reporting",
        icon: FaRegCheckCircle,
        color: "bg-green-900/30",
    },
    {
        title: "Automated Response",
        description: "Incident automatically contained",
        icon: HiOutlineBeaker,
        color: "bg-blue-900/30",
    },
    {
        title: "Comprehensive Analysis",
        description: "AI recognized patterns",
        icon: BsBarChart,
        color: "bg-purple-900/30",
    },
    {
        title: "Accurate Detection",
        description: "Zero false positives",
        icon: IoEyeOutline,
        color: "bg-indigo-900/30",
    },
    {
        title: "24/7 Coverage",
        description: "No analyst fatigue",
        icon: FaRegClock,
        color: "bg-teal-900/30",
    },
];