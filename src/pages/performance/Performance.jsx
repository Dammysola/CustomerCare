import React from 'react'
import Style from '../performance/Performance.module.css'
import Header from '../../components/header/Header'
import Progress_Bar from '../../components/progress_bar/Progress_Bar'
import arrow_down from '../../assets/svg/arrow_down.svg'
import amazing from '../../assets/svg/amazing.svg'
import good from '../../assets/svg/good.svg'
import sad from '../../assets/svg/sad.svg'
import neutral from '../../assets/svg/neutral.svg'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../PopupContext'



const Performance = () => {

    const {updateFilterPopup} = PopupContextHook()

    const trey = ()=>{
        updateFilterPopup(true)
    }

    const progressDiv = [

        {
            text: "Average First Contact Resolution Rate",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Customer Satisfaction Rate",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Resolution Time",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Response Time",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        }
    ]
    return (
        <div id={Style.Performance_mainDiv}>
            <Header
                headerText={"Performance"}
                headerInfo={"Let's get rolling"} />

            <div id={Style.Performance_wrapperDiv}>
                <p id={Style.review_historyText}>See Review History</p>
                <div id={Style.Performance_CardDiv}>
                    {
                        progressDiv.map((obj) => {
                            return (
                                <Progress_Bar
                                    text={obj.text}
                                    infoText={obj.infoText}
                                    percent={obj.percent} />
                            )
                        })
                    }
                </div>

                <div id={Style.Performance_SatisfactionDiv}>
                    <div id={Style.performanceDiv}>

                        <div id={Style.Daily_Call_headerDiv}>
                            <p>Performance</p>

                            <div id={Style.dateDiv}>
                                <p id={Style.dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                                <button>See All</button>
                            </div>
                        </div>

                        <div id={Style.Staff_details_Daily_CallDiv}>
                            <table>

                                <tr>
                                    <td>Days</td>
                                    <td className={Style.Daily_CallText}>Calls</td>
                                    <td className={Style.Daily_CallText}>Mails</td>
                                    <td className={Style.Daily_CallText}>Msg</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Monday</td>
                                    <td className={Style.Daily_CallText}>46</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td> 
                                        {/* <Link> */}
                                    <button onClick={trey} style={{ backgroundColor: "transparent", cursor: "pointer", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button>
                                    {/* </Link> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td className={Style.Daily_CallText}>22</td>
                                    <td className={Style.Daily_CallText}>13</td>
                                    <td className={Style.Daily_CallText}>13</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td className={Style.Daily_CallText}>45</td>
                                    <td className={Style.Daily_CallText}>8</td>
                                    <td className={Style.Daily_CallText}>8</td>
                                    <td> <Link to={"/performanceDetails"}><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td className={Style.Daily_CallText}>34</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td className={Style.Daily_CallText}>77</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td className={Style.Daily_CallText}>89</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td className={Style.Daily_CallText}>33</td>
                                    <td className={Style.Daily_CallText}>13</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td className={Style.Daily_CallText}>21</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td className={Style.Daily_CallText}>44</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                            </table>
                        </div>
                    </div>


                    {/* <div className={Style.Ticket_entireDiv}> */}

                        <div id={Style.CustomerCare_Progress_Wrapper}>

                            <div id={Style.CustomerCare_textDiv}>
                                <p>Average Customer Satisfaction Score</p>
                                <div id={Style.monthDiv}>Month <img src={arrow_down} alt="" /></div>
                            </div>
                            <div>
                                <div className={Style.Staff_progress}>
                                    <div id={Style.Staff_details}>
                                        <div id={Style.imgDiv}>
                                            <img src={amazing} alt="" />
                                            <p>Amazing</p></div>
                                        <p>76.5%</p>
                                    </div>
                                    <div id={Style.progressDiv}></div>
                                </div>
                                <div className={Style.Staff_progress}>
                                    <div id={Style.Staff_details}>
                                        <div id={Style.imgDiv}>
                                            <img src={good} alt="" />
                                            <p>Good</p></div>
                                        <p>76.5%</p>
                                    </div>
                                    <div id={Style.progressDiv}></div>
                                </div>
                                <div className={Style.Staff_progress}>
                                    <div id={Style.Staff_details}>
                                        <div id={Style.imgDiv}>
                                            <img src={neutral} alt="" />
                                            <p>Neutral</p>
                                        </div>
                                        <p>76.5%</p>
                                    </div>
                                    <div id={Style.progressDiv}></div>
                                </div>

                                <div className={Style.Staff_progress}>
                                    <div id={Style.Staff_details}>
                                        <div id={Style.imgDiv}>
                                            <img src={sad} alt="" />
                                            <p>Bad</p>
                                        </div>
                                        <p>76.5%</p>
                                    </div>
                                    <div id={Style.progressDiv}></div>
                                </div>
                            </div>

                        </div>

                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Performance