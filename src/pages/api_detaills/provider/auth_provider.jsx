import { useNavigate } from "react-router-dom";
import { login_service, getAllUsersService, getQueryCountService, getQueryDetailsService, postQueryResolveService } from "../services/auth_services"



//The Provider is used to handle the response of the service ! 
//Which means the service is being called inside the provider



export const login_provider = async (body, navigate, updateLoadingPopup, updateErrorText, updateErrorPopup ) => {

    try {
        updateLoadingPopup(true);
        let response = await login_service(body);

        if (response.status === 200 || response.status === 201) {
            console.log("Login Success");

            updateLoadingPopup(false);
            navigate("/dashboard");
        } else {
            throw new Error('Login failed');
        }
    } catch (err) {
        updateLoadingPopup(false);
        updateErrorText( err.response.data.responseMessage || "Login failed");
        console.log("Error :", err);
        updateErrorPopup(true);
        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);
    }
}


export const getAllUsersProvider = async ({ updateUsers }) => {
    try {
        let response = await getAllUsersService()

        if (response.status == 200) {
      

            updateUsers(response.data["responseBody"]);

            console.log(response.data["data"]);
        }



    } catch (err) {

        // updateErrorText(err.response.data.message)
        console.log("Error :", err);
        // updateErrorPopup(true)
        // setTimeout(() => {
        //     updateErrorPopup(false)
        // }, 2000)
    }


}


export const getQueryCountProvider = async ({ updateQueryCount }) => {

    try {
        let response = await getQueryCountService()

        if (response.status == 200) {

            updateQueryCount(response.data["responseBody"]);

            console.log(response.data["responseBody"]);
        }

        console.log("eeey:", response.data["responseBody"]);

    } catch (err) {

        // updateErrorText(err.response.data.message)
        console.log("Error :", err);
        // updateErrorPopup(true)
        // setTimeout(() => {
        //     updateErrorPopup(false)
        // }, 2000)
    }

}

export const getMessageQueriesProvider = async ({ updateMessageQueries }) => {

    try {
        let response = await getQueryCountService()

        if (response.status == 200) {

            updateMessageQueries(response.data["responseBody"]);

            console.log(response.data["responseBody"]);
        }

        console.log("eeey:", response.data["responseBody"]);

    } catch (err) {

        console.log("Error :", err);
       
    }

}

export const getQueryDetailsProvider = async ( {updateQueryDetails, url }) => {

    try {
        let response = await getQueryDetailsService(url)

        if (response.status == 200) {

            updateQueryDetails(response.data["responseBody"]);

            console.log("Success:", response.data["responseBody"]);
        }


    } catch (err) {

        console.log("Error :", err);
       
    }

}


export const postQueryResolveProvider = async (body, updateLoadingPopup, updateConfirmResolutionPopup, updateErrorText, updateErrorPopup, updateSuccessResolutionPopup) => {

    try {

        updateLoadingPopup(true)

        let response = await postQueryResolveService(body);

        if (response.status === 200 || response.status === 201) {
            console.log("resolution Success");

            updateLoadingPopup(false)

            updateConfirmResolutionPopup(false)

            updateSuccessResolutionPopup(true)

        } else {
            updateLoadingPopup(false)
            console.log(response.data);
            throw new Error('Resolution failed', response.data);
        }
    } catch (err) {
       
        updateLoadingPopup(false);
        updateErrorText( err.response.data.responseMessage || "Resolution failed");
        console.log("Error :", err);
        updateErrorPopup(true);
        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);
       
    }
}