import { useNavigate } from "react-router-dom";
import { login_service } from "../services/auth_services"


//The Provider is used to handle the response of the service ! 
//Which means the service is being called inside the provider



export const login_provider = async (body, navigate, updateSignInSuccess, updateLoadingPopup, updateErrorText, updateErrorPopup) => {

    try {

        updateLoadingPopup(true);

        let response = await login_service(body);

        if (response.status === 200 || response.status === 201) {

            updateLoadingPopup(false);

            updateSignInSuccess(true)

            setTimeout(() => {
                
                updateSignInSuccess(false)

                navigate("/dashboard");

            }, 2000)


        } else {
            updateLoadingPopup(false);
            updateErrorText(response.data["responseMessage"]);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }


    } catch (err) {

        updateLoadingPopup(false);

        updateErrorText(err.response ? err.response.data.responseMessage : "Login failed");

        updateErrorPopup(true);
        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);

    }
}

