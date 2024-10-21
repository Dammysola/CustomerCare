import React from 'react'
import Style from './Conversation.module.css'
import filter_img from '../../../assets/svg/Complete_filter_img.svg'
import InputField from '../../../components/input/InputField'
import Header from '../../../components/header/Header'
import search from '../../../assets/svg/Search.svg'
import download from '../../../assets/svg/download_img.svg'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import person from '../../../assets/images/person_img.png'
import person2 from '../../../assets/images/Person1.png'
import { Link } from 'react-router-dom'




const Conversation = () => {
  return (
    <div id={Style.Conversation_mainDiv}>
      <Header
        headerText={"Conversation"}
        headerInfo={"Here’s an information on all conversation"} />

      <div id={Style.Conversation_WrapperDiv}>
        <div id={Style.Conversation_input_FilterDiv}>

          <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
          <div id={Style.searchDiv}>
            <img src={search} alt="" />
            <InputField
              placeholder={"A- Z"} />
          </div>

          <div id={Style.InputField_images}>
            <img src={filter_img} alt="" />
            <img src={download} alt="" />
          </div>
        </div>
        <div id={Style.Conversation_tableDiv}>
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
              <th>Action</th>

            </tr>
            <tr>
              <td>1</td>
              <td>8/7/2024</td>
              <td>13:50</td>
              <td>Dice</td>
              <td>Nigeria</td>
              <td>
                <div id={Style.playerImg_Div}>
                  
                  <img src={person} alt="" />
                    <img src={person2} alt="" />
                    <img src={person} alt="" />
                    <img src={person2} alt="" />
                    <img src={person} alt="" />
                  
                </div>
              </td>
              <td>
                <div className={Style.WinnerText}> <img src={person} alt="" />John Doe</div>
              </td>
              <td>50000</td>
              <td>
                <Link to={"/chatHistory"}>
                 <button style={{ backgroundColor: "#075070", border: "none", width: "4.5rem", height: "1.37rem", color: "#FFFFFF", fontSize: "0.7rem", borderRadius: "8px" }}>View Chat</button>
                </Link>
               </td>
            </tr>

            <tr>
              <td>1</td>
              <td>8/7/2024</td>
              <td>13:50</td>
              <td>Dice</td>
              <td>Nigeria</td>
              <td>
              <div id={Style.playerImg_Div}>
                  
                  <img src={person} alt="" />
                    <img src={person2} alt="" />
                    <img src={person} alt="" />
                    <img src={person2} alt="" />
                    <img src={person} alt="" />
                  
                </div>
              </td>
              <td>
                <div className={Style.WinnerText}><img src={person} alt="" /> John Doe</div>
              </td>
              <td>50000</td>
              <td><button style={{ backgroundColor: "#075070", border: "none", width: "4.5rem", height: "1.37rem", color: "#FFFFFF", fontSize: "0.7rem", borderRadius: "8px" }}>View Chat</button></td>
            </tr>

            <tr>
              <td>2</td>
              <td>SA 123476689</td>
              <td>13:50</td>
              <td>Dice</td>
              <td>Nigeria</td>
              <td>
              <div id={Style.playerImg_Div}>
                  
                  <img src={person} alt="" />
                    <img src={person2} alt="" />
                    <img src={person} alt="" />
                    <img src={person2} alt="" />
                    <img src={person} alt="" />
                  
                </div>
              </td>
              <td>
                <div id={Style.action_field}>
                  <div className={Style.WinnerText}> <img src={person} alt="" />John Doe</div>
                </div>
              </td>
              <td>50000</td>
              <td><button style={{ backgroundColor: "#075070", width: "4.5rem", height: "1.37rem", border: "none", color: "#FFFFFF", fontSize: "0.7rem", borderRadius: "8px" }}>View Chat</button></td>
            </tr>

          </table>
        </div>
      </div>

    </div>
  )
}

export default Conversation