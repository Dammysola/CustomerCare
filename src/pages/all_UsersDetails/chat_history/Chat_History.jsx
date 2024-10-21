import React from 'react'
import Header from '../../../components/header/Header'
import Style from './Chat_History.module.css'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import InputField from '../../../components/input/InputField'
import search from '../../../assets/svg/Search.svg'
import person from '../../../assets/images/person_img.png'
import person2 from '../../../assets/images/Person1.png'



const Chat_History = () => {
    return (
        <div id={Style.Chat_History_mainDiv}>
            <Header
                headerText={"Chat History"}
                headerInfo={"Here’s an information on all conversation"} />

            <div id={Style.Chat_History_wrapperDiv}>
                <div id={Style.Chat_History_headerDateDiv}>
                    <p>Chat History</p>
                    <div id={Style.Chat_History_DateDiv}>
                        <div>3rd of October, 2024 <img src={arrow_down} alt="" /></div>
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"Search"} />
                        </div>
                    </div>
                </div>
                <div id={Style.Chat_HistoryDiv}>
                    <p id={Style.Chat_History_dateText}>Wed, July 4th 2024</p>

                    <div>
                        <div className={Style.Chat_History_contentDiv}>
                            <img src={person} alt="" />
                            <p className={Style.Chat_History_content}>Lorem ipsum dolor sit amet consectetur. olor sit amet consectetur.</p>
                            
                        </div>
                        <div id={Style.Chat_History_user_details}>
                                <p className={Style.Chat_History_nameText}>John Doe</p>
                                <p>13:33</p>
                            </div>
                    </div>

                    <div>
                        <div className={Style.Chat_History_contentDiv}>
                            <img src={person2} alt="" />
                            <p className={Style.Chat_History_content_two}>Lorem ipsum dolor sit amet consectetur. olor sit amet consectetur.</p>
                            
                        </div>
                        <div id={Style.Chat_History_user_details}>
                                <p className={Style.Chat_History_nameText}>John Doe</p>
                                <p>13:33</p>
                            </div>
                    </div>

                    <div>
                        <div className={Style.Chat_History_contentDiv}>
                            <img src={person} alt="" />
                            <p className={Style.Chat_History_content}>Lorem ipsum dolor sit amet consectetur. olor sit amet consectetur.</p>
                            
                        </div>
                        <div id={Style.Chat_History_user_details}>
                                <p className={Style.Chat_History_nameText}>John Doe</p>
                                <p>13:33</p>
                            </div>
                    </div>

                    <div>
                        <div className={Style.Chat_History_contentDiv}>
                            <img src={person2} alt="" />
                            <p className={Style.Chat_History_content_two}>Lorem ipsum dolor sit amet consectetur. olor sit amet consectetur.</p>
                            
                        </div>
                        <div id={Style.Chat_History_user_details}>
                                <p className={Style.Chat_History_nameText}>John Doe</p>
                                <p>13:33</p>
                            </div>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}

export default Chat_History