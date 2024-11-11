import React, { useEffect, useState } from 'react'
import Style from '../customerCare_Queries/CustomerCare_Queries.module.css'
import Header from '../../components/header/Header'
import users from '../../assets/svg/total_users.svg'
import issues from '../../assets/svg/Issues.svg'
import Total_Card from '../../components/total_Card/Total_Card'
import arrow_down from '../../assets/svg/arrow_down.svg'
import blue from '../../assets/svg/blue.svg'
import black from '../../assets/svg/black.svg'
import gold from '../../assets/svg/gold.svg'
import no_complaint from '../../assets/svg/no_complaint.svg'
import Button from '../../components/button/Button'
import Progress_Bar from '../../components/progress_bar/Progress_Bar'
import { PopupContextHook } from '../../PopupContext'
import { getQueryCountProvider } from '../api_detaills/provider/auth_provider'
import { Link } from 'react-router-dom'




const CustomerCare_Queries = () => {

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook();

    let [toggleIndex, setToggleIndex] = useState(100);


    const [queryCounts, setQueryCount] = useState({

        inAppMessages: 0,
        pending: 0,
        resolved: 0,
        escalated: 0,
        firstThreeIncomingQueries: []
    })



    useEffect(() => {

        updateLoadingPopup(true)

        getQueryCountProvider({

            updateQueryCount: (data) => {

                if (data) {

                    setQueryCount({
                        inAppMessages: data.inAppMessages || 0,
                        pending: data.pending || 0,
                        resolved: data.resolved || 0,
                        escalated: data.escalated || 0,
                        firstThreeIncomingQueries: data.firstThreeIncomingQueries || []
                    });
                    console.log("data", data);


                } else {
                    console.log("err:", data);
                    console.error("Received undefined data from API");
                    // Optionally set some default values or show an error message
                }


            }
        });
        updateLoadingPopup(false);
    }, []);

    console.log(queryCounts)



    const totalMessages = queryCounts.inAppMessages
    const totalPending = queryCounts.pending
    const totalResolved = queryCounts.resolved
    const totalEscalated = queryCounts.escalated
    const incomingQueries = queryCounts.firstThreeIncomingQueries



    const stats_card7 = [
        {
            image1: users,
            price: totalMessages,
            text: "App Message Queries",
            to: "/message_queries",
            divText: "View All"
        },

        {
            image1: users,
            price: "345,000",
            text: "In- App Call Queries",
            to: "/callQueries",
            divText: "View All"
        },
        {
            image1: issues,
            price: "23,000",
            text: "Toll Calls Queries",
            to: "",
            divText: "View All"
        },
    ]

    const ticket_arr = [
        {
            image1: users,
            price: totalPending,
            text: "Incoming Queries",
            to: "/incomingQueries",
            divText: "View All"
        },
        {
            image1: issues,
            price: totalResolved,
            text: "Resolved Queries",
            to: "/resolvedQueries",
            divText: "View All"
        },
        {
            image1: issues,
            price: totalEscalated,
            text: "Escalated Queries",
            to: "/escalatedQueries",
            divText: "View All"
        },
    ]


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
        <div id={Style.Queries_mainDiv}>

            <Header
                headerText={"Queries"}
                headerInfo={"let's get rolling"} />

            <div id={Style.Queries_wrapperDiv}>

                <p id={Style.Queries_headerText}>Queries</p>

                <div id={Style.Queries_mapDiv}>
                    {
                        stats_card7.map((obj, index) => {

                            return (
                                <Total_Card
                                    Key={index}
                                    image1={obj.image1}
                                    price={obj.price}
                                    text={obj.text}
                                    to={obj.to}
                                    divText={obj.divText}
                                />

                            )
                        })
                    }
                </div>

                <div id={Style.ticket_mapDiv}>

                    {
                        ticket_arr.map((obj, index) => {

                            return (
                                <Total_Card
                                    Key={index}
                                    image1={obj.image1}
                                    price={obj.price}
                                    text={obj.text}
                                    to={obj.to}
                                    divText={obj.divText}
                                />

                            )
                        })
                    }
                </div>


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



                <div id={Style.Dashboard_Ticket_PerformanceDiv}>

                    <div id={Style.Ticket_entireDiv}>

                        <div id={Style.AssignedTicket_textDiv}>

                            <p>Incoming Queries</p>

                            <Link to={"/incomingQueries"}><p> View All </p></Link>
                        </div>

                        <div id={Style.Dashboard_TicketWrapperDiv}>

                            {/* <div id={Style.Ticket_HeaderDiv}> */}

                            <div id={Style.ticketButtonDiv}>

                                <button onClick={() => ticketToggle(0)} className={toggleIndex == 0 ? Style.toggle_buttonActive : Style.ticketButton}>All</button>
                            </div>


                            <div id={Style.ticketTable_wrapperDiv}>
                                <table className={Style.dashboardTable}>
                                    <tr id={Style.headerTable}>
                                        <th>User</th>
                                        <th>Ticket No</th>
                                        <th>QueryType</th>
                                        <th>Action</th>
                                    </tr>

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
                                                        <td>
                                                            <Link to={`/QueryReview/${obj.ticket_id}`}>
                                                                 <Button text={"Accept"} />
                                                            </Link>
                                                        </td>


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

                                <Link to={"/performance"}>
                                    <button>See All</button>
                                </Link>
                                
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

export default CustomerCare_Queries