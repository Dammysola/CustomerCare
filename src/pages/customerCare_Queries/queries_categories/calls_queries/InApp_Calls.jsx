import React, { useState } from 'react'
import Style from './InApp_Calls.module.css'
import Header from '../../../../components/header/Header'
import search from '../../../../assets/svg/Search.svg'
import filter from '../../../../assets/svg/Complete_filter_img.svg'
import microphone from '../../../../assets/svg/microphone.svg'
import recording from '../../../../assets/svg/recording.svg'
import InputField from '../../../../components/input/InputField'
import Button from '../../../../components/button/Button'




const InApp_Calls = () => {

    let [toggleIndex, setToggleIndex] = useState(0);

    const ticketToggle = (index) => {
        setToggleIndex(index)
    }



    const arr = [
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            username: "Lighty",
            queryType: "In-app Calls",
            status: "Waiting",
            records: {
                img1: microphone,
                img2: recording,
                text1: "4:23",
                text2: "Play Recording",
            },
            action: "Accept"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            username: "Lighty",
            queryType: "In-app Calls",
            status: "Waiting",
            action: "Accept"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            username: "Lighty",
            queryType: "In-app Calls",
            status: "Waiting",
            action: "Accept"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            username: "Lighty",
            queryType: "In-app Calls",
            status: "Waiting",
            action: "Accept"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            username: "Lighty",
            queryType: "In-app Calls",
            status: "Waiting",
            action: "Accept"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            username: "Lighty",
            queryType: "In-app Calls",
            status: "Waiting",
            action: "Accept"
        },


    ]

    return (
        <div id={Style.InApp_Calls_mainDiv}>

            <Header
                headerText={"In-app Calls Queries"}
                headerInfo={"let's get rolling"} />

            <div id={Style.InApp_Calls_wrapperDiv}>
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
                        <img id={Style.filter_img} src={filter} alt="" />
                    </div>
                </div>


                <div id={Style.Dashboard_TicketWrapperDiv}>
                    <table>
                        {toggleIndex == 0 ?

                            <>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Date</th>
                                    <th>Ticket ID</th>
                                    <th>Username</th>
                                    <th>Query Type</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>

                                <tbody>
                                    {
                                        arr.map((obj, index) => {
                                            let color = obj.status == "Waiting" ? true : false

                                            return (
                                                <tr id={Style.Personal_Info_tr}>
                                                    <td>{index + 1}</td>
                                                    <td>{obj.date}</td>
                                                    <td className={Style.tableText}>{obj.ticketID}</td>
                                                    <td className={Style.tableText}>{obj.username}</td>
                                                    <td className={Style.tableText}>{obj.queryType}</td>
                                                    <td>
                                                        <div className={Style.statusText} style={{ color: color ? "#FC9E2F" : "#31C364", backgroundColor: color ? "#fc9e2f33" : "#31c36433" }}>{obj.status}</div>
                                                    </td>

                                                    <td><Button text={obj.action} /></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </> : ""
                        }

                        {
                            toggleIndex == 1 ?

                                <>
                                    <tr id={Style.headerTable}>
                                        <th>S/N</th>
                                        <th>Date</th>
                                        <th>Ticket ID</th>
                                        <th>Username</th>
                                        <th>Query Type</th>
                                        <th>Status</th>
                                        {/* <th>Call Recording</th> */}
                                        <th>Action</th>
                                    </tr>

                                    <tbody>
                                        {
                                            arr.map((obj, index) => {
                                                let color = obj.status == "Waiting" ? true : false

                                                return (
                                                    <tr id={Style.Personal_Info_tr}>
                                                        <td>{index + 1}</td>
                                                        <td>{obj.date}</td>
                                                        <td className={Style.tableText}>{obj.ticketID}</td>
                                                        <td className={Style.tableText}>{obj.username}</td>
                                                        <td className={Style.tableText}>{obj.queryType}</td>
                                                        <td>
                                                            <div className={Style.statusText} style={{ color: color ? "#FC9E2F" : "#31C364", backgroundColor: color ? "#fc9e2f33" : "#31c36433" }}>{obj.status}</div>
                                                        </td>
                                                        {/* <td>
                                                            <div className={Style.AttachmentDiv}>
                                                                <p className={Style.Media_query}><img src={obj.records.img1} alt="" /> {obj.records.text1}</p>
                                                                <p className={Style.Media_query_two}><img src={obj.records.img2} alt="" />{obj.records.text2}</p>
                                                            </div>
                                                        </td> */}
                                                        <td><Button text={obj.action} /></td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>

                                </> : ""
                        }
                    </table>
                </div>
            </div>


        </div>
    )
}

export default InApp_Calls