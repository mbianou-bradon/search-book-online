import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideMenuBar from "../components/SideMenuBar";


export default function Home(){

    return (
        <div >
            <div className="flex flex-col h-screen">
                <div >
                    <Navbar/>
                </div>
                <main className="mb-auto mt-[5rem] flex">
                    <SideMenuBar/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}