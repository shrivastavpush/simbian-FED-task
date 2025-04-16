"use client";

import AlertCard from "../components/AlertCard";
import StepFlow from "../components/StepFlow";
import ContentCard from "../components/ContentCard";
import { contentDataWithSimbian } from "../utils/contentData";
import { FaCheck } from "react-icons/fa";

export default function WithSimbian() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-green-500">
                With Simbian
            </h2>

            {/* added steps Flow Component */}
            <StepFlow />

            <div className="flex px-10 items-baseline justify-around">

                {/* sample content messages */}
                <div className="flex flex-col items-center justify-evenly gap-4 mr-8">
                    {contentDataWithSimbian.map((data) => (
                        <ContentCard
                            key={data.title}
                            title={data.title}
                            className={data.className}
                            icon={<data.icon size={24} className="text-green-600" />}
                        />
                    ))}
                </div>

                {/* Cards with zero counts */}
                <div className="flex flex-col items-center justify-evenly gap-4">
                    <AlertCard
                        title="Ignored Alerts"
                        countStart={200}
                        countEnd={0}
                        icon={<FaCheck size={24} className="text-green-500" />}
                        color="bg-green-900/30"
                        alerts={[]}
                        withSimbian={true}
                    />

                    <AlertCard
                        title="Wrongly Closed Alerts"
                        countStart={35}
                        countEnd={0}
                        icon={<FaCheck size={24} className="text-green-500" />}
                        color="bg-green-900/30"
                        alerts={[]}
                        withSimbian={true}
                    />

                    <AlertCard
                        title="Active Threats"
                        countStart={5}
                        countEnd={0}
                        icon={<FaCheck size={24} className="text-green-500" />}
                        color="bg-green-900/30"
                        alerts={[]}
                        withSimbian={true}
                    />
                </div>
            </div>
        </div>
    );
}
