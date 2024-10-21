import React, { useEffect, useState } from 'react'
import Style from './Queries.module.css'
import Header from '../../../components/header/Header'
import microphone from '../../../assets/svg/microphone.svg'
import recording from '../../../assets/svg/recording.svg'
import capture from '../../../assets/svg/capture.svg'
import Query_com from '../../../components/query_com/Query_com'
import { getMessageQueriesProvider } from '../../api_detaills/provider/auth_provider'




const Message_Queries = () => {


    const [messageQueries, setMessageQueries] = useState({
        incomingQueries: [],
        resolvedQueries: [],
        escalatedQueries: []
    })


    useEffect(() => {
        getMessageQueriesProvider({
            updateMessageQueries: (data) => {
                setMessageQueries({
                    incomingQueries: data.incomingQueries || [],
                    resolvedQueries: data.resolvedQueries || [],
                    escalatedQueries: data.escalatedQueries || []
                });
            }
        });
    }, []);

    console.log(messageQueries);



    return (
        <div id={Style.mainDiv}>

            <Header
                headerText={"In-app Message Queries"}
                headerInfo={"let's get rolling"} />

            <div id={Style.wrapperDiv}>

                <Query_com arr={messageQueries} />

            </div>
        </div>
    )
}

export default Message_Queries