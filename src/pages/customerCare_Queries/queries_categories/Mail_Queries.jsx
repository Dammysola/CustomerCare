import React from 'react'
import Style from "./Queries.module.css"
import Header from '../../../components/header/Header'
import microphone from '../../../assets/svg/microphone.svg'
import recording from '../../../assets/svg/recording.svg'
import capture from '../../../assets/svg/capture.svg'
import Query_com from '../../../components/query_com/Query_com'



const Mail_Queries = () => {

    const message_arr = [
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pending",
            attachments: {
                img: microphone,
                img2: recording,
                img3: capture,
                text1: "4:23",
                text2: "Play Recording",
                text3: "Photo",
                text4: "View Photo"

            },
            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "Review"
            }
        },

        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Closed",
            attachments: {
                img: microphone,
                img2: recording,
                img3: capture,
                text1: "4:23",
                text2: "Play Recording",
                text3: "Photo",
                text4: "View Photo"

            },
            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "Review"
            }
        },

        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Closed",
            attachments: {
                img: microphone,
                img2: recording,
                img3: capture,
                text1: "4:23",
                text2: "Play Recording",
                text3: "Photo",
                text4: "View Photo"

            },
            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "Review"
            }
        },

        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Closed",
            attachments: {
                img: microphone,
                img2: recording,
                img3: capture,
                text1: "4:23",
                text2: "Play Recording",
                text3: "Photo",
                text4: "View Photo"

            },
            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "Review"
            }
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pending",
            attachments: {
                img: microphone,
                img2: recording,
                img3: capture,
                text1: "4:23",
                text2: "Play Recording",
                text3: "Photo",
                text4: "View Photo"

            },
            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "Review"
            }
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pending",
            attachments: {
                img: microphone,
                img2: recording,
                img3: capture,
                text1: "4:23",
                text2: "Play Recording",
                text3: "Photo",
                text4: "View Photo"

            },
            action: {
                close: "close",
                reaccess: "Reassess",
                reviews: "Review"
            }
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "In-progress",
            attachments: {
                img: microphone,
                img2: recording,
                img3: capture,
                text1: "4:23",
                text2: "Play Recording",
                text3: "Photo",
                text4: "View Photo"

            },
            action: {
                close: "close",
                reaccess: "Reassess"

            }
        },

        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "In-progress",
            attachments: {
                img: microphone,
                img2: recording,
                img3: capture,
                text1: "4:23",
                text2: "Play Recording",
                text3: "Photo",
                text4: "View Photo"

            },
            action: {
                close: "close",
                reaccess: "Reassess"

            }
        },

        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            username: "Lighty",
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate. Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "In-progress",
            attachments: {
                img: microphone,
                img2: recording,
                img3: capture,
                text1: "4:23",
                text2: "Play Recording",
                text3: "Photo",
                text4: "View Photo"

            },
            action: {
                close: "close",
                reaccess: "Reassess"

            }
        },
    ]


  return (
    <div id={Style.mainDiv}>
        <Header
                headerText={"Mail Queries"}
                headerInfo={"let's get rolling"} />

            <Query_com arr ={message_arr}/>
    </div>
  )
}

export default Mail_Queries