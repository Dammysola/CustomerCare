import React, { useEffect, useState } from 'react'
import Style from '../incoming_queries/Incoming_Queries.module.css'
import search from '../../../assets/svg/Search.svg'
import microphone from '../../../assets/svg/microphone.svg'
import capture from '../../../assets/svg/capture.svg'
import recording from '../../../assets/svg/recording.svg'
import filter from '../../../assets/svg/Complete_filter_img.svg'
import InputField from '../../../components/input/InputField'
import Header from '../../../components/header/Header'
import { Link } from 'react-router-dom'
import avatar from '../../../assets/images/avatar.png'
import Button from '../../../components/button/Button'
import blue from '../../../assets/svg/blue.svg'
import gold from '../../../assets/svg/gold.svg'
import black from '../../../assets/svg/black.svg'
import { getQueryCountProvider } from '../../api_detaills/provider/auth_provider'
import { PopupContextHook } from '../../../PopupContext'




const Incoming_Queries = () => {

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook();


    const [incomingQueriesState, setIncomingQueries] = useState({

        incomingQueries: []
    })



    useEffect(() => {

        updateLoadingPopup(true)
        getQueryCountProvider({

            updateQueryCount: (data) => {

                if (data) {

                    setIncomingQueries({

                        incomingQueries: data.incomingQueries || []
                    });
                    console.log("data", data);


                    // } else {
                    //     console.log("err:", data);
                    //     console.error("Received undefined data from API");
                    //     // Optionally set some default values or show an error message
                    // }


                }
            }
        });
        updateLoadingPopup(false);
    }, []);

    console.log(incomingQueriesState);

    const incomingQueries_arr = incomingQueriesState.incomingQueries



    return (
        <div id={Style.Incoming_Queries_mainDiv}>
            <Header
                headerText={"Incoming Queries"}
                headerInfo={"let's get rolling"} />

            <div id={Style.Incoming_Queries_wrapperDiv}>

                <div id={Style.Query_incomingTextDiv}>
                    <p>Incoming</p>

                    <div id={Style.search_filterDiv}>
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"Search ticket no"} />
                        </div>
                        <img id={Style.filterImg} src={filter} alt="" />
                    </div>
                </div>

                <div id={Style.Incoming_Queries_tableWrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Date</th>
                            <th>TicketID</th>
                            <th>Category</th>
                            <th>Username</th>
                            <th>QueryType</th>
                            <th>Query</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                            {
                                incomingQueries_arr.length > 0 &&
                                
                                incomingQueries_arr.map((obj, index) => {

                                    return (
                                        <tr id={Style.Personal_Info_tr} key={index}>

                                            <td>{index + 1}</td>
                                            <td>{obj.date}</td>
                                            <td className={Style.tableText}>{obj.ticket_id}</td>
                                            <td className={Style.tableText}>{obj.category}</td>
                                            <td >
                                                <div id={Style.usernameText}>
                                                    <img src={obj.profile_picture} alt="" />
                                                    {obj.username}
                                                </div>
                                            </td>
                                            <td className={Style.tableText}>{obj.query_type_name}</td>
                                            <td>

                                                <p className={Style.ReportText}>{obj.query}</p>

                                            </td>
                                            <td><div id={Style.statusText}>{obj.status}</div></td>
                                            <td><
                                                Link to={"/QueryReview"}>
                                                <button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>
                                                    Review
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

export default Incoming_Queries