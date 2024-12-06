export default function objectives() {
    return (
        <div>
            <br/>
            <h1 className={"font-semibold text-xl mb-2"}>PROJECT GOAL AND OBJECTIVES</h1>
            <p className={"text-sm"}>
                Our project aims to investigate Kikuhama&#39;s evolving urban landscape
                by analyzing the impacts of tourism, focusing on traffic patterns and building
                developments, to gain deeper insight into the neighborhood&#39;s community dynamics.
                The project objectives are stated below, which are dived into in our paper and further
                info.
            </p>
            <br/>
            <div className={"grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                <div className="bg-[#EEEEEE] p-4 rounded-md">
                    <div className="flex items-center">
                        <h1 className="bg-[#323232] text-[#E3E3E3] w-6 h-6 p-1 text-sm rounded-sm flex items-center justify-center scale-90 font-bold">1</h1>
                        <h1 className="font-semibold  text-sm ml-2">Revise Kikuhama&#39;s mapping to reflect current
                            changes and ensure accuracy</h1>
                    </div>
                    <h1 className="text-sm text-[#949494] mt-2">
                        Using the software QGIS and past 2023 open data, Kikuhama will be mapped to show the
                        relationships between
                        different building types and determine what kind of direction the neighborhood is taking in
                        relation to tourism
                        and other factors.
                    </h1>
                </div>
                <div className="bg-[#EEEEEE] p-4 rounded-md">
                    <div className="flex items-center">
                        <h1 className="bg-[#323232] text-[#E3E3E3] w-6 h-6 p-1 text-sm rounded-sm flex items-center justify-center scale-90 font-bold">2</h1>
                        <h1 className="font-semibold  text-sm ml-2">Analyze traffic to find patterns in the flow of people within the neighborhood</h1>
                    </div>
                    <h1 className="text-sm text-[#949494] mt-2">
                        In pairing with objective 1, we will be able to see how traffic is evolving as Kikuhama&#39;s image is evolving. A map
                        showing the different times of travel will distinguish patterns throughout the day by all modes of transport.
                    </h1>
                </div>
                <div className="bg-[#EEEEEE] p-4 rounded-md">
                    <div className="flex items-center">
                        <h1 className="bg-[#323232] text-[#E3E3E3] w-6 h-6 p-1 text-sm rounded-sm flex items-center justify-center scale-90 font-bold">3</h1>
                        <h1 className="font-semibold  text-sm ml-2">Create a Kyoto Project Center Website to showcase findings</h1>
                    </div>
                    <h1 className="text-sm text-[#949494] mt-2">
                        The creation of a database/portfolio for all WPI Kyoto Center projects allows future students, policymakers,
                        and other investors to see and continue current work within Japan. It also serves as a place for our project
                        to be treated as quick case study read.
                    </h1>
                </div>
            </div>
        </div>
    )
}