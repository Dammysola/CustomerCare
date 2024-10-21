import React from 'react'
import Style from '../component/History_component.module.css'
import video_play from '../../../../assets/svg/video_play.svg'




const History_component = (props) => {

    const {room_Name, time, date, image1, image2, image3, image4,player1, player2, player3, player4} = props
    return (
        <div id={Style.History_component_mainDiv}>
            <div id={Style.History_component_wrapperDiv}>
                <div id={Style.video_playDiv}>
                    <img src={video_play} alt="" />
                </div>
                <div>
                    <div>
                        <p className={Style.room_Name}>{room_Name}</p>
                        <p>{date}</p>
                        <p className={Style.time_stamp}>{time}</p>
                    </div>
                    <div id={Style.History_component_AvatarDiv}>
                        <div className={Style.imgDiv}><img src={image1} alt="" /><p> {player1}</p></div>
                        <div className={Style.imgDiv}><img src={image2} alt="" /> <p>{player2}</p></div>
                        <div className={Style.imgDiv}><img src={image3} alt="" /><p> {player3}</p></div>
                        <div className={Style.imgDiv}><img src={image4} alt="" /> <p>{player4}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History_component