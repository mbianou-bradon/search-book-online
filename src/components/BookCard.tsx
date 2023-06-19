


export default function BookCard(){

    return(
        <div className="book_card_container h-[7rem] mb-[1.3rem] border border-slate-300 rounded transition-all duration-300 hover:shadow-[0rem_0rem_0.6rem_rgba(0,123,255,1)] ">
            <div className="book_card__subcontainer flex w-full h-full gap-5">
                
                {/* Book details */}
                <div className="book_details_container h-full w-[85%] py-[0.7rem] pl-4">
                    <h2 className="book__title text-lg text-primary mb-1 cursor-pointer">Think and Grow Rich</h2>
                    
                    <div className="book__author__year__styles text-sm">
                        <p className="book__author mb-2">Author: Napoleon Hills</p>
                        <div className="flex gap-2 text-primary/80 text-xs">
                            <p className="book__page">349 Pages</p> -
                            <p className="book__year">1995</p> -
                            <p className="book__size">2.74 MB</p>
                        </div>
                        
                    </div>
                </div>

                {/* Book Cover Page */}
                <div className="book_card_cover_image h-full w-[15%] bg-primary">
                    <div></div>
                </div>
            </div>
        </div>
    )
}