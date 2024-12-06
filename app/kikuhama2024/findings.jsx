import Image from "next/image";

export default function findings() {
    return (
        <div>
            <br/>
            <br/>
            <hr/>
            <br/>
            <h1 className={"font-semibold text-xl mb-2"}>FINDINGS</h1>
            <p className={"text-sm"}>
                Our research reveals how tourism has transformed Kikuhama, using mapping layouts,
                traffic patterns, and community insights. Tourists primarily use the area as a transit hub,
                passing through to visit Kyoto’s attractions while enjoying the Kamo River and Takase Canal.
                The rise of guesthouses and hotels has met the demand for convenient accommodations, reducing
                reliance on cars by offering proximity to public transit and scenic pathways. Local businesses,
                like Kawama Cafe and Smile Chocolate Cafe, have thrived, responding to the increased
                foot traffic. While some residents appreciate the economic benefits, others feel that tourism
                is eroding traditional values and community ties, highlighting the challenge of balancing
                growth with preserving Kikuhama’s identity.
            </p>
            <br/>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <Image src={"/map.png"} alt={"map"} height={400} width={400} className={"w-full"}/>
                <Image src={"/chart.png"} alt={"map"} height={400} width={400} className={"w-full"}/>
            </div>
            <br/>
            <br/>
            <p className={"text-sm"}>
                In the following findings for traffic patterns, we stationed ourselves at 8 key friction
                points in Kikuhama, where there are entry/exit points and inner neighborhood (4-way, bridge crossing,
                stop sign, etc.).
                From there, we collected data of entities such as individuals walking, motor vehicles, bikes, and taxis
                at the
                times of 8-9am, 12-1pm, and 5-6pm. The majority of traffic was centered around entities going northbound
                and west/east utilizing the bridge
                to connect to another ward. Weekdays seemed to be the opposite of weekends, where weekday traffic had
                most congestion at
                morning times, while weekend was at night.
            </p>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <Image src={"/weekday.gif"} alt={"map"} height={400} width={400} className={"w-full"}/>
                <Image src={"/weekend.gif"} alt={"map"} height={400} width={400} className={"w-full"}/>
            </div>
            <br/>
            <br/>
            <p className={"text-sm"}>
                We additionally conducted interviews with businesses, residents, and tourists to gain an in-depth
                understanding
                in their stories and thoughts about how Kikuhama is evolving. This interactive map shows all the
                places/people
                we talked to along with simplified notes about the location and interview.
            </p>
            <br/>
            <iframe width="768" height="576" className={"w-full"}
                    src="https://maphub.net/embed_h/41InjyopcGt79B0A?panel=1&panel_closed=1&legend=1&button=0"
                    ></iframe>
        </div>
    )
}