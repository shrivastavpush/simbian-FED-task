import AlertCard from "../components/AlertCard";
import StepFlow from "../components/StepFlow";
import ContentCard from "../components/ContentCard";
import { contentDataWithSimbian } from "../data/contentData";
import { WithSimbianAlertCards } from "../data/alertCardData";

export default function WithSimbian() {
    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-8 text-green-500">
                With Simbian
            </h2>

            {/* added steps Flow Component */}
            <StepFlow />

            <div className="flex md:flex-row flex-col px-0 md:px-10 items-baseline justify-around gap-6 md:gap-0">

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
                    {WithSimbianAlertCards.map((data) => (
                        <AlertCard
                            key={data.title}
                            title={data.title}
                            countStart={data.countStart}
                            countEnd={data.countEnd}
                            icon={<data.icon size={24} className="text-green-600" />}
                            color={data.color}
                            alerts={[]}
                            withSimbian={data.withSimbian}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
