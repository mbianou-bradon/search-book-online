import { ImSearch } from "react-icons/im"

export default function Navbar() {

    return (
        <nav>
            <div className="flex justify-between items-center px-[4rem] py-[1rem] border-b border-b-slate-900 fixed top-0 left-0 w-full">
                <div className="nav_brand text-2xl font-bold text-primary_dark">
                    <h2>Search<span className="text-red-500">Book</span></h2>
                </div>

                <div className="search_bar_container flex items-center w-[25rem] bg-white px-[1rem] border border-slate-500 rounded-lg ">
                    <input type="text" name="search" id="search" placeholder="Search for books, manuals and authors. . ." className="h-[3rem] px-[1rem] border-0 w-full focus:outline-none focus:ring-0 text-sm caret-primary"/>
                    {/* Search Icon */}
                    <div className="icon_style search_icon text-primary">
                        <ImSearch />
                    </div>
                </div>
  
                <div className="sub_nav">
                    <ul className="flex gap-5 text-slate-900 [&>*]:text-sm [&>*:hover]:underline [&>*]:w-fit [&>*]:">
                        <li><a href="">How it work?</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}