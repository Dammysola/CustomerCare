import React from 'react'
import Style from '../header/Header.module.css'
import dice from '../../assets/svg/Dice.svg'
import sports from '../../assets/svg/sport.svg'
import back from '../../assets/svg/back.svg'
import { useNavigate } from 'react-router-dom'


const Header = (props) => {
    const { headerText, headerInfo, image, image2, image3, back1 = true } = props

    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };

    return (

        <>
            <div id={Style.HeaderDiv}>
                <div >

                    <div id={Style.headerText}>{headerText}</div>
                    <p>{headerInfo}</p>
                </div>
                <div id={Style.imgDiv}>
                    <img src={image} alt="" />
                    <img id={Style.sports_img} src={image2} alt="" />
                    <img id={Style.gamePad_img} src={image3} alt="" />
                </div>
            </div>

            {back1 == true ?  <img id={Style.back_img} onClick={goBack} src={back} alt="" />: ""}
        </>
    )
}

export default Header