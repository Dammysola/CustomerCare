import React, { useState } from 'react'
import Style from './User_Friends.module.css'
import person from '../../../assets/images/Person1.png'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import search from '../../../assets/svg/Search.svg'
import InputField from '../../../components/input/InputField'
import list_view from '../../../assets/svg/list_view.svg'
import country_flag from '../../../assets/svg/country_flag.svg'
import country_flag2 from '../../../assets/svg/country_flag2.svg'
import nig_flag from '../../../assets/svg/nig_flag.svg'
import Category_Grid from '../../../assets/svg/Category_Grid.svg'
import Header from '../../../components/header/Header'
import Staff_Card from '../../../components/staff_card/Staff_Card'
import List_viewTable from '../../../components/listView/List_viewTable'




const User_Friends = () => {

    const [isGridView, setIsGridView] = useState(true);


    const user_friends_arr = [
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"
        },
    ]


    return (
        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"John Doe's Friends"}
                headerInfo={"Here’s an information on all John Doe's friends"} />

            <div id={Style.All_Users_wrapperDiv}>
                {/* <div id={Style.All_Users_toggle_dateDiv}> */}
                {/* <p id={Style.All_FootSoldiers_headerText}>All Foot Soldiers</p> */}

                <div id={Style.input_FilterDiv}>

                    <p id={Style.viewchange_button} onClick={() => setIsGridView(!isGridView)}>
                        {isGridView ? <div className={Style.footsoldier_listGrid_view}><img src={list_view} alt="" /> List View</div> : <div className={Style.footsoldier_listGrid_view}><img src={Category_Grid} alt="" /> Grid View</div>}
                    </p>

                    <p id={Style.dateText}>3rd July, 2024 <img src={arrow_down} alt="" /></p>

                    <p id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"A-Z"} />
                    </p>

                </div>
                {/* </div> */}

                {isGridView ?
                    <div id={Style.Online_Players_Card}>
                        {
                            user_friends_arr.map((object) => {
                                return (
                                    <Staff_Card
                                        img={object.name.img}
                                        status={object.status}
                                        name={object.name.name}
                                        position={object.countries}
                                        to={object.to} />
                                )
                            })
                        }
                    </div> : ""
                }

                {
                    !isGridView ?
                        <List_viewTable listView_arr = {user_friends_arr}/> : ""
                }
            </div>
        </div>
    )
}

export default User_Friends