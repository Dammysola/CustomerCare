import React, { useState } from 'react'
import Style from '../user_placebets/Users_placedbets.module.css'
import Header from '../../../../../components/header/Header'
import search from '../../../../../assets/svg/Search.svg'
import InputField from '../../../../../components/input/InputField'
import filter_img from '../../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../../assets/svg/download_img.svg'
import Activity from '../../../../../assets/svg/Activity.svg'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import Total_Card from '../../../../../components/total_Card/Total_Card'
import BetPlaced_com from '../../../../../components/bet_placedCom/BetPlaced_com'
import { useParams } from 'react-router-dom'

const Users_placedbets = () => {

    const [toggleIndex, setToggleIndex] = useState(0)
    const [toggleIn, setToggleIn] = useState(0)

    const toggle = (index) => {
        setToggleIndex(index)
    }

    // let [toggleIndex, setToggleIndex] = useState(0);

    // let { indexParams } = useParams()
  
    // let paramIndex = JSON.parse(indexParams)
  
  
    // useEffect(() => {
    //   setToggleIn(paramIndex)
    // }, [])
  

    const placedbet_total_Card = [
        {
            image1: Activity,
            text: "Total Amount Staked",
            divText: "View All",
            price: "$25,000",
            to: ""
        },
        {
            image1: Activity,
            text: "Total Amount Won",
            divText: "View All",
            price: "$15,052"
        },
        {
            image1: Activity,
            text: "Total Amount Loss",
            divText: "View All",
            price: "$5,000"
        },
        {
            image1: Activity,
            text: "Lorem",
            divText: "View all",
            price: "23,000"
        },
    ]

    const arr = [
        {
            userID: "SA 123476689",
            ticketID: "8012345678",
            amountStaked: "200",
            Status: "Won"
        },
        {
            userID: "SA 123476689",
            ticketID: "8012345678",
            amountStaked: "200",
            Status: "Won"
        },
        {
            userID: "SA 123476689",
            ticketID: "8012345678",
            amountStaked: "200",
            Status: "Lost"
        },
        {
            userID: "SA 123476689",
            ticketID: "8012345678",
            amountStaked: "200",
            Status: "Won"
        },
        {
            userID: "SA 123476689",
            ticketID: "8012345678",
            amountStaked: "200",
            Status: "Lost"
        },
        {
            userID: "SA 123476689",
            ticketID: "8012345678",
            amountStaked: "200",
            Status: "Lost"
        },
        {
            userID: "SA 123476689",
            ticketID: "8012345678",
            amountStaked: "200",
            Status: "Win"
        },
        {
            userID: "SA 123476689",
            ticketID: "8012345678",
            amountStaked: "200",
            Status: "Win"
        }
    ]




    return (
        <div id={Style.Users_placedbets_mainDiv}>
            <Header
                headerText={"John Doe's Bet Placed"}
                headerInfo={"Here’s an information on all bets placed by John Doe"} />


            <div id={Style.TotalBet_mainDiv}>

                <div id={Style.Users_placedbets_mapDiv}>
                    {
                        placedbet_total_Card.map((object, index) => {
                            let isBlack = index == toggleIndex ? true : false
                            return (
                                <Total_Card
                                    image1={object.image1}
                                    text={object.text}
                                    divText={object.divText}
                                    price={object.price}
                                    to={object.to}
                                    isBlack={isBlack}
                                    onClick={() => toggle(index)}
                                />
                            )
                        })
                    }
                </div>

                <div id={Style.input_FilterDiv}>

                    <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"A-Z"} />
                    </div>

                    <div id={Style.InputField_images}>
                        <img src={filter_img} alt="" />
                        <img id={Style.download_img} src={download} alt="" />
                    </div>

                </div>


                <div id={Style.TotalBet_wrapper}>
                    <div id={Style.PlaceBet_tableDiv}>
                        <table>
                            {   
                            
                                toggleIndex == 0 ?    

                           <>
                                <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>User ID</th>
                                <th>Ticket ID</th>
                                <th>Amount Staked</th>
                                <th>Status</th>
                            </tr>

                            <tbody>
                                {
                                    arr.map((stake, index) => {
                                        let lost = stake.Status == "Lost" ? true : false

                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{stake.userID}</td>
                                                <td>{stake.ticketID}</td>
                                                <td>{stake.amountStaked}</td>
                                                <td>

                                                    <div id={Style.statusText} style={{ backgroundColor: lost ? "#c3313133" : "#31c36433", color: lost ? "#C33131" : "#31C364" }}>{stake.Status}</div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                           </> : ""
                            }

                        </table>

                        {/* {
                            toggleIndex == 1 ? 
                            
                            // <BetPlaced_com arr={arr}/>
                            : ""

                        } */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Users_placedbets