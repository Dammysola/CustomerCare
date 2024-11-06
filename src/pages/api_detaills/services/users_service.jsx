import axios from "axios";
import { getUserDetails } from "../constant/url_path";






export const getUserDetailsService = async (phone) => {

    const response = await axios.get(`${getUserDetails}/${phone}`);


    console.log(response);
    
    return response;
};