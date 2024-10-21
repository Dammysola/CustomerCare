import React, { useState } from 'react'
import Style from './Query_com.module.css'
import filter from '../../assets/svg/Complete_filter_img.svg'
import microphone from '../../assets/svg/microphone.svg'
import recording from '../../assets/svg/recording.svg'
import capture from '../../assets/svg/capture.svg'
import search from '../../assets/svg/Search.svg'
import InputField from '../input/InputField'
import { Link } from 'react-router-dom'
// import InputField from '../../../../../components/input/InputField'





const Query_com = (props) => {

    const { arr } = props

    let array = { ...arr }


    let [toggleIndex, setToggleIndex] = useState(0);

    const ticketToggle = (index) => {
        setToggleIndex(index)
    }

    const incomingQueries = array.incomingQueries
    const resolvedQueries = array.resolvedQueries
    const escalatedQueries = array.escalatedQueries

    console.log(incomingQueries.length);
    console.log(resolvedQueries.length);
    return (
        <div id={Style.Message_Queries_wrapperDiv}>

            <div id={Style.Toggle_InputFieldDiv}>

                <div id={Style.ticketButtonDiv}>
                    <button onClick={() => ticketToggle(0)} className={toggleIndex == 0 ? Style.toggle_buttonActive : Style.ticketButton}>Incoming</button>
                    <button onClick={() => ticketToggle(1)} className={toggleIndex == 1 ? Style.toggle_buttonActive : Style.ticketButton}>In-Progress</button>
                    <button onClick={() => ticketToggle(2)} className={toggleIndex == 2 ? Style.toggle_buttonActive : Style.ticketButton}>Escalated</button>
                    <button onClick={() => ticketToggle(3)} className={toggleIndex == 3 ? Style.toggle_buttonActive : Style.ticketButton}>Closed</button>
                </div>

                <div id={Style.InputField_filterDiv}>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"Search ticket no"} />
                    </div>
                    {/* <img id={Style.filter_img} src={filter} alt="" /> */}
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
                            <th>Attachments</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>


                        {

                            // Incoming Queries

                            toggleIndex == 0 ?

                                incomingQueries.length !== 0 && incomingQueries.map((obj, index) => {



                                    return (
                                        <tr id={Style.Personal_Info_tr} key={index}>
                                            <td>{index + 1}</td>
                                            <td>{obj.date}</td>
                                            <td className={Style.tableText}>{obj.ticket_id}</td>
                                            <td className={Style.tableText}>{obj.category}</td>
                                            <td className={Style.tableText}>{obj.username}</td>
                                            <td className={Style.tableText}>{obj.query_type_name}</td>
                                            <td>
                                                <p className={Style.queryText}>{obj.query}</p>

                                            </td>
                                            <td>
                                                <div className={Style.AttachmentDiv}>
                                                    <div>
                                                        <p className={Style.Media_query}><img src={microphone} alt="" />{obj.file}</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />Play Recording</p>
                                                    </div>

                                                    <div>
                                                        <p className={Style.Media_query}><img src={capture} alt="" /> Photo</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />View Photo</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className={Style.statusText} style={{ color: "#FC9E2F", backgroundColor: "#fc9e2f33" }}>
                                                    {obj.status}
                                                </div>
                                            </td>

                                            <td><
                                                Link to={`/QueryReview/${obj.ticket_id}`} >
                                                <button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>
                                                    Review
                                                </button>
                                            </Link>
                                            </td>
                                        </tr>
                                    )
                                }) : ""
                        }


                        {

                            // In-Progress Queries

                            toggleIndex == 1 ?
                                array.filter((p) => p.status === "In-progress").map((obj, index) => {

                                    let color = obj.status == "In-progress" ? true : false

                                    return (
                                        <tr id={Style.Personal_Info_tr} key={index}>
                                            <td>{index + 1}</td>
                                            <td>{obj.date}</td>
                                            <td className={Style.tableText}>{obj.ticket_id}</td>
                                            <td className={Style.tableText}>{obj.category}</td>
                                            <td className={Style.tableText}>{obj.username}</td>
                                            <td className={Style.tableText}>{obj.query_type_name}</td>
                                            <td>
                                                <p className={Style.queryText}>{obj.query}</p>

                                            </td>
                                            <td>
                                                <div className={Style.AttachmentDiv}>
                                                    <div>
                                                        <p className={Style.Media_query}><img src={microphone} alt="" />{obj.file}</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />Play Recording</p>
                                                    </div>

                                                    <div>
                                                        <p className={Style.Media_query}><img src={capture} alt="" /> Photo</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />View Photo</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td><div className={Style.statusText} style={{ color: color ? "#D59B08" : "", backgroundColor: color ? "#d59b0833" : "" }}>{obj.status}</div></td>

                                            <td><
                                                Link to={"/QueryReview"}>
                                                <div id={Style.actionDiv}>
                                                    <button>{obj.action.close}</button>
                                                    <button>{obj.action.reaccess}</button>
                                                </div>
                                            </Link>
                                            </td>
                                        </tr>
                                    )
                                }) : ""
                        }


                        {


                            // Escalated Queries

                            toggleIndex == 2 ?

                                escalatedQueries.length !== 0 &&

                                escalatedQueries.filter((p) => p.status === "Pending").map((obj, index) => {

                                    let color = obj.status == "Pending" ? true : false

                                    return (
                                        <tr id={Style.Personal_Info_tr} key={index}>
                                            <td>{index + 1}</td>
                                            <td>{obj.date}</td>
                                            <td className={Style.tableText}>{obj.ticket_id}</td>
                                            <td className={Style.tableText}>{obj.category}</td>
                                            <td className={Style.tableText}>{obj.username}</td>
                                            <td className={Style.tableText}>{obj.query_type_name}</td>
                                            <td>
                                                <p className={Style.queryText}>{obj.query}</p>

                                            </td>
                                            <td>
                                                <div className={Style.AttachmentDiv}>
                                                    <div>
                                                        <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />Play Recording</p>
                                                    </div>

                                                    <div>
                                                        <p className={Style.Media_query}><img src={capture} alt="" /> Photo</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />View Photo</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td><div className={Style.statusText} style={{ color: color ? "#FC9E2F" : "#31C364", backgroundColor: color ? "#fc9e2f33" : "#31c36433" }}>{obj.status}</div></td>

                                            <td><
                                                Link to={"/QueryReview"}>
                                                <button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>
                                                    {obj.action.reviews}
                                                </button>
                                            </Link>
                                            </td>
                                        </tr>
                                    )
                                }) : ""
                        }


                        {

                            // Closed Queries

                            toggleIndex == 3 ?

                                resolvedQueries.length !== 0 &&

                                resolvedQueries.map((obj, index) => {

                                    let color = obj.status == "Closed" ? true : false

                                    return (
                                        <tr id={Style.Personal_Info_tr} key={index}>
                                            <td>{index + 1}</td>
                                            <td>{obj.date}</td>
                                            <td className={Style.tableText}>{obj.ticket_id}</td>
                                            <td className={Style.tableText}>{obj.category}</td>
                                            <td className={Style.tableText}>{obj.username}</td>
                                            <td className={Style.tableText}>{obj.query_type_name}</td>
                                            <td>
                                                <p className={Style.queryText}>{obj.query}</p>

                                            </td>
                                            <td>
                                                <div className={Style.AttachmentDiv}>
                                                    <div>
                                                        <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />Play Recording</p>
                                                    </div>

                                                    <div>
                                                        <p className={Style.Media_query}><img src={capture} alt="" /> Photo</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />View Photo</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td><div className={Style.statusText} style={{ color: "#565C58", backgroundColor: "#565c5833" }}>{obj.status}</div></td>

                                            <td><
                                                Link to={"/QueryReview"}>
                                                <button style={{ backgroundColor: "transparent", border: "1px solid #0E093C", color: "#0E093C", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>
                                                   Reassess
                                                </button>
                                            </Link>
                                            </td>
                                        </tr>
                                    )
                                }) : ""

                        }

                    </tbody>
                </table>

                { 
                    toggleIndex == 3 &&
                resolvedQueries.length == 0 ?
                    <div className={Style.no_queryDiv}>

                        <p>No Recent Resolved Queries</p>
                    </div> : ""
                }


                {
                    toggleIndex == 0 &&
                    incomingQueries.length == 0 ?
                        <div className={Style.no_queryDiv}>

                            <p>No Recent Incoming Queries</p>
                        </div> : ""
                }

                {
                    toggleIndex == 2 &&
                    escalatedQueries.length == 0 ?
                        <div className={Style.no_queryDiv}>

                        <p>No Recent Escalated Queries</p>
                    </div> : ""}

            </div>
        </div>
    )
}

export default Query_com