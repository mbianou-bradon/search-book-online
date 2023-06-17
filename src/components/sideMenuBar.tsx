

export default function sideMenuBar(){

    return (
        <div className="sidebar_container">

            <div>
                <div className="content__filtering">
                    <h2>Look for your perfect book</h2>
                </div>
                <div>
                    <ul className="list__of__different__content">
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

                <div className="report">
                    <p>If you want to ask any question or <span>report</span> about a missing book, press the button below</p>
                    <div>
                        <button>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}