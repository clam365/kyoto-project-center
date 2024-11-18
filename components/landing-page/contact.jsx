import Link from "next/link";
export default function contact() {
    return (
        <section id={"contact"} className={"bg-[#ececec] p-10 pt-16 mt-16 pb-44"}>
            <div className={"grid grid-cols-2"}>
                <h1 className={"font-[500] text-4xl"}>CONTACT US FOR FURTHER INFORMATION</h1>
                <div className={"space-y-3"}>
                    <p>〒600-8114 Kyoto, Shimogyo Ward, Hayaocho, 314 Yadoya Hiraiwa 314番地</p>
                    <p>gr-wpi-iqp-kikuhama@wpi.edu</p>
                    <div className={"space-x-6"}>
                        <Link href={"https://www.wpi.edu/"} className={"underline underline-offset-4 hover:text-gray-500 transition"}>WPI</Link>
                        <Link href={"https://www.wpi.edu/project-based-learning/project-based-education/global-project-program" } className={"underline underline-offset-4 hover:text-gray-500 transition"}>WPI Global School</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}