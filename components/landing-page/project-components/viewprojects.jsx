import Link from "next/link";

export default function ViewProjects() {
    return (
        <div className="flex items-center justify-center">
            <Link
                href={"/projects"}
                className="inline-flex outline outline-1 outline-black rounded-full px-5 py-3 hover:outline-gray-500 hover:text-gray-500 transition"
            >
                See all projects
            </Link>
        </div>
    );
}
