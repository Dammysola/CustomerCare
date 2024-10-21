import React, { useEffect, useState } from 'react'
// import Style from '../queries_categories/Message_Queries.module.css'
import Style from './General_Queries.module.css'
import Header from '../../../components/header/Header'
import InputField from '../../../components/input/InputField'
import search from '../../../assets/svg/Search.svg'
import filter from '../../../assets/svg/Complete_filter_img.svg'
import { Link } from 'react-router-dom'
import { getQueryCountProvider } from '../../api_detaills/provider/auth_provider'
import { PopupContextHook } from '../../../PopupContext'



const Escalated_Queries = () => {

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook();


    const [escalated, setEscalated] = useState({

        escalatedQueries: []
    })



    useEffect(() => {

        updateLoadingPopup(true)
        getQueryCountProvider({

            updateQueryCount: (data) => {

                if (data) {

                    setEscalated({
                        escalatedQueries: data.escalatedQueries || []
                    });
                    console.log("data", data);


                } else {

                    console.log("err:", data);
                    // console.error("Received undefined data from API");
                    // Optionally set some default values or show an error message
                }


                // }
            }
        });
        updateLoadingPopup(false);
    }, []);

    console.log(escalated);

    const escalatedQueries_arr = escalated.escalatedQueries



    return (
        <div id={Style.Queries_mainDiv}>

            <Header
                headerText={"In-app Message Queries"}
                headerInfo={"let's get rolling"} />

            <div id={Style.Queries_wrapperDiv}>

                <div id={Style.Toggle_InputFieldDiv}>

                    <p id={Style.HeaderText}>Escalated Queries</p>

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
                                escalatedQueries_arr.filter((p) => p.status === "Pending").map((obj, index) => {

                                    let color = obj.status == "Pending" ? true : false

                                    return (
                                        <tr id={Style.Personal_Info_tr}>
                                            <td>{index + 1}</td>
                                            <td>{obj.date}</td>
                                            <td className={Style.tableText}>{obj.ticket_id}</td>
                                            <td className={Style.tableText}>{obj.category}</td>
                                            <td className={Style.tableText}>{obj.username}</td>
                                            <td className={Style.tableText}>{obj.query_type_name}</td>
                                            <td>
                                                <p className={Style.queryText}>{obj.query}</p>

                                            </td>
                                            <td className={Style.tableText}>{obj.agents}</td>

                                            <td>
                                                <div className={Style.statusText} style={{ color: color ? "#FC9E2F" : "#31C364", backgroundColor: color ? "#fc9e2f33" : "#31c36433" }}>
                                                    {obj.status}
                                                </div>
                                            </td>

                                            <td><
                                                Link to={"/QueryReview"}>
                                                <button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>
                                                    review
                                                </button>
                                            </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>

                    {

                        escalatedQueries_arr.length == 0 ?

                            <div className={Style.no_queryDiv}>

                                <p>No Recent Escalated Queries</p>
                            </div> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Escalated_Queries