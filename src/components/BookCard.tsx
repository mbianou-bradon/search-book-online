


export default function BookCard(){

    return(
        <div className="book_card_container">
            <div className="book_card__subcontainer">
                {/* Book Cover Page */}
                <div className="book_card_cover_image">
                    <div></div>
                </div>
                {/* Book details */}
                <div className="book_details_container">
                    <h2 className="book__title">Think and Grow Rich</h2>
                    <div className="book__author__year__styles">
                        <p className="book__author">Author: Napoleon Hills</p>
                        <p className="book__year">Year: 1995</p>
                    </div>
                </div>
            </div>
        </div>
    )
}