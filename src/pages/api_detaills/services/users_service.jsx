import { getUserDetails, getUsers } from "../constant/url_path";
import { authAxios } from "./auth_services";



export const getAllUsersService = async () => {

    const response = await authAxios.get(getUsers);


    return response;
};


export const getUserDetailsService = async (phone) => {

    const response = await axios.get(`${getUserDetails}/${phone}`);


    return response;
};


