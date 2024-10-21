import React from 'react'
// import Style from './General_Queries.module.css'
import Style from './General_Queries.module.css'
import Header from '../../../components/header/Header'
import InputField from '../../../components/input/InputField'
import search from '../../../assets/svg/Search.svg'
import filter from '../../../assets/svg/Complete_filter_img.svg'
import { Link } from 'react-router-dom'



const Resolved_Queries = () => {

    const message_arr = [

        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "In-progress",
            agents: "John Doe",
            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "View Details"
            }
        },

        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "In-progress",
            agents: "John Doe",
            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "View Details"
            }
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "In-progress",

            agents: "John Doe",

            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "View Details"
            }
        },

        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "In-progress",
            agents: "John Doe",

            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "View Details"
            }
        },

        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "In-progress",
            agents: "John Doe",
            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "View Details"
            }
        },

    ]


    return (

        <div id={Style.Queries_mainDiv}>

            <Header
                headerText={"In-app Message Queries"}
                headerInfo={"let's get rolling"} />

            <div id={Style.Queries_wrapperDiv}>

                <div id={Style.Toggle_InputFieldDiv}>

                    <p id={Style.HeaderText}>Resolved Queries</p>

                    <div id={Style.InputField_filterDiv}>
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"Search ticket no"} />
                        </div>
                        <img id={Style.filter_img} src={filter} alt="" />
                    </div>
                </div>

                <div id={Style.Queries_tableWrapperDiv}>
                    <table>
                        <thead>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>Date</th>
                                <th>TicketID</th>
                                <th>Category</th>
                                <th>Username</th>
                                <th>QueryType</th>
                                <th>Query</th>
                                <th>Agents</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                message_arr.filter((p) => p.status === "In-progress").map((obj, index) => {

                                    let color = obj.status == "In-progress" ? true : false

                                    return (
                                        <tr id={Style.Personal_Info_tr}>
                                            <td>{index + 1}</td>
                                            <td>{obj.date}</td>
                                            <td className={Style.tableText}>{obj.ticketID}</td>
                                            <td className={Style.tableText}>{obj.category}</td>
                                            <td className={Style.tableText}>{obj.username}</td>
                                            <td className={Style.tableText}>{obj.queryType}</td>
                                            <td>
                                                <p className={Style.queryText}>{obj.query}</p>

                                            </td>
                                            <td className={Style.tableText}>{obj.agents}</td>

                                            <td><div className={Style.statusText} style={{ color: color ? "#D59B08" : "", backgroundColor: color ? "#d59b0833" : "" }}>{obj.status}</div></td>

                                            <td>
                                                <Link to={"/QueryReview"}>
                                                <button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>
                                                    {obj.action.reviews}
                                                </button>
                                            </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Resolved_Queries