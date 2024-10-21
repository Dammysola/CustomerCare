import React from 'react'
import Style from '../logged_session/Logged_sessions.module.css'
import filter_img from '../../../assets/svg/Complete_filter_img.svg'
import InputField from '../../../components/input/InputField'
import Header from '../../../components/header/Header'
import search from '../../../assets/svg/Search.svg'
import person from '../../../assets/images/person_img.png'
import download from '../../../assets/svg/download_img.svg'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'




const Logged_sessions = () => {
    return (
        <div id={Style.Logged_sessions_mainDiv}>
            <Header
                headerText={"Logged Sessions"}
                headerInfo={"Here’s an information on all logged sessions"} />

            <div id={Style.Logged_sessions_WrapperDiv}>
                <div id={Style.Logged_sessions_input_FilterDiv}>

                    <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"Search Tickets"} />
                    </div>

                    <div id={Style.InputField_images}>
                        <img src={filter_img} alt="" />
                        <img src={download} alt="" />
                    </div>

                </div>
                <div id={Style.Logged_sessions_tableDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Game</th>
                            <th>Bet placed</th>
                            <th>Players</th>
                            <th>Winners</th>
                            <th>Ticket ID</th>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>8/7/2024</td>
                            <td>13:50</td>
                            <td>Dice</td>
                            <td>Nigeria</td>
                            <td>

                                <div>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>                                 
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                </div>


                            </td>
                            <td>
                                <div className={Style.WinnerText}><img src={person} alt="" /> John Doe</div>
                            </td>
                            <td>50000</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>8/7/2024</td>
                            <td>13:50</td>
                            <td>Dice</td>
                            <td>Nigeria</td>
                            <td>

                                <div>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                </div>


                            </td>
                            <td>
                            <div className={Style.WinnerText}><img src={person} alt="" /> John Doe</div>
                            </td>
                            <td>50000</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>SA 123476689</td>
                            <td>13:50</td>
                            <td>Dice</td>
                            <td>Nigeria</td>
                            <td>

                                <div>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                    <p className={Style.players_info}><img src={person} alt="" />John Doe</p>
                                </div>

                            </td>
                            <td>
                            <div className={Style.WinnerText}><img src={person} alt="" /> John Doe</div>

                                {/* <div id={Style.action_field}>
                                    <div className={Style.WinnerText}>John Doe</div>
                                </div> */}
                            </td>
                            <td>50000</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Logged_sessions