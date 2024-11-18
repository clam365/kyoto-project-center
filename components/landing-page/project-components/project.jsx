import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PropTypes from "prop-types";

const Project = ({
                     imageSrc,
                     imageAlt,
                     title,
                     subtitle,
                     year,
                     description,
                     linkHref,
                 }) => {
    return (
        <div className="grid grid-cols-2">
            <Image src={imageSrc} alt={imageAlt} width={600} height={300} className="h-[350px] object-cover rounded-sm" />
            <div className="grid grid-cols-2">
                <div className="relative">
                    <h1 className="font-[500] text-3xl">{title}</h1>
                    <p className="absolute bottom-0 left-0 inline-block outline outline-1 outline-black rounded-full px-2 py-1">
                        {year}
                    </p>
                </div>

                <div className="relative">
                    <h1 className="text-md">{description}</h1>
                    <Link
                        className="absolute bottom-0 left-0 w-full mt-4 pb-2 flex justify-between border-b border-b-black hover:border-b-gray-500 hover:text-gray-500 transition"
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
    description: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired,
};

export default Project;
