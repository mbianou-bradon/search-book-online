import {BookCard, Navbar, SideMenuBar, Footer} from "../../components";

export default function Home(){

    return (
        <div >
            <div className="flex flex-col h-screen">
                <div >
                    <Navbar/>
                </div>
                <main className="mb-auto mt-[6rem] flex">
                    <div className="w-[75%] px-[4rem]">
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                    </div>
                    <SideMenuBar/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}