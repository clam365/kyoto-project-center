export default function team() {
    return (
        <div>
            <hr/>
            <div className={"my-4 grid grid-cols-2 lg:grid-cols-4 gap-y-4"}>
                <div>
                    <h1 className={"font-semibold"}>Team Members</h1>
                    <p className={"text-sm"}>Christopher Lam</p>
                    <p className={"text-sm"}>Szymon Mamro</p>
                    <p className={"text-sm"}>Jason Zhang</p>
                    <p className={"text-sm"}>Arjun Bhat</p>
                </div>
                <div>
                    <h1 className={"font-semibold"}>Advisors</h1>
                    <p className={"text-sm"}>Benoît Jacquet, Ph.D.</p>
                    <p className={"text-sm"}>Professor Adrien Stoloff, Ph.D.</p>
                    <p className={"text-sm"}>Professor Alex Sphar, Ph.D.</p>
                </div>
                <div>
                    <h1 className={"font-semibold"}>Term</h1>
                    <p className={"text-sm"}>B2024</p>
                </div>
                <div >
                    <h1 className={"font-semibold"}>Type</h1>
                    <p className={"text-sm"}>Interactive Qualifying Project</p>
                </div>
            </div>
            <hr/>
            <br/>
        </div>
    )
}