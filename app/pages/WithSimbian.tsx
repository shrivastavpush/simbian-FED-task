"use client";

import AlertCard from "../components/AlertCard";
import StepFlow from "../components/StepFlow";
import ContentCard from "../components/ContentCard";

import { MdOutlineMonitor } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

export default function WithSimbian() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-green-500">
                With Simbian
            </h2>

            {/* added steps Flow Component */}
            <StepFlow />

            <div className="flex">

                {/* sample content messages */}
                <div className="flex flex-col items-center justify-evenly gap-4 mr-8">
                    <ContentCard
                        title="90% of alerts resolved automatically, 24/7"
                        className="bg-green-400/10"
                        icon={<FaRegCircleCheck size={24} className="text-green-600" />}
                    />
                    <ContentCard
                        title="Correlates alerts to your environment"
                        className="bg-green-400/10"
                        icon={<MdOutlineMonitor size={24} className="text-green-600" />}
                    />
                    <ContentCard
                        title="Investigate every alert—no SOAR needed"
                        className="bg-green-400/10"
                        icon={<GoShieldCheck size={24} className="text-green-600" />}
                    />
                </div>

                {/* Cards with zero counts */}
                {/* <div className="flex flex-col items-center justify-evenly gap-4">
                    <AlertCard
                        title="Ignored Alerts"
                        count={0}
                        icon={<FaCheck size={24} className="text-green-500" />}
                        color="bg-green-900/30"
                        alerts={[]}
                        withSimbian={true}
                    />

                    <AlertCard
                        title="Wrongly Closed Alerts"
                        count={0}
                        icon={<FaCheck size={24} className="text-green-500" />}
                        color="bg-green-900/30"
                        alerts={[]}
                        withSimbian={true}
                    />

                    <AlertCard
                        title="Active Threats"
                        count={0}
                        icon={<FaCheck size={24} className="text-green-500" />}
                        color="bg-green-900/30"
                        alerts={[]}
                        withSimbian={true}
                    />
                </div> */}
            </div>
        </div>
    );
}
