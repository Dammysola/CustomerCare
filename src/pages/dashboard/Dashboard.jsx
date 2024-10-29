import React, { useEffect, useState } from 'react'
import Style from './Dashboard.module.css'
import Header from "../../components/header/Header"
import Progress_Bar from '../../components/progress_bar/Progress_Bar'
import InputField from '../../components/input/InputField'
import search from '../../assets/svg/Search.svg'
import blue from '../../assets/svg/blue.svg'
import black from '../../assets/svg/black.svg'
import gold from '../../assets/svg/gold.svg'
import arrow_down from '../../assets/svg/arrow_down-dark.svg'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../PopupContext'
import { getQueryCountProvider } from '../api_detaills/provider/auth_provider'
import no_complaint from '../../assets/svg/no_complaint.svg'

const Dashboard = () => {

    let [toggleIndex, setToggleIndex] = useState(0);

    const ticketToggle = (index) => {
        setToggleIndex(index)
    }


    const { updateLoadingPopup } = PopupContextHook();



    const [queryCounts, setQueryCount] = useState({

        firstThreeIncomingQueries: []
    })



    useEffect(() => {

        updateLoadingPopup(true)

        getQueryCountProvider({
            updateQueryCount: (data) => {

                setQueryCount({

                    firstThreeIncomingQueries: data.firstThreeIncomingQueries || []
                });
                console.log("data", data);

            }
        });
        updateLoadingPopup(false);
    }, []);

    console.log(queryCounts)

    const incomingQueries = queryCounts.firstThreeIncomingQueries


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
        <div id={Style.CustomerCare_Dashboard_mainDiv}>

            <Header
                headerText={"Welcome John"}
                headerInfo={"Here’s an information on all Users"}
                back1={false} />

            <div id={Style.CustomerCare_Dashboard_wrapperDiv}>

                <div id={Style.Dashboard_CardDiv}>

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

                <div id={Style.Dashboard_Ticket_PerformanceDiv}>

                    <div id={Style.Ticket_entireDiv}>

                        <div id={Style.AssignedTicket_textDiv}>
                            <p>Incoming Queries</p>
                            <Link to={"/incomingQueries"}><p>View All</p></Link>
                        </div>

                        <div id={Style.Dashboard_TicketWrapperDiv}>


                            <div id={Style.ticketButtonDiv}>

                                <button id={ Style.toggle_button}>All</button>
                            </div>


                            <div id={Style.ticketTable_wrapperDiv}>

                                <table className={Style.dashboardTable}>

                                    <thead>

                                        <tr id={Style.headerTable}>
                                            <th>User</th>
                                            <th>Ticket No</th>
                                            <th>QueryType</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {
                                            incomingQueries !== 0 &&

                                            incomingQueries.map((obj, index) => {


                                                let verify = obj.subscription_type == "blue" ? blue
                                                    : obj.subscription_type == "gold" ? gold
                                                        : obj.subscription_type == "black" ? black : ""


                                                return (

                                                    <tr key={index}>

                                                        <td>
                                                            <div style={{ display: "flex", columnGap: "0.5rem", alignItems: "center" }}>

                                                                <div>
                                                                    <img id={Style.user_img} src={obj.profile_picture} alt="" />

                                                                    {verify && <img id={Style.verified_img} src={verify} alt="" />
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <p className={Style.Ticket_tableData}>{obj.username} </p>
                                                                    <p id={Style.disputeText}>{obj.category}</p>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className={Style.Ticket_tableData}>{obj.ticket_id}</td>
                                                        <td className={Style.Ticket_tableData}>{obj.query_type_name}</td>
                                                        <td><Button text={"Accept"} /></td>

                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>

                                {

                                    incomingQueries.length == 0 ?
                                        <div className={Style.no_queryDiv}>
                                            <img src={no_complaint} alt="" />

                                            <p>No Incoming Queries</p>
                                        </div> : ""
                                }

                            </div>
                        </div>
                    </div>

                    <div id={Style.performanceDiv}>

                        <div id={Style.Daily_Call_headerDiv}>
                            <p>Performance</p>

                            <div id={Style.dateDiv}>

                                <p id={Style.dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                               
                                <Link to={"/performance"}><button>See All</button></Link>
                           
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
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
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
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
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
                </div>
            </div>
        </div>
    )
}

export default Dashboard