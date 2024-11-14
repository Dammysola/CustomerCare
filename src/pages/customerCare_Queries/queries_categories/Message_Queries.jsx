import React, { useEffect, useState } from 'react'
import Style from './Queries.module.css'
import Header from '../../../components/header/Header'
import Query_com from '../../../components/query_com/Query_com'
import { getMessageQueriesProvider } from '../../api_detaills/provider/query_provider'
import { PopupContextHook } from '../../../PopupContext'




const Message_Queries = () => {

    const {updateErrorPopup, updateErrorText} = PopupContextHook()

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
            },
            updateErrorPopup,
            updateErrorText
        });
    }, []);



    return (

        <div id={Style.mainDiv}>

            <Header
                headerText={"In-app Message Queries"}
                headerInfo={"let's get rolling"} 
            />

            <div id={Style.wrapperDiv}>

                <Query_com arr={messageQueries} />

            </div>
        </div>
    )
}

export default Message_Queries