import Project from "@/components/landing-page/project-components/project"
import ViewProjects from "@/components/landing-page/project-components/viewprojects"
export default function projects() {
    return(
        <div className={"p-10 py-12 space-y-16"}>
            <h1 className={"text-4xl font-[500] -mb-10"}>LATEST PROJECTS</h1>
            <Project
                imageSrc="/kikuhama.webp"
                imageAlt="Kikuhama"
                title="URBAN CHANGE IN KIKUHAMA"
                subtitle="Examining urban change and traffic congestion in Kikuhama"
                year="B2024"
                authors="Examining Kikuhama's traffic congestion, linking it to tourism, ecology, and urban development to improve quality of life."
                linkHref="/kikuhama2024"
            />
            <Project
                imageSrc="/takase.jpg"
                imageAlt="takase"
                title="UNROOTING THE ISSUE: CONFLICT RESOLUTION OF URBAN RIVER RESTORATION, KIKUHAMA"
                subtitle="Takase Canal"
                year="B2022"
                authors="Exploring the impact of the Takase River canal restoration in Kikuhama, revealing conflicts between residents and the municipality."
                linkHref="https://digital.wpi.edu/concern/student_works/0c483p00x?locale=en"
            />
            <Project
                imageSrc="/business.webp"
                imageAlt="business"
                title="PRESENTING THE CULTURE OF LOCAL BUSINESSES IN KYOTO'S KEIHANSHICHIJO AREA"
                subtitle="reashhh"
                year="B2019"
                authors="Promoting local businesses in the Keihanshichijo Area to tourists through research on tourism trends, multinational corporations, and interviews with business owners, culminating in an interactive map and recommendations for expansion and promotion."
                linkHref="https://digital.wpi.edu/concern/student_works/5425kd19g?locale=en"
            />
            <ViewProjects/>
        </div>
    )
}