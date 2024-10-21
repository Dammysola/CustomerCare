import React from 'react'
import Style from '../escalateQuery/Escalate_Query.module.css'
import success from '../../../assets/svg/success_icon.svg'
import copy from '../../../assets/svg/copy.svg'
import Button from '../../../components/button/Button'



const Resolve_Successful = () => {
    return (
        <div id={Style.successful_mainDiv}>
            <div id={Style.Successful_wrapperDiv}>
                <img id={Style.success_img} src={success} alt="" />

                <p id={Style.Successful_headerText}>Query Resolved Successfully</p>

                <div id={Style.Successful_tablewrapperDiv}>
                    <table>

                        <th>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </th>
                        <tbody>

                            <tr>
                                <td className={Style.detailsText}>Ticket ID</td>
                                <td className={Style.detailsBold}>WH534RE0</td>
                            </tr>
                            < tr>
                                <td className={Style.detailsText}>Username</td>
                                <td className={Style.detailsBold}>John Doe</td>
                            </tr>
                            <tr>
                                <td className={Style.detailsText}>Query Category</td>
                                <td className={Style.detailsBold}>Billing</td>
                            </tr>
                        </tbody>
                    </table>
                    <p id={Style.copyText}><img src={copy} alt="" /> Copy Details</p>

                    <div id={Style.buttonDiv}><Button text={"Go Home"}/></div>
                </div>
            </div>
        </div>
    )
}

export default Resolve_Successful