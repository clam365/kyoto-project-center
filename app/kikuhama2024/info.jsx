import Image from "next/image";
import Team from "@/app/kikuhama2024/team"
import Background from "@/app/kikuhama2024/background"
import Objectives from "@/app/kikuhama2024/objectives"
import Findings from "@/app/kikuhama2024/findings"
import Reccommendations from "@/app/kikuhama2024/reccommendations"
export default function info() {
    return (
        <div>
            <Image alt={"yadoya-kikuhama"} src={"/yadoya-kikuhama.png"} width={2400} height={800} className={"w-full"}/>
            <div className={"p-10 lg:p-20 py-12"}>
                <h1 className={"text-3xl lg:text-4xl font-[500] mb-6 lg:mb-0"}>URBAN SHIFTS IN KIKUHAMA: INSIGHTS INTO TOURISM, TRAFFIC, AND COMMUNITY</h1>
                <br/>
                <p className={"text-sm"}>
                    Over the course of B-term 2024, the Kikuhama team delved into the evolving urban
                    landscape of Kyoto&#39;s Kikuhama neighborhood. This project sought to explore the
                    profound impacts of tourism on the area, particularly focusing on traffic patterns
                    and building developments. By examining these factors, we aimed to uncover how they
                    shape community dynamics and influence the daily lives of residents.
                    <br/>
                    <br/>
                    Our research highlights how tourism-driven changes affect not only the physical
                    environment but also the social fabric of Kikuhama. Through on-the-ground observations,
                    data analysis, and stakeholder interviews, this study provides a nuanced perspective on
                    the neighborhood’s transformation.
                </p>
                <br/>
                <Team/>
                <Background/>
                <Objectives/>
                <Findings/>
                <Reccommendations/>
            </div>
        </div>

    )
}