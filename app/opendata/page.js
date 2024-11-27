"use client" //needed for search
import { useState } from 'react';
import SearchBar from "@/app/opendata/searchbar";
import OpenDataComponent from "@/app/opendata/opendatacomponent";
import data from "@/app/opendata/data";
import Contact from "@/components/landing-page/contact";

export default function Page() {
    const [searchTerm, setSearchTerm] = useState(''); //store search term
    const [currentPage, setCurrentPage] = useState(1); // track current page
    const itemsPerPage = 15; // number of items per page

    const handleSearchChange = (term) => {
        setSearchTerm(term); //keep the casing as entered by the user
        setCurrentPage(1); // reset to first page on search change
    };

    // filter data based on searchTerm
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) // case-insensitive search
    );

    // calculate the data to be displayed on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

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
                    <h1 className={"text-3xl lg:text-4xl font-[500] mb-6 lg:mb-0"}>OPEN DATA</h1>
                    <p className={"mt-4"}>
                        The Open Data page also supports downloadable datasets, making it easy for
                        you to integrate the data into your own analyses or reports. Whether you&#39;re a
                        student, researcher, policymaker, or local business owner, the Open Data page
                        is your go-to resource for informed decision-making and insight into the dynamic
                        urban landscape of Kyoto.
                        <br/>
                        <br/>
                        Use the search bar above to start exploring, and discover the data that will help
                        shape the future of Kyoto’s urban development and tourism strategies through project
                        titles or by year.
                    </p>
                </div>
                <div className={"w-3/4"}>
                    <div className={"w-full"}>
                        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                        <br />
                        {currentData.map((item, index) => (
                            <OpenDataComponent
                                key={index}
                                title={item.title}
                                description={item.description}
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
