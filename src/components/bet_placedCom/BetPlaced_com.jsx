import React, { useEffect, useState } from 'react'
import Style from '../bet_placedCom/BetPlaced_com.module.css'
import person from '../../assets/images/person_img.png'
import green_eyes from '../../assets/svg/green_eyes.svg'
import warning from '../../assets/svg/yellow_warning.svg'
import delete_list from '../../assets/svg/product_delete.svg'
import winners_background from '../../assets/svg/winners_background.svg'
import arrow_down from '../../assets/svg/arrow_down-dark.svg'
import search from '../../assets/svg/Search.svg'
import filter_img from '../../assets/svg/Complete_filter_img.svg'
import download from '../../assets/svg/download_img.svg'
import InputField from '../../components/input/InputField'

const BetPlaced_com = (props) => {

    const { arr, initialIndex } = props

    let array = [...arr]



    let [toggleIndex, setToggleIndex] = useState(0);


    const toggle = (index) => {

        setToggleIndex(index)

    }


    useEffect(() => {
        setToggleIndex(initialIndex)
    }, [])
    return (
        <div className={Style.betPlacedContainer}>
           
            <div className={Style.betPlacedTableWrapper}>
               
                <table className={Style.betPlacedTable}>
                    
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>User ID</th>
                            <th>Bet ID</th>
                            <th>Game</th>
                            <th>Amount Staked</th>
                            <th>Players</th>
                            <th>Status</th>
                            <th>Amount Won</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.filter(user => {
                            if (toggleIndex === 0) return true;
                            if (toggleIndex === 1) return user.status === "Won";
                            if (toggleIndex === 2) return user.status === "Lost";
                            return false;
                        }).map((user, index) => (
                            <tr key={user.BetID}>
                                <td>{index + 1}</td>
                                <td>{user.userID}</td>
                                <td>{user.BetID}</td>
                                <td>{user.game}</td>
                                <td>{user.amount}</td>
                                <td>
                                    <div className={Style.playersImgDiv}>
                                        {[...Array(4)].map((_, i) => (
                                            <img key={i} src={user.players} alt="" />
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={Style.statusText}
                                        style={{
                                            backgroundColor: user.status === "Lost" ? "#eb575733" : "#31c36433",
                                            color: user.status === "Lost" ? "#EB5757" : "#31C364"
                                        }}
                                    >
                                        {user.status}
                                    </div>
                                </td>
                                <td>{user.win}</td>
                                <td>
                                    <div className={Style.actionField}>
                                        <img src={user.action.eye} alt="View" />
                                        <img src={user.action.warning} alt="Warning" />
                                        <img src={user.action.delete} alt="Delete" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BetPlaced_com