

export default function Navbar() {

    return (
        <nav>
            <div className="h-[12vh] flex items-center justify-between">
                <div className="nav_brand text-2xl font-bold text-white">
                    <h2>Search <span className="text-red-500">Book</span></h2>
                </div>

                <div className="nav_search_bar flex gap-1 bg-white text-sm w-[24rem] h-10 rounded">
                    <div className="w-[15%] px-2 py-1 bg-blue-400 rounded-l">

                    </div>

                    <input type="text" name="searchBar" id="searchBar" placeholder="Search for book, textbook, document..." className="placeholder:text-xs w-[85%] h-[80%] caret-teal-600 border-0 focus:outline-none focus:ring-0 italic my-auto px-2"/>
                </div>

                <div className="sub_nav">
                    <ul className="flex gap-5 text-white [&>*]:text-sm [&>*:hover]:underline [&>*]:w-fit [&>*]:">
                        <li><a href="">How it work?</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}