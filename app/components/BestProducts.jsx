

export default function BestProductds(){
    return(
        <div className="w-[90%] mx-auto my-10 space-y-5">
            <div className="flex items-center  gap-4">
                <div className="w-7 h-15 rounded bg-red-500"></div>
                <h1 className="text-red-500 text-2xl font-semibold">This Month</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5">
                <p className="font-semibold text-2xl~ md:text-3xl">Best Selling Products</p>
                <div>
                    <button className="bg-red-500 text-white w-40 h-12">View All</button>
                </div>
            </div>

        </div>
    )
}