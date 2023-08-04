import toast from 'react-hot-toast';
import { BASE_URL, LOGOUT_USER } from './APIPaths';
import React from 'react';
import { getCookieValue } from './Helper';
import { TOAST_SETTINGS } from './Constants';

interface IAPIProps {
    url: string,
    loadingHandler?: React.Dispatch<React.SetStateAction<boolean>>,
    authRequired?: boolean,
    constructUrl?: boolean
}

interface IGetProps extends IAPIProps {};

interface IPostProps extends IAPIProps {
    body: any
};

interface IPutProps extends IAPIProps {
    body: any
};

interface IDeleteProps extends IAPIProps {
    body?: any
};

const handleAPIStatuses = (apiResult: any, apiResponse:any) => {
    switch(apiResult.status) {
        case 200:
            return;
        case 400:
        case 500:
            toast.error(apiResponse.message, TOAST_SETTINGS);
            toast.error(apiResponse.message, TOAST_SETTINGS);
            break;
        case 401:
            toast.error(apiResponse.message, TOAST_SETTINGS);
            remove({
                url: LOGOUT_USER
            }).then((res) => {
                if(res.success) {
                    window.location.href="/";
                }
            })
            break;
        default:
            return;
    }
}

export const get = async ({url, loadingHandler, authRequired = true, constructUrl=true} : IGetProps ) => {
    loadingHandler?.(true);
    try {
        const accessToken = getCookieValue("accessToken");
        const apiUrl = constructUrl ? `${BASE_URL}${url}` : url;
        const apiGetResult = await fetch(apiUrl, {
            method: 'GET',
            credentials: 'include',
            headers: {...(authRequired? {Authorization: `Bearer ${accessToken}`}: null)}
        });    
        console.log(apiGetResult);
        const apiResponse = await apiGetResult.json();
        handleAPIStatuses(apiGetResult, apiResponse);
        
        loadingHandler?.(false);
        return apiResponse;
    } catch (error: unknown) {
        loadingHandler?.(false);
        toast.error('Something went wrong', TOAST_SETTINGS);
        return false;
    }
}

export const post = async ({url, body, loadingHandler, authRequired = true, constructUrl=true}:IPostProps) => {
    loadingHandler?.(true);
    try {
        const accessToken = getCookieValue("accessToken");
        const apiUrl = constructUrl ? `${BASE_URL}${url}` : url;
        const apiPostResult = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                ...(authRequired? {Authorization: `Bearer ${accessToken}`}: null)
            },
        });

        const apiResponse = await apiPostResult.json();
        handleAPIStatuses(apiPostResult, apiResponse);

        loadingHandler?.(false);
        return apiResponse;
    } catch (error: unknown) {
        loadingHandler?.(false);
        toast.error('Something went wrong', {
            duration: 2000,
        })
        return false;
    }
}

export const put = async ({url, body, loadingHandler, authRequired = true,  constructUrl=true}:IPutProps) => {
    loadingHandler?.(true);
    try {
        const accessToken = getCookieValue("accessToken");
        const apiUrl = constructUrl ? `${BASE_URL}${url}` : url;
        const apiPutReslt = await fetch(apiUrl, {
            method: 'POST',
            credentials: 'include',
            body,
            headers: {
                "Content-Type": "application/json",
                ...(authRequired? {Authorization: `Bearer ${accessToken}`}: null)
            }
        });

        const apiResponse = await apiPutReslt.json();
        handleAPIStatuses(apiPutReslt, apiResponse);
        loadingHandler?.(false);
        return apiResponse;
    } catch (error: unknown) {
        loadingHandler?.(false);
        toast.error('Something went wrong', {
            duration: 2000,
        })
    }
}


export const remove = async ({url, body, loadingHandler, authRequired = true,  constructUrl=true}:IDeleteProps) => {
    loadingHandler?.(true);
    try {
        const apiUrl = constructUrl ? `${BASE_URL}${url}` : url;
        const accessToken = getCookieValue("accessToken");
        const apiDeleteResult = await fetch(apiUrl, {
            method: 'DELETE',
            credentials: 'include',
            ...(body ? {body: JSON.stringify(body)} : null),
            headers: {
                "Content-Type": "application/json",
                ...(authRequired? {Authorization: `Bearer ${accessToken}`}: null)
            }
        });

        const apiResponse = await apiDeleteResult.json();
        handleAPIStatuses(apiDeleteResult, apiResponse);
        
        loadingHandler?.(false);
        return apiResponse;
    } catch (error: unknown) {
        loadingHandler?.(false);
        toast.error('Something went wrong', {
            duration: 2000,
        })
    }
}

