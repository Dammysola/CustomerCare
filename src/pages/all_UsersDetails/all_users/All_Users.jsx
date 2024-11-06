import React, { useEffect, useState } from 'react'
import Style from './All_Users.module.css'
import Staff_Card from '../../../components/staff_card/Staff_Card'
import blue from '../../../assets/svg/blue.svg'
import gold from '../../../assets/svg/gold.svg'
import black from '../../../assets/svg/black.svg'
// import person from '../../../assets/images/Person1.png'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import search from '../../../assets/svg/Search.svg'
import InputField from '../../../components/input/InputField'
import Header from '../../../components/header/Header'
import { Link } from 'react-router-dom'
import { getAllUsersProvider } from '../../api_detaills/provider/auth_provider'





const All_Users = () => {
    // State to manage the active toggle button

    const [toggleIndex, setToggleIndex] = useState(0)

    // Function to handle toggle button clicks

    const transactionToggle = (index) => {
        setToggleIndex(index)
    }

    // State to store user data

    const [users, setUsers] = useState({
        allUsers: [],
        subscribedUsers: [],
        unsubscribedUsers: []
    })

    // Fetch user data on component mount

    useEffect(() => {
        getAllUsersProvider({
            updateUsers: (data) => {
                setUsers({
                    allUsers: data.allUsers || [],
                    subscribedUsers: data.subscribedUsers || [],
                    unsubscribedUsers: data.unsubscribedUsers || []
                });
            }
        });
    }, []);



    // Destructure user arrays for easier access

    const subscribedUsers_arr = users.subscribedUsers
    const allUsers_arr = users.allUsers
    const unsubscribedUsers_arr = users.unsubscribedUsers

    return (
        <div id={Style.All_Users_mainDiv}>
            {/* Header component */}

            <Header
                headerText={"All Users"}
                headerInfo={"Here's an information on all Users"} />

            <div id={Style.All_Users_wrapperDiv}>





                {/* Toggle buttons and filter options */}

                <div id={Style.All_Users_toggle_dateDiv}>

                    <div id={Style.All_Users_toggleDiv}>

                        {/* Toggle buttons for different user categories */}

                        <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>All</button>
                        <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Subscribed</button>
                        <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Unsubscribed</button>
                        {/* <button onClick={() => transactionToggle(3)} className={toggleIndex == 3 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Not-Subscribed</button> */}
                    </div>

                    {/* Date and search filter */}

                    <div id={Style.input_FilterDiv}>
                        <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField placeholder={"A-Z"} />
                        </div>
                    </div>
                </div>

                {/* Display user cards based on selected toggle */}

                <div id={Style.All_Users_Card}>

                    {/* Render all users */}

                    {toggleIndex == 0 &&
                        allUsers_arr.map((object) => {

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                < Staff_Card
                                    key={object.id} // Add a unique key prop
                                    img={object.profile_picture}
                                    verified={verify}
                                    status={object.status}
                                    name={object.username}
                                    position={object.country}
                                    to={`/userDetails/${object.phone}`}
                                    />
                            )

                        })
                    }

                    {/* Render subscribed users */}

                    {
                        toggleIndex == 1 &&
                        subscribedUsers_arr.map((object) => {

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black : ""


                            return (
                                <Staff_Card
                                    key={object.id} // Add a unique key prop
                                    img={object.profile_picture}
                                    verified={verify}
                                    status={object.status}
                                    name={object.username}
                                    position={object.country}
                                    to={`/userDetails/${object.phone}`}
                                    />
                            )
                        })
                    }

                    
                        {/* Render unsubscribed users */}

                    {toggleIndex == 2 &&
                        unsubscribedUsers_arr.map((object) => {

                            return (

                                <Staff_Card
                                    key={object.id} // Add a unique key prop
                                    img={object.profile_picture}
                                    status={object.status}
                                    name={object.username}
                                    position={object.country}
                                    to={`/userDetails/${object.phone}`}
                                    />
                            )

                        })
                    } 
                    
                </div>
            </div>
        </div>
    )
}

export default All_Users