import { getMessageQueriesService, getQueryCountService, getQueryDetailsService, postQueryResolveService } from "../services/query_services";



export const getQueryCountProvider = async ({ updateQueryCount, updateErrorPopup, updateErrorText }) => {

    try {

        let response = await getQueryCountService()

        if (response.status == 200) {

            updateQueryCount(response.data["responseBody"]);


        } else {
            updateErrorText(response.data["responseMessage"]);
            console.log("Error :", err);
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }


    } catch (err) {

        updateErrorText( err.response.data.message || "An unexpected error occurred.")
        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }

}


export const getMessageQueriesProvider = async ({ updateMessageQueries, updateErrorPopup, updateErrorText }) => {

    try {

        let response = await getMessageQueriesService()

        if (response.status == 200) {

            updateMessageQueries(response.data["responseBody"]);


        } else {
            updateErrorText(response.data["responseMessage"]);
            console.log("Error :", err);
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

    } catch (err) {

        updateErrorText( err.response.data.message || "An unexpected error occurred.")

        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }

}


export const getQueryDetailsProvider = async ({ updateQueryDetails, url }) => {

    try {
        let response = await getQueryDetailsService(url)

        if (response.status == 200) {

            updateQueryDetails(response.data["responseBody"]);

            console.log("Success:", response.data["responseBody"]);

        } else {
            updateErrorText(response.data["responseMessage"]);
            console.log("Error :", err);
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

    } catch (err) {

        updateErrorText( err.response.data.message || "An unexpected error occurred.")
        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }

}


export const postQueryResolveProvider = async (body, updateLoadingPopup, updateConfirmResolutionPopup, updateErrorText, updateErrorPopup, updateSuccessResolutionPopup) => {

    try {

        updateLoadingPopup(true)

        let response = await postQueryResolveService(body);

        if (response.status === 200 || response.status === 201) {

            updateLoadingPopup(false)

            updateConfirmResolutionPopup(false)

            updateSuccessResolutionPopup(true)

        } else {
            updateErrorText(response.data["responseMessage"]);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

    } catch (err) {

        updateLoadingPopup(false);

        updateErrorText( err.response.data.responseMessage || "Resolution failed");

        updateErrorPopup(true);
        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);

    }
}
