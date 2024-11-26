import PropTypes from "prop-types";
import Link from "next/link";


const OpenDataComponent = ({title, description, link}) => {
  return (
      <Link href={link} >
          <div>
              <div className={"hover:bg-[#ececec] transition p-2 rounded-md"}>
                  <h1 className={"text-xl font-[500] "}>{title}</h1>
                  <p>{description}</p>
              </div>
              <hr className={"my-2 text-black"}/>
          </div>

      </Link>
  )
}

OpenDataComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default OpenDataComponent;