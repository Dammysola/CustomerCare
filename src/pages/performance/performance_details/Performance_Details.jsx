import React from 'react'
import Style from './Performance_Details.module.css'
import person from '../../../assets/images/person_img.png'
import microphone from '../../../assets/svg/microphone.svg'
import recording from '../../../assets/svg/recording.svg'
import Button from '../../../components/button/Button'
import { PopupContextHook } from '../../../PopupContext'


const Performance_Details = () => {

    const {updateFilterPopup, updatePerformancePopup} = PopupContextHook()


    const query =()=>{
        updatePerformancePopup(true)
    }


    const arr = [

        {
            user: {
                img: person,
                name: "John Doe"
            },
            UserID: "UA 123476689",
            TicketID: "8012345678",
            QueryCat: "User Dispute",
            recording: {
                img: microphone,
                img2: recording,
                time: "4:33",
                time2: "Play Recording"
            },
            status: "Resolved",
            query: "Lorem ipsum dolor sitc  tetur. Odio oare id enm vupte.....",
            action: "Re-access"
        },

        {
            user: {
                img: person,
                name: "John Doe"
            },
            UserID: "UA 123476689",
            TicketID: "8012345678",
            QueryCat: "User Dispute",
            recording: {
                img: microphone,
                img2: recording,
                time: "4:33",
                time2: "Play Recording"
            },
            status: "Resolved",
            query: "Lorem ipsum dolor sitc  tetur. Odio oare id enm vupte.....",
            action: "Re-access"
        },

        {
            user: {
                img: person,
                name: "John Doe"
            },
            UserID: "UA 123476689",
            TicketID: "8012345678",
            QueryCat: "User Dispute",
            recording: {
                img: microphone,
                img2: recording,
                time: "4:33",
                time2: "Play Recording"
            },
            status: "Resolved",
            query: "Lorem ipsum dolor sitc  tetur. Odio oare id enm vupte.....",
            action: "Re-access"
        },


    ]
    return (
        <div id={Style.Performance_Details_mainDiv}>
            <div id={Style.transparentDiv} onClick={()=>updateFilterPopup(false)}></div>
            <div id={Style.Performance_Details_wrapperDiv}>

                <p id={Style.Performance_Details_headerText}>Mon 26th October, 2024</p>

                <div id={Style.contacts_wrapperDiv}>
                    <div className={Style.contactDiv}>
                        <p className={Style.contact_Text}>Calls</p>
                        <p>46</p>
                    </div>
                    <div className={Style.contactDiv}>
                        <p className={Style.contact_Text}>Mails</p>
                        <p>5</p>
                    </div>
                    <div className={Style.contactDiv}>
                        <p className={Style.contact_Text}>Msg</p>
                        <p>5</p>
                    </div>
                </div>

                <div id={Style.HeaderDiv}>
                    <p id={Style.second_headerText}>Calls</p>
                    <button> See All</button>
                </div>

                <div id={Style.Performance_Details_table_wrapperDiv}>
                    <table>
                        <thead>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>User</th>
                                <th>User ID</th>
                                <th>Ticket ID</th>
                                <th>Query Category</th>
                                <th>Recording</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                arr.map((user, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div>
                                                    
                                                    <p className={Style.User_detail_td}><img className={Style.user_img} src={user.user.img} alt="" />{user.user.name}</p>
                                                </div>
                                            </td>
                                            <td>{user.UserID}</td>
                                            <td>{user.TicketID}</td>
                                            <td>{user.QueryCat}</td>
                                            <td>
                                                <div id={Style.recordingDiv}>
                                                    <p className={Style.recording_text}><img src={user.recording.img} alt="" />{user.recording.time}</p>
                                                    <p><img src={user.recording.img2} alt="" />{user.recording.time2}</p>
                                                </div>
                                            </td>
                                            <td><div className={Style.statusText}>{user.status}</div></td>
                                            <td><Button text ={user.action}/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div id={Style.HeaderDiv}>
                    <p id={Style.second_headerText}>Mails</p>
                    <button> See All</button>
                </div>

                <div id={Style.Performance_Details_table_wrapperDiv}>
                    <table>
                        <thead>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>User</th>
                                <th>User ID</th>
                                <th>Ticket ID</th>
                                <th>Query Category</th>
                                <th>Query</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                arr.map((user, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div>
                                                    
                                                    <p className={Style.User_detail_td}><img className={Style.user_img} src={user.user.img} alt="" />{user.user.name}</p>
                                                </div>
                                            </td>
                                            <td>{user.UserID}</td>
                                            <td>{user.TicketID}</td>
                                            <td>{user.QueryCat}</td>
                                            <td>
                                                
                                                <div id={Style.queryText} onClick={query}>
                                                    {user.query}
                                                </div>
                                            </td>
                                            <td><div className={Style.statusText}>{user.status}</div></td>
                                            <td><Button text ={user.action}/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div id={Style.HeaderDiv}>
                    <p id={Style.second_headerText}>Msg</p>
                    <button> See All</button>
                </div>

                <div id={Style.Performance_Details_table_wrapperDiv}>
                    <table>
                        <thead>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>User</th>
                                <th>User ID</th>
                                <th>Ticket ID</th>
                                <th>Query Category</th>
                                <th>Recording</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                arr.map((user, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div>
                                                    
                                                    <p className={Style.User_detail_td}><img className={Style.user_img} src={user.user.img} alt="" />{user.user.name}</p>
                                                </div>
                                            </td>
                                            <td>{user.UserID}</td>
                                            <td>{user.TicketID}</td>
                                            <td>{user.QueryCat}</td>
                                            <td>
                                                <div id={Style.recordingDiv}>
                                                    <p className={Style.recording_text}><img src={user.recording.img} alt="" />{user.recording.time}</p>
                                                    <p><img src={user.recording.img2} alt="" />{user.recording.time2}</p>
                                                </div>
                                            </td>
                                            <td><div className={Style.statusText}>{user.status}</div></td>
                                            <td><Button text ={user.action}/></td>
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

export default Performance_Details