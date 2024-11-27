import PropTypes from "prop-types";
import Link from "next/link";


const ProjectEntryComponent = ({title, authors, link, year}) => {
  return (
      <Link href={link} >
          <div>
              <div className={"hover:bg-[#ececec] transition p-2 rounded-md flex"}>
                  <div className={"w-3/4"}>
                      <h1 className={"text-xl font-[500] "}>{title}</h1>
                      <p className={"text-gray-500"}>{authors}</p>
                  </div>
                  <div className={"w-1/4 text-right"}>{year}</div>
              </div>
              <hr className={"my-2 text-black"}/>
          </div>

      </Link>
  )
}

ProjectEntryComponent.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default ProjectEntryComponent;