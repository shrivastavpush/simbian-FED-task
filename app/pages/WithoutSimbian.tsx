"use client";

import { useState, useEffect } from "react";
import AlertCard from "../components/AlertCard";
import ContentCard from "../components/ContentCard";
import { getRandomAlert } from "../utils/alertData";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuShieldAlert } from "react-icons/lu";
import { MdOutlineMonitor } from "react-icons/md";
import { GoBellSlash } from "react-icons/go";

export default function WithoutSimbian() {
    const [ignoredCount, setIgnoredCount] = useState(200);
    const [wronglyClosedCount, setWronglyClosedCount] = useState(35);
    const [activeThreatsCount, setActiveThreatsCount] = useState(5);

    const [ignoredAlerts, setIgnoredAlerts] = useState([]);
    const [wronglyClosedAlerts, setWronglyClosedAlerts] = useState([]);
    const [activeThreats, setActiveThreats] = useState([]);

    // Add new alerts periodically
    useEffect(() => {
        const ignoredInterval = setInterval(() => {
            const newAlert = getRandomAlert();
            setIgnoredAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
            setIgnoredCount(prev => prev + 1);
        }, 5000);

        const wronglyClosedInterval = setInterval(() => {
            const newAlert = getRandomAlert();
            setWronglyClosedAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
            setWronglyClosedCount(prev => prev + 1);
        }, 12000);

        const threatsInterval = setInterval(() => {
            const newAlert = getRandomAlert();
            setActiveThreats(prev => [newAlert, ...prev.slice(0, 4)]);
            setActiveThreatsCount(prev => prev + 1);
        }, 15000);

        // Initialize with some alerts
        setIgnoredAlerts([getRandomAlert(), getRandomAlert(), getRandomAlert()]);
        setWronglyClosedAlerts([getRandomAlert(), getRandomAlert()]);
        setActiveThreats([getRandomAlert(), getRandomAlert()]);

        return () => {
            clearInterval(ignoredInterval);
            clearInterval(wronglyClosedInterval);
            clearInterval(threatsInterval);
        };
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
                Without Simbian
            </h2>

            <div className="flex px-10 items-baseline">

                {/* sample content messages */}
                <div className="flex flex-col items-center justify-evenly gap-4 mr-8">
                    <ContentCard
                        title="Wasting valuable analyst time on false positives"
                        className="bg-red-400/10"
                        icon={<IoMdCloseCircleOutline size={24} className="text-red-600" />}
                    />
                    <ContentCard
                        title="Processing one alert at a time, missing the big picture"
                        className="bg-red-400/10"
                        icon={<MdOutlineMonitor size={24} className="text-red-600" />}
                    />
                    <ContentCard
                        title="More time fixing SOAR automation, less time on real threats"
                        className="bg-red-400/10"
                        icon={<LuShieldAlert size={24} className="text-red-600" />}
                    />
                </div>

                {/* alert boxes */}

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <AlertCard
                        title="Ignored Alerts"
                        count={ignoredCount}
                        icon={<GoBellSlash size={24} color="#FFFFFF" />}
                        color="bg-red-900/30"
                        alerts={ignoredAlerts}
                    />

                    <AlertCard
                        title="Wrongly Closed Alerts"
                        count={wronglyClosedCount}
                        icon={<IoMdCloseCircleOutline size={24} color="#FFFFFF" />}
                        color="bg-yellow-900/30"
                        alerts={wronglyClosedAlerts}
                    />

                    <AlertCard
                        title="Active Threats"
                        count={activeThreatsCount}
                        icon={<LuShieldAlert size={24} color="#FFFFFF" />}
                        color="bg-orange-900/30"
                        alerts={activeThreats}
                    />
                </div> */}
            </div>
        </div>
    );
}
