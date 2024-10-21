import React from 'react'
import Style from '../total_Card/Total_Card.module.css'
import chat from '../../assets/svg/chat.svg'
import call from '../../assets/svg/call.svg'
import mail from '../../assets/svg/mail.svg'
import { Link } from 'react-router-dom'



const Total_Card = (props) => {
  const { image1, text, divText, price, to, isBlack, onClick, all, image2, image3, image4, price2, price3, price4, no_Div} = props
  return (
    <div id={Style.Total_Card_mainDiv} onClick={onClick}>
      <div id={Style.Total_Card_Wrapper} style={{ backgroundColor: isBlack ? "#0B438D" : "#FFFFFF", cursor: "pointer" }}>
        <div id={Style.Total_Card_firstLine_Div}>
          <div id={Style.Total_Card_firstLine_ImgDiv}>
            <img src={image1} alt="" />
            <div id={Style.Total_CardText} style={{ color: isBlack ? "#FFFFFF" : "#777777", }}>{text}</div>
          </div>
          <div id={Style.Total_Card_imgDiv} style={{ borderColor: isBlack ? "#ffffff" : "#0E093C", backgroundColor: isBlack ? "#FFFFFF" : "transparent"  }} >
            <Link to={to}>
              <div>{divText}</div>
            </Link>
          </div>
        </div>
        <div id={Style.Total_Card_info_Div}>
          <p id={Style.priceText} style={{ color: isBlack ? "#FFFFFF" : "#0E093C", }}>
            <span>{all}</span> {price}
          </p>
          <div id={Style.contact_detailsDiv}>
            <p><img src={image2} alt="" />{price2}</p>
            <p><img src={image3} alt="" />{price3}</p>
            <p><img src={image4} alt="" />{price4}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Total_Card