import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function mission() {
    return (
        <div className={"w-3/4 flex justify-between p-10 py-16"}>
            <h1 className={"text-4xl font-[500]"}>MISSION</h1>
            <div className={"flex-col ml-60"}>
                <p className={"text-md"}>
                    Since 2019, WPI students have conducted meaningful projects to address
                    challenges in the city of Kyoto through a blend of cultural understanding
                    and technological innovation. These projects span a wide range of topics,
                    from urban revitalization and sustainable farming practices to augmented
                    reality tourism and environmental education. Many of these initiatives
                    have supported Kyoto’s efforts to balance tradition with modern development.
                </p>
                <Link className={"mt-4 pb-2 flex justify-between border-b border-b-black hover:border-b-gray-500 hover:text-gray-500 transition"} href={"/projects"} >
                    <h1>See student projects</h1>
                    <ArrowRight/>
                </Link>
            </div>
        </div>
    )
}