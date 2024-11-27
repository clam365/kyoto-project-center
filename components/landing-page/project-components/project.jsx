import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

const Project = ({
                     imageSrc,
                     imageAlt,
                     title,
                     year,
                     authors,
                     linkHref,
                 }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Link href={linkHref}>
                <Image src={imageSrc} alt={imageAlt} width={600} height={300} className="h-[350px] w-full object-cover rounded-sm" />
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 lg:mt-0 lg:ml-4">
                <div className="relative">
                    <h1 className="font-[500] text-xl md:text-2xl xl:text-3xl">{title}</h1>
                    <p className="hidden absolute bottom-0 left-0 lg:inline-block outline outline-1 outline-black rounded-full px-2 py-1">
                        {year}
                    </p>
                </div>

                <div className="relative ">
                    <h1 className="hidden lg:block text-md">{authors}</h1>
                    <Link
                        className="lg:absolute lg:bottom-0 lg:left-0 w-full mt-4 pb-2 flex justify-between border-b border-b-black hover:border-b-gray-500 hover:text-gray-500 transition"
                        href={linkHref}
                    >
                        <h1>Read</h1>
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired,
};

export default Project;
