import { getMessageQueries, getQueryDetails, postQueryResolve, queryCount } from "../constant/url_path";
import { authAxios } from "./auth_services";



export const getQueryCountService = async () => {

    const response = await authAxios.get(queryCount);

   
    return response;
};


export const getMessageQueriesService = async () => {

    const response = await authAxios.get(getMessageQueries);


    return response;
};


export const getQueryDetailsService = async (url) => {

    console.log("Hello")

    const response = await authAxios.get(`${getQueryDetails}?${url}`);

    

    return response;
};

export const postQueryResolveService = async (body) => {

    const response = await authAxios.post(postQueryResolve, body);


    return response;
};
