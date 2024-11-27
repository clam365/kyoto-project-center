"use client" //needed for search
import { useState } from 'react';
import SearchBar from "@/app/opendata/searchbar";
import ProjectEntryComponent from "@/app/projects/projectentrycomponent";
import projectlist from "@/app/projects/projectlist";
import Contact from "@/components/landing-page/contact";

export default function Page() {
    const [searchTerm, setSearchTerm] = useState(''); //store search term
    const [currentPage, setCurrentPage] = useState(1); // track current page
    const itemsPerPage = 10; // number of items per page

    const handleSearchChange = (term) => {
        setSearchTerm(term); //keep the casing as entered by the user
        setCurrentPage(1); // reset to first page on search change
    };

    // filter data based on searchTerm
    const filteredData = projectlist.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) // case-insensitive search
    );

    // calculate the data to be displayed on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className={"mt-8 flex justify-center m-auto lg:px-10 lg:space-x-10"}>
                <div className={"w-1/4 hidden lg:block"}>
                    <h1 className={"text-3xl lg:text-4xl font-[500] mb-6 lg:mb-0"}>STUDENT PROJECTS</h1>
                    <p className={"mt-4"}>
                        On this page, you can easily explore a wide range of student projects from the
                        Kyoto Project Center by using our intuitive search tool. Whether you&#39;re
                        looking for initiatives focused on sustainable development, cultural preservation,
                        or community engagement, this search functionality allows you to quickly narrow
                        down the list and access detailed project descriptions. Each project page offers
                        in-depth information on the goals, outcomes, and team members involved, making it
                        easy to learn more about how WPI students are making an impact in Kyoto.
                    </p>
                </div>
                <div className={"w-3/4"}>
                    <div className={"w-full"}>
                        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                        <br />
                        {currentProjects.map((item, index) => (
                            <ProjectEntryComponent
                                key={index}
                                title={item.title}
                                authors={item.authors}
                                link={item.link}
                                year={item.year}
                            />
                        ))}
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                            >
                                &lt; Previous
                            </button>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
                                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Next &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Contact />
        </div>
    );
}
