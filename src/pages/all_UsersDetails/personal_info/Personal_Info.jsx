import React, { useEffect, useState } from 'react'
import Style from './Personal_Info.module.css'
import { BarChart, YAxis, XAxis, Bar, Tooltip, ResponsiveContainer } from 'recharts'
import Header from '../../../components/header/Header'
import chat from '../../../assets/svg/chat.svg'
import clock from '../../../assets/svg/clock.svg'
import users from '../../../assets/svg/users.svg'
import rise from '../../../assets/svg/rise.svg'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import Button from '../../../components/button/Button'
import no_complaint from '../../../assets/svg/no_complaint.svg'
import { Link, useParams } from 'react-router-dom'
import Stats_Card from '../../../components/stats_card/Stats_Card'
import search from '../../../assets/svg/Search.svg'
import InputField from '../../../components/input/InputField'
import download from '../../../assets/svg/download_img.svg'
import coin from '../../../assets/svg/coin.svg'
import game_pad from '../../../assets/svg/game_pad.svg'
// import Date_Picker from '../../../components/date_picker/Date_Picker'
// import { PopupContextHook } from '../../../WhiteHouse_PopupContext'
import App_Pagination from '../../../components/app_Pagination/App_Pagination'
import { getUserDetailsProvider } from '../../api_detaills/provider/users_provider'
import { PopupContextHook } from '../../../PopupContext'




const Personal_Info = () => {

    const { phoneNumber } = useParams()

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    const { updateErrorText, updateErrorPopup, updatePhoneState, updateSuspendUserPopup } = PopupContextHook()


    const [userDetails, setUserDetails] = useState({

        personalInformation: [],
        // gameInformation: [],
        coinPurchaseHistory: [],
        withdrawalHistory: [],
        subscriptionHistory: [],
    })


    // State to manage selected date for filtering

    const [selectedDate, setSelectedDate] = useState(new Date());  // Initialize with current date
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);  // Initialize with current date


    // Function to handle date changes

    const handleDateChange = (newDate) => {

        setSelectedDate(newDate);  // Update selectedDate when newDate is received

        console.log("New selected date:", newDate);  // This should log the new date when clicked

        setIsCalendarOpen(false)
    };

    // Function to toggle the calendar visibility

    const toggleCalendar = () => {
        setIsCalendarOpen(true)
    }



    // Fetch user details when the component mounts

    useEffect(() => {
        const phone = phoneNumber   // Get the phone number from params

        getUserDetailsProvider({
            updateUserDetails: (data) => {

                // Update user details state with fetched data

                setUserDetails({
                    personalInformation: data.personalInformation,
                    coinPurchaseHistory: data.coinPurchaseHistory,
                    withdrawalHistory: data.withdrawalHistory,
                    subscriptionHistory: data.subscriptionHistory,
                })
            },
            phone,
            updateErrorPopup,
            updateErrorText
        })

    }, [])



    // Destructure user details for easier access

    const { personalInformation, subscriptionHistory } = userDetails



    const arr = [""]

    // Pagination logic

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const coinPurchaseHistory = userDetails.coinPurchaseHistory.slice(indexOfFirstPost, indexOfLastPost);
    const withdrawalHistory = userDetails.withdrawalHistory.slice(indexOfFirstPost, indexOfLastPost);


    // Function to handle pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const suspendUser = () => {

        updatePhoneState({
            phone: phoneNumber,
            details: personalInformation.status

        })

        updateSuspendUserPopup(true)

    }


    const balance = personalInformation.map(user => user.balance);

    // Sample data for line chart

    const line_data = [

        {name: 'jan', uv: 4000, pv: 20, amt: 2400},
        {name: 'Feb', uv: 3000, pv: 50, amt: 2210},
        {name: 'Mar', uv: 2000, pv: 30, amt: 2290},
        {name: 'Apr', uv: 2780, pv: 40, amt: 2000},
        {name: 'May', uv: 1890, pv: 70, amt: 2181},
        {name: 'Jun', uv: 2390, pv: 60, amt: 2500},
        {name: 'Jul', uv: 3490, pv: 50, amt: 2100},
        {name: 'Aug', uv: 3490, pv: 30, amt: 2100},
        {name: 'Sep', uv: 3490, pv: 60, amt: 2100},
        {name: 'Oct', uv: 3490, pv: 80, amt: 2100},
        {name: 'Nov', uv: 3490, pv: 50, amt: 2100},
        {name: 'Dec', uv: 3490, pv: 70, amt: 2100},
    ];


    const users_stats_card = [
        {
            img: clock,
            figure: "3k",
            text: "Logged Sessions",
            to: "/loggedsession"

        },
        {
            img: users,
            figure: "34",
            text: "Friends",
            to: "/userFriends"
        },
        {
            img: chat,
            figure: "14",
            text: "Conversations",
            to: "/conversations"
        },
        {
            img: rise,
            figure: "2k",
            text: "Placed Bets",
            to: "/userplacedbet"

        },
    ]

    const transaction = [

        {

            refNumber: "UA 123476689",
            time: "13:45",
            country: "Nigeria",
            amountPaid: "20000",
            coinReceived: "500",
            subType: "Gold",
            paymentType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Purchased"
        },

        {

            refNumber: "UA 123476689",
            time: "13:45",
            country: "Nigeria",
            amountPaid: "20000",
            coinReceived: "500",
            subType: "Black",
            paymentType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Purchased"
        },

        {

            refNumber: "UA 123476689",
            time: "13:45",
            country: "Nigeria",
            amountPaid: "20000",
            coinReceived: "500",
            subType: "Blue",
            paymentType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Purchased"
        }
    ]


    return (

        <div id={Style.Personal_Info_mainDiv}>
            <Header
                headerText={"Personal Information"}
                headerInfo={"Here’s an information on this User"} />

            <div id={Style.Personal_Info_wrapperDiv}>

                <p id={Style.Onboarded_Text}>Onboarded By: <span>John Doe</span></p>

                <div id={Style.balance_buttonDiv}>

                    <div id={Style.balance_game_HistoryDiv}>

                        <div id={Style.Coin_BalanceDiv}>

                            <div id={Style.coinDiv}>

                                <img src={coin} alt="" />
                            </div>
                            <div>
                                <p>{balance}</p>
                                <p>Coin Balance</p>
                            </div>
                        </div>

                        <div id={Style.dropDiv}>

                            <div id={Style.dropdown} >Click to See game history</div>
                            <Link to={"/gameHistory"}>


                                <div id={Style.Game_historyDiv}>
                                    <div id={Style.padDiv}>
                                        <img src={game_pad} alt="" />
                                    </div>
                                    <div>
                                        <p>3K</p>
                                        <p>Game History</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <div id={Style.Personal_Info_buttonDiv}>

                        {/* <button>Freeze Account</button> */}

                        <button onClick={suspendUser}> {personalInformation.status === "active" ? "Suspend Account" : "Unsuspend Account"}</button>



                        <button>Fund Account</button>
                    </div>
                </div>


                <div >
                    <p className={Style.Personal_Info_headerText}>Personal Information</p>
                    <div id={Style.Personal_Info_tableDiv}>

                        <table>

                            <thead>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>User ID</th>
                                    <th>Username</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                    <th>Bank Detail</th>
                                    <th>Status</th>
                                    <th>Subscription</th>

                                </tr>
                            </thead>

                            <tbody>

                                {
                                    personalInformation.map((obj, index) => {

                                        let subscribedColor = obj.subscription_type === "blue" ? "#0B438D" 
                                        : obj.subscription_type === "gold" ? "#D6AB1B" : obj.subscription_type === "black" ? "black" : ""

                                        let statusColor = obj.status === "active" ? "#31C364" 
                                        : obj.status === "suspended" ? "red" : ""


                                        let statusBG = obj.status === "active" ? "#31c36433" 
                                        : obj.status === "suspended" ? "#ff000033" : ""

                                        return (

                                            <tr id={Style.Personal_Info_tr} key={index}>
                                                <td>1</td>
                                                <td>SA 123476689</td>
                                                <td>{obj.username}</td>
                                                <td>+{obj.phone}</td>
                                                <td>{obj.country}</td>
                                                <td>
                                                    <div id={Style.BankDetails_Div}>
                                                        <div>
                                                            <p>Bank</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.bankDetails?.bank_name}</p>
                                                        </div>
                                                        <div>
                                                            <p>Account Number</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.bankDetails?.account_number}</p>
                                                        </div><div>
                                                            <p>Account Name</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.bankDetails?.account_name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id={Style.statusText} style={{backgroundColor: statusBG, color: statusColor}}>{obj.status}</div>
                                                </td>
                                                <td>
                                                    <div id={Style.Subscription} style={{backgroundColor: subscribedColor}}>{obj.subscription_type}</div>
                                                </td>
                                            </tr>
                                        )
                                    })




                                    //     )
                                    // })
                                }
                            </tbody>

                        </table>
                    </div>
                </div>

                <p className={Style.Personal_Info_headerText}>Game Information</p>
                <div id={Style.Personal_Info_Card_wrapper}>

                    {
                        users_stats_card.map((obj, index) => {

                            return (
                                <Stats_Card
                                    key={index}
                                    figure={obj.figure}
                                    img={obj.img}
                                    text={obj.text}
                                    to={obj.to} />
                            )
                        })
                    }
                </div>

                <div id={Style.Personal_Info_graphReport_Div}>

                    <div id={Style.Dashboard_lineChart_Two}>
                        <p id={Style.Dashboard_RevenueText}>Revenue</p>
                        <ResponsiveContainer width="100%" height="70%">
                            <BarChart width={150} height={40} data={line_data} margin={{
                                top: 5,
                                right: 30,
                                left: -20,
                                bottom: 10,
                            }}>


                                <XAxis dataKey="name"
                                    axisLine={false} tickLine={false} fontSize={"0.8rem"}
                                />
                                <YAxis
                                    axisLine={false} tickLine={false} fontSize={"0.7rem"}
                                />
                                {/* <Legend/> */}
                                <Tooltip />
                                <Bar dataKey="pv" fill="#113353" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div id={Style.Personal_Info_Report_mainDiv}>
                        <div id={Style.Personal_Info_ReportTextDiv}>
                            <p id={Style.ReportHeader}>Complaints</p>
                            <p id={Style.dateText}>3rd of October, 2024 <img src={arrow_down} alt="" /></p>
                        </div>

                        {
                            arr.length == 0 ?
                                <div id={Style.no_complaintDiv}>
                                    <img src={no_complaint} alt="" />
                                    <p>No Recent Complaint</p>
                                </div> :

                                <div id={Style.Personal_Info_ReportWrapper}>
                                    <div className={Style.Personal_Info_ReportDiv}>
                                        <p>1</p>
                                        <p>1/3/2024</p>
                                        <div id={Style.TextDiv}>
                                            <p className={Style.Report_Header2}>Lorem ipsum dolo</p>
                                            <p className={Style.ReportText}>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate...</p>

                                        </div>
                                        <Button
                                            text={"View Details"} />
                                    </div>
                                    <div className={Style.Personal_Info_ReportDiv}>
                                        <p>1</p>
                                        <p>1/3/2024</p>
                                        <div id={Style.TextDiv}>
                                            <p className={Style.Report_Header2}>Lorem ipsum dolo</p>
                                            <p className={Style.ReportText}>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate...</p>

                                        </div>
                                        <Button
                                            text={"View Details"} />
                                    </div>
                                    <div className={Style.Personal_Info_ReportDiv}>
                                        <p>1</p>
                                        <p>1/3/2024</p>
                                        <div id={Style.TextDiv}>
                                            <p className={Style.Report_Header2}>Lorem ipsum dolo</p>
                                            <p className={Style.ReportText}>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate...</p>

                                        </div>
                                        <Link to={'/complainDetails'}>
                                            <Button
                                                text={"View Details"} />
                                        </Link>
                                    </div>
                                </div>
                        }
                    </div>
                </div>

                <div>

                    <p className={Style.Personal_Info_headerText}>Coin Purchase History</p>

                    <div className={Style.date_inputDiv}>

                        <span>{selectedDate.toDateString()} <img src={arrow_down} onClick={toggleCalendar} alt="" /></span>

                        {
                            isCalendarOpen && (

                                <div id={Style.calendar_popup}>
                                    <Date_Picker onDateChange={handleDateChange} />
                                </div>
                            )
                        }


                        <div className={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <img className={Style.download_img} src={download} alt="" />
                    </div>
                    <div id={Style.Personal_Info_tableDiv}>

                        <table>

                            <thead>

                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Ref Number</th>
                                    <th>Time</th>
                                    <th>Country</th>
                                    <th>Amount Paid</th>
                                    <th>Coin Received</th>
                                    <th>Payment Type</th>
                                    <th>Status</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    coinPurchaseHistory.map((obj, index) => {

                                        const serialNumber = indexOfFirstPost + index + 1; // Calculate the correct serial number

                                        let statusColor = obj.status === "success" ? "#31C364" : obj.status === "failed" ? "red" : obj.status === "pending" ? "#FC9E2F" : obj.status === "reversed" ? "#939393" : ""
                                        let statusBG = obj.status === "success" ? "#31c36433" : obj.status === "failed" ? "#ff000033" : obj.status === "pending" ? "#fc9e2f33" : obj.status === "reversed" ? "#93939333" : ""

                                        return (

                                            <tr key={index}>
                                                <td>{serialNumber}</td>
                                                <td>{obj.refNumber}</td>
                                                <td>{obj.time}</td>
                                                <td>{obj.country}</td>
                                                <td>{obj.amountPaid}</td>
                                                <td>{obj.coinReceived}</td>
                                                <td>
                                                    {
                                                        obj.bank &&

                                                        <div id={Style.BankDetails_Div}>
                                                            <div>
                                                                <p>Bank</p>
                                                                <p className={Style.BankDetails_BoldText}>{obj.paymentType.bank}</p>
                                                            </div>
                                                            <div>
                                                                <p>Account Number</p>
                                                                <p className={Style.BankDetails_BoldText}>{obj.paymentType.accNo}</p>
                                                            </div><div>
                                                                <p>Account Name</p>
                                                                <p className={Style.BankDetails_BoldText}>{obj.paymentType.accName}</p>
                                                            </div>
                                                        </div>
                                                    }
                                                    <p className={Style.paymentText}>{obj.paymentMethod}</p>
                                                </td>
                                                <td>
                                                    <div id={Style.statusText} style={{ backgroundColor: statusBG, color: statusColor }}>{obj.status}</div>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }



                            </tbody>
                        </table>
                        {

                            coinPurchaseHistory.length == 0 ?

                                <div className={Style.no_queryDiv}>

                                    <p>No Recent Coin Purchase</p>
                                </div> : ""
                        }
                    </div>

                    <App_Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={userDetails.coinPurchaseHistory.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />

                    <p className={Style.Personal_Info_headerText}>Withdrawal History</p>

                    <div className={Style.date_inputDiv}>

                        <span>{selectedDate.toDateString()} <img src={arrow_down} onClick={toggleCalendar} alt="" /></span>

                        {
                            isCalendarOpen && (

                                <div id={Style.calendar_popup}>
                                    <Date_Picker onDateChange={handleDateChange} />
                                </div>
                            )
                        }

                        <div className={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <img className={Style.download_img} src={download} alt="" />
                    </div>

                    <div id={Style.Personal_Info_tableDiv}>

                        <table>

                            <thead>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Ref Number</th>
                                    <th>Time</th>
                                    <th>Country</th>
                                    <th>Coin Converted</th>
                                    <th>Amount Received</th>
                                    <th>Bank Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    withdrawalHistory.map((obj, index) => {

                                        const serialNumber = indexOfFirstPost + index + 1; // Calculate the correct serial number

                                        let statusColor = obj.status === "success" ? "#31C364" : obj.status === "failed" ? "red" : obj.status === "pending" ? "#FC9E2F" : obj.status === "reversed" ? "#939393" : ""
                                        let statusBG = obj.status === "success" ? "#31c36433" : obj.status === "failed" ? "#ff000033" : obj.status === "pending" ? "#fc9e2f33" : obj.status === "reversed" ? "#93939333" : ""


                                        return (

                                            <tr key={index}>
                                                <td>{serialNumber}</td>
                                                <td>{obj.refNumber}</td>
                                                <td>{obj.time}</td>
                                                <td>{obj.country}</td>
                                                <td>{obj.coinConverted}</td>
                                                <td>{obj.amountReceived}</td>
                                                <td>
                                                    <div id={Style.BankDetails_Div}>
                                                        <div>
                                                            <p>Bank</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.bankDetails.bank_name}</p>
                                                        </div>
                                                        <div>
                                                            <p>Account Number</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.bankDetails.account_number}</p>
                                                        </div><div>
                                                            <p>Account Name</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.bankDetails.account_name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id={Style.statusText} style={{ backgroundColor: statusBG, color: statusColor }}>{obj.status}</div>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>

                        {

                            userDetails.withdrawalHistory.length == 0 ?

                                <div className={Style.no_queryDiv}>

                                    <p>No Recent Withdrawal</p>
                                </div> : ""
                        }
                    </div>

                    <App_Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={userDetails.withdrawalHistory.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />

                    <p className={Style.Personal_Info_headerText}>Subscription History</p>

                    <div className={Style.date_inputDiv}>
                        <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>
                        <div className={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <img className={Style.download_img} src={download} alt="" />
                    </div>

                    <div id={Style.Personal_Info_tableDiv}>
                        <table>
                            <thead>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Date</th>
                                    <th>Ref Number</th>
                                    <th>Subscription Type</th>
                                    <th>Amount Paid</th>
                                    <th>Payment Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    transaction.map((obj, index) => {
 
                                        return (

                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{obj.refNumber}</td>
                                                <td>{obj.time}</td>
                                                <td>{obj.subType}</td>
                                                <td>{obj.amountPaid}</td>

                                                <td>
                                                    <div id={Style.BankDetails_Div}>
                                                        <div>
                                                            <p>Bank</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.bank}</p>
                                                        </div>
                                                        <div>
                                                            <p>Account Number</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.accNo}</p>
                                                        </div><div>
                                                            <p>Account Name</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.accName}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id={Style.statusText}>{obj.status}</div>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal_Info