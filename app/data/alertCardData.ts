import { IconType } from "react-icons";
import { AlertItemData } from "./alertItemData";
import { FaCheck } from "react-icons/fa";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuShieldAlert } from "react-icons/lu";
import { GoBellSlash } from "react-icons/go";

export interface AlertCard {
    title: string;
    type?: string;
    countStart: number;
    countEnd: number;
    icon: IconType;
    color: string;
    alerts?: AlertItemData[];
    withSimbian: boolean;
}

export const WithoutSimbianAlertCards: AlertCard[] = [
    {
        title: "Ignored Alerts",
        type: "ignored",
        countStart: 0,
        countEnd: 200,
        icon: IoMdCloseCircleOutline,
        color: "bg-red-900/30",
        withSimbian: false,
    },
    {
        title: "Wrongly Closed Alerts",
        type: "wronglyClosed",
        countStart: 0,
        countEnd: 35,
        icon: LuShieldAlert,
        color: "bg-red-900/30",
        withSimbian: false,
    },
    {
        title: "Active Threats",
        type: "active",
        countStart: 0,
        countEnd: 5,
        icon: GoBellSlash,
        color: "bg-red-900/30",
        withSimbian: false,
    },
];

export const WithSimbianAlertCards: AlertCard[] = [
    {
        title: "Ignored Alerts",
        countStart: 200,
        countEnd: 0,
        icon: FaCheck,
        color: "bg-green-900/30",
        withSimbian: true,
    },
    {
        title: "Wrongly Closed Alerts",
        countStart: 35,
        countEnd: 0,
        icon: FaCheck,
        color: "bg-green-900/30",
        withSimbian: true,
    },
    {
        title: "Active Threats",
        countStart: 5,
        countEnd: 0,
        icon: FaCheck,
        color: "bg-green-900/30",
        withSimbian: true,
    },
];