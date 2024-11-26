import Image from "next/image";

export default function page() {
    return (
        <div className={"mt-8"}>
            <Image alt={"kamo"} src={"/kamo-river.png"} width={2400} height={800} className={"w-full"}/>
        </div>
    )
}