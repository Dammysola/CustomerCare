import React from 'react'
import Style from '../complain_details/Complain_Details.module.css'
import Header from '../../../components/header/Header'
import person from '../../../assets/images/Person1.png'
import Button from '../../../components/button/Button'
import smiley from '../../../assets/svg/gray_smiley.svg'
import { PopupContextHook } from '../../../PopupContext'






const Complain_Details = () => {

    const { updateReAccessPopup } = PopupContextHook()

    const reAccess = () => {
        updateReAccessPopup(true)
    }


    return (
        <div id={Style.Complain_Details_mainDiv}>
            <Header
                headerText={"Complain Details"}
                headerInfo={"Here is a detailed information on the complain"} />

            <div id={Style.Complain_Details_wrapperDiv}>


                <div >
                    <p className={Style.Personal_Info_headerText}>Complain Details</p>

                    <div className={Style.Personal_Info_tableDiv}>

                        <table>
                            <tr id={Style.headerTable}>
                                <th>Date</th>
                                <th>Headline</th>
                                <th>Report</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                            <tr id={Style.Personal_Info_tr}>
                                <td>8/7/2024</td>
                                <td id={Style.headlineText}>Lorem ipsum dolo</td>
                                <td>
                                    <div className={Style.ReportDiv}>
                                        <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                        <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                    </div>
                                </td>
                                <td>
                                    <div id={Style.statusText}>Reviewed</div>
                                </td>
                                <td>
                                    <button onClick={reAccess} style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.1rem", borderRadius: "8px", height: "1.37rem" }}>
                                        Reaccess
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className={Style.line}></div>

                <div>

                    <p className={Style.Personal_Info_headerText}>Review Details</p>

                    <div id={Style.Complain_Details_tableDiv_two} className={Style.Personal_Info_tableDiv}>

                        <table>
                            <tr id={Style.headerTable}>
                                <th>Date</th>
                                <th>Reviewed By</th>
                                <th>Report</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                            <tr id={Style.Personal_Info_tr}>
                                <td>8/7/2024</td>
                                <td>
                                    <div id={Style.Staff_Card_WrapperDiv}>
                                        <img src={person} alt="" />
                                        <div id={Style.Staff_Card_textDiv}>
                                            <p className={Style.Staff_Card_nameText}>John Doe</p>
                                            <p className={Style.Staff_Card_careRep}>Customer Care Representative</p>
                                            <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv}></div>Online</p>

                                            <Button
                                                text={"View More Details"} />


                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={Style.ReportDiv}>
                                        <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                        <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                    </div>
                                </td>
                                <td>
                                    <div id={Style.statusText}>Reviewed</div>
                                </td>
                                <td>
                                    <button onClick={reAccess} style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.7rem", borderRadius: "8px", height: "1.37rem" }}>
                                        Reaccess
                                    </button>
                                </td>
                            </tr>
                        
                        </table>
                    </div>

                </div>

                <div className={Style.line}></div>

                <div>

                    <p className={Style.Personal_Info_headerText}>User Satisfaction</p>

                    <div id={Style.Revenue_total_EarningDiv}>

                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Prompt Response</p>
                            <p className={Style.priceText}>70%</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar}></div>
                                <img src={smiley} alt="" />
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>
                        </div>

                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Customer Care Relation</p>
                            <p className={Style.priceText}>45%</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar_two}></div>
                                <p id={Style.Revenue_percentText}>45%</p>
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>

                        </div>

                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Prompt Response</p>
                            <p className={Style.priceText}>70%</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar}></div>
                                <img src={smiley} alt="" />
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>
                        </div>

                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Customer Care Relation</p>
                            <p className={Style.priceText}>45%</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar_two}></div>
                                <p id={Style.Revenue_percentText}>45%</p>
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complain_Details