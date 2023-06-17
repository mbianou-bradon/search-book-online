import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Home(){

    return (
        <div >
            <div className="flex flex-col h-screen">
                <div className="bg-rose-900 mb-auto">
                    <Navbar/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}