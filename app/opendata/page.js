"use client" //needed for search
import { useState } from 'react';
import SearchBar from "@/app/opendata/searchbar";
import OpenDataComponent from "@/app/opendata/opendatacomponent";
import data from "@/app/opendata/data";
import Contact from "@/components/landing-page/contact"
export default function Page() {
    const [searchTerm, setSearchTerm] = useState(''); //store search term

    const handleSearchChange = (term) => {
        setSearchTerm(term); //keep the casing as entered by the user
    };

    //filter data based on searchTerm
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) //case-insensitive search
    );

    return (
        <div>
            <div className={"mt-8 flex justify-center m-auto  lg:px-10 lg:space-x-10"}>
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
                        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
                        <br/>
                        {filteredData.map((item, index) => (
                            <OpenDataComponent
                                key={index}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                                year={item.year}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Contact/>
        </div>

    );
}
