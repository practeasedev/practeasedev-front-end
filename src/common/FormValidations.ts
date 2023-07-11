import { TextValidations } from "./Types";

export const generalTextValidations = (value:string, validations: TextValidations)=> {
    let isValid = true;
    let error = '';

    if(validations.maxLength && (value.length > validations.maxLength)) {
        isValid = false;
        error = `Maxinum of ${validations.maxLength} are allowed`;
        return [error,isValid]
    }
    
    if(validations.minLength && (value.length < validations.maxLength)) {
        isValid = false;
        error = `Minimum of ${validations.minLength} are needed`;
        return [error,isValid]
    }

    return [error,isValid]
}

export const generaalEmailValidations = (email:string, validations: any) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = true;
    let error = ''


    if (!emailRegex.test(email)) {
        isValid = false;
        error = 'Please enter a valid email';
        return [error, isValid]
    }

    return [error, isValid]

}