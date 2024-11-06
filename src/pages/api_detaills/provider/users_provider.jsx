import { getUserDetailsService } from "../services/users_service";





export const getUserDetailsProvider = async ({ updateUserDetails, phone, updateErrorText, updateErrorPopup }) => {


    try {

        let response = await getUserDetailsService(phone)

        if (response.status == 200 || response.status == 201) {

            updateUserDetails(response.data["responseBody"])

            console.log(response.data["responseBody"]);


        } else {
            updateLoadingPopup(false);
            updateErrorText(response.data["responseMessage"]);

            console.log("Error :", err);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

    } catch (error) {

        updateErrorText(error.responseMessage)
        console.log("Error :", error);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

        console.log("Error :", error);

    }

}