import React from 'react'
import Style from './Game_History.module.css'
import Header from '../../../components/header/Header'
import game_pad from '../../../assets/svg/game_pad.svg'
import InputField from '../../../components/input/InputField'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import search from '../../../assets/svg/Search.svg'
import filter from '../../../assets/svg/Complete_filter_img.svg'
import download from '../../../assets/svg/download_img.svg'
import avatar from '../../../assets/images/avatar_two.png'
import avatar_two from '../../../assets/images/avatar_five.png'
import avatar_three from '../../../assets/images/avatar_three.png'
import avatar_four from '../../../assets/images/avatar_four.png'
import History_component from './component/History_component'






const Game_History = () => {
//room_Name, time, date, image1, image2, image3, image4,player1, player2, player3, player4
    const history_arr = [
        {
            room_Name: "DiceroomWHS",
            date: "9 Oct, 2024",
            time: "11:32",
            image1: avatar,
            image2: avatar_two,
            image3: avatar_three,
            image4: avatar_four,
            player1: "Lighty",
            player2: "DarkKnight",
            player3: "Blossom",
            player4: "Windy",
        },
        {
            room_Name: "DiceroomWHS",
            date: "9 Oct, 2024",
            time: "11:32",
            image1: avatar,
            image2: avatar_two,
            image3: avatar_three,
            image4: avatar_four,
            player1: "Lighty",
            player2: "DarkKnight",
            player3: "Blossom",
            player4: "Windy",
        },
        {
            room_Name: "DiceroomWHS",
            date: "9 Oct, 2024",
            time: "11:32",
            image1: avatar,
            image2: avatar_two,
            image3: avatar_three,
            image4: avatar_four,
            player1: "Lighty",
            player2: "DarkKnight",
            player3: "Blossom",
            player4: "Windy",
        },
        {
            room_Name: "DiceroomWHS",
            date: "9 Oct, 2024",
            time: "11:32",
            image1: avatar,
            image2: avatar_two,
            image3: avatar_three,
            image4: avatar_four,
            player1: "Lighty",
            player2: "DarkKnight",
            player3: "Blossom",
            player4: "Windy",
        },
        {
            room_Name: "DiceroomWHS",
            date: "9 Oct, 2024",
            time: "11:32",
            image1: avatar,
            image2: avatar_two,
            image3: avatar_three,
            image4: avatar_four,
            player1: "Lighty",
            player2: "DarkKnight",
            player3: "Blossom",
            player4: "Windy",
        },
        {
            room_Name: "DiceroomWHS",
            date: "9 Oct, 2024",
            time: "11:32",
            image1: avatar,
            image2: avatar_two,
            image3: avatar_three,
            image4: avatar_four,
            player1: "Lighty",
            player2: "DarkKnight",
            player3: "Blossom",
            player4: "Windy",
        },
        {
            room_Name: "DiceroomWHS",
            date: "9 Oct, 2024",
            time: "11:32",
            image1: avatar,
            image2: avatar_two,
            image3: avatar_three,
            image4: avatar_four,
            player1: "Lighty",
            player2: "DarkKnight",
            player3: "Blossom",
            player4: "Windy",
        },
        {
            room_Name: "DiceroomWHS",
            date: "9 Oct, 2024",
            time: "11:32",
            image1: avatar,
            image2: avatar_two,
            image3: avatar_three,
            image4: avatar_four,
            player1: "Lighty",
            player2: "DarkKnight",
            player3: "Blossom",
            player4: "Windy",
        },
        {
            room_Name: "DiceroomWHS",
            date: "9 Oct, 2024",
            time: "11:32",
            image1: avatar,
            image2: avatar_two,
            image3: avatar_three,
            image4: avatar_four,
            player1: "Lighty",
            player2: "DarkKnight",
            player3: "Blossom",
            player4: "Windy",
        }
    ]
    return (
        <div id={Style.Game_History_mainDiv}>
            <Header
                headerText={"Game History"}
                headerInfo={"Here’s all information on John Doe"}
                image3 ={game_pad}
            />
            <div id={Style.Game_History_wrapperDiv}>
                {/* <div id={Style.gamePad_inputFieldDiv}> */}
                    {/* <img id={Style.gamePad} src={game_pad} alt="" /> */}

                    <div id={Style.Game_History_input_FilterDiv}>
                        <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>

                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <div id={Style.imgDiv}>
                            <img src={filter} alt="" />
                            <img src={download} alt="" />
                        </div>
                    {/* </div> */}
                </div>

                <div id={Style.Game_History_mapDiv}>
                    {
                        history_arr.map((obj)=>{

                            return(
                                <History_component
                                room_Name ={obj.room_Name}
                                time ={obj.time}
                                date ={obj.date}
                                image1 ={obj.image1}
                                image2 ={obj.image2}
                                image3 ={obj.image3}
                                image4 ={obj.image4}
                                player1 ={obj.player1}
                                player2 ={obj.player2}
                                player3 ={obj.player3}
                                player4 ={obj.player4}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Game_History