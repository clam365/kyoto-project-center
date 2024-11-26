import Image from "next/image";

export default function info() {
    return (
        <div>
            <Image alt={"kamo"} src={"/kamo-river.png"} width={2400} height={800} className={"w-full"}/>
            <div className={"p-10 py-12"}>
                <h1 className={"text-3xl lg:text-4xl font-[500] mb-6 lg:mb-0"}>KYOTO PROJECT CENTER PROGRAM</h1>

                <div className={"grid grid-cols-1 md:grid-cols-2 md:gap-x-8 mt-12"}>
                    <div className="space-y-6">
                        <p className="grid grid-cols-2 gap-4">
                            <span className="font-bold">Program Term:</span>
                            <span>B Term</span>
                        </p>
                        <p className="grid grid-cols-2 gap-4">
                            <span className="font-bold">Housing:</span>
                            <span>
                                Students share apartment-style housing with kitchens, 2-4 per room. Faculty live nearby.
                                Wifi, showers, bathrooms, dryer/washer available.
                            </span>
                        </p>
                        <p className="grid grid-cols-2 gap-4">
                            <span className="font-bold">Program Eligibility:</span>
                            <span>Sophomore at the time of application.</span>
                        </p>
                        <p className="grid grid-cols-2 gap-4">
                            <span className="font-bold">Program Preparation:</span>
                            <span>
                                1/6 PQP in the term preceding departure, ID 2050 in the term preceding departure.
                            </span>
                        </p>
                    </div>
                    <div className="space-y-6">
                        <p className="grid grid-cols-2 gap-4">
                            <span className="font-bold">WPI Advisors:</span>
                            <span>Alex Sphar, Adrien Stoloff</span>
                        </p>
                        <p className="grid grid-cols-2 gap-4">
                            <span className="font-bold">Mission Opportunities</span>
                            <span>Creative Arts, Innovation and Entrepreneurship, Social and Global Justice, Sustainability</span>
                        </p>
                        <p className="grid grid-cols-2 gap-4">
                            <span className="font-bold">Visa Requirements</span>
                            <span>
                                Visa Not Required for US Citizens - International Students Should Confirm Personal Status.
                            </span>
                        </p>
                    </div>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 mt-24 gap-x-8"}>
                    <div>
                        <h1>Kyoto, the "heart of Japan," offers a unique blend of traditional culture and
                            modern innovation, making it the perfect location for WPI students to engage in
                            impactful projects. Since 2018, students have worked on projects ranging from
                            augmented reality tourism to sustainable farming, urban revitalization, and
                            international education programs. Students will enjoy access to kitchen facilities
                            to explore Japanese cuisine, which traditionally features rice and noodles but now
                            includes diverse options like yakiniku and hamburgers. With Kyoto's efficient
                            public transportation and bike rental options, getting around the city is easy,
                            while some projects may require overnight travel, covered by the program fee.
                            The city’s humid subtropical climate, with September temperatures ranging from 71°F
                            to 85°F and cooler, rainy December weather, adds to the immersive experience.</h1>
                    </div>
                    <div>
                        <Image src={"/river.jpg"} alt={"river"} width={1920} height={1280} className={"rounded-sm hidden lg:block"}/>
                    </div>
                </div>
            </div>


        </div>
    )
}