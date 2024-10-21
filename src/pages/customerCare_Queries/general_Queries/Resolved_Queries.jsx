import React, { useEffect, useState } from 'react'
import Style from './General_Queries.module.css'
import Header from '../../../components/header/Header'
import InputField from '../../../components/input/InputField'
import search from '../../../assets/svg/Search.svg'
import filter from '../../../assets/svg/Complete_filter_img.svg'
import { Link } from 'react-router-dom'
import { getQueryCountProvider } from '../../api_detaills/provider/auth_provider'
import { PopupContextHook } from '../../../PopupContext'
import App_Pagination from "../../../components/app_Pagination/App_Pagination"



const Resolved_Queries = () => {

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook();

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    const [resolved, setResolved] = useState({

        resolvedQueries: []
    })

    useEffect(() => {

        updateLoadingPopup(true)

        getQueryCountProvider({

            updateQueryCount: (data) => {

                if (data) {

                    setResolved({
                        resolvedQueries: data.resolvedQueries || []
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


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = resolved.resolvedQueries.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // const resolvedQueries_arr = resolved.resolvedQueries



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
                                currentPosts.length > 0 &&

                                currentPosts.map((obj, index) => {

                                    let color = obj.status == "Closed" ? true : false

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
                                            <td>
                                                <p>{obj.agents}</p>
                                            </td>

                                            <td><div className={Style.statusText} style={{ color: "#31C364", backgroundColor: "#31c36433"}}>{obj.status}</div></td>

                                            <td><
                                                Link to={"/QueryReview"}>
                                                <button style={{ backgroundColor: "transparent", border: "1px solid #0E093C", color: "#0E093C", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>
                                                    {"Reassess"}
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

                        currentPosts.length == 0 ?

                            <div className={Style.no_queryDiv}>

                                <p>No Recent Resolved Queries</p>
                            </div> : ""
                    }
                </div>

                <App_Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={resolved.resolvedQueries.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
}

export default Resolved_Queries