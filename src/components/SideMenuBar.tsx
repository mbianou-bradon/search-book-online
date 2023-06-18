

export default function SideMenuBar(){

    return (
        <aside className="sidebar_container w-[35%] p-[3rem]">

            <div>
                <div className="content__filtering text-[0.8rem] mb-[2rem] text-center">
                    <h2>Look for your perfect book</h2>
                </div>
                <div>
                    <ul className="list__of__different__content w-full h-full grid grid-cols-2 gap-4 justify-between flex-wrap [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:text-[0.8rem] [&>*:hover]:cursor-pointer [&>*:hover]:underline [&>*>div]:w-[2rem] [&>*>div]:h-[2rem] [&>*>div]:bg-primary [&>*>div]:rounded-full">
                        <li>
                            <div className="filter_subject_icon"></div>
                            Biology</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Chemistry</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Mathematics</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Physics</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Technology</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Accounting</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Economics</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Marketing</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Finance</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Environment</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Science and Research</li>
                        <li>
                            <div className="filter_subject_icon"></div>
                            Personal Growth</li>
                    </ul>
                </div>

                <div className="report text-[0.7rem] text-slate-900 my-[2rem]">
                    <p>If you want to ask any question or <span className="text-primary">request</span> for a particular book, press the button below</p>
                    <div>
                        <button className="my-[1.5rem] bg-primary_dark w-full py-[0.7rem] cursor-pointer transition-all duration-200 ease-linear hover:bg-slate-900 text-white rounded-lg">Contact</button>
                    </div>
                </div>
            </div>
        </aside>
    )
}