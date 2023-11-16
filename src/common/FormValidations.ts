import { TextValidations } from "./Types";

export const generalTextValidations = (value:string, validations: TextValidations)=> {
    let isValid = true;
    let errorMsg = '';

    if(Object.keys(validations).length === 0) {
        return [isValid, errorMsg];
    }

    if(validations.mandatory && !value || !value.trim()) {
        isValid = false;
        errorMsg = "This field is mandatory";
        return [isValid, errorMsg];
    }

    if(validations.maxLength && (value.length > validations.maxLength)) {
        isValid = false;
        errorMsg = `Maxinum of ${validations.maxLength} are allowed`;
        return [isValid, errorMsg];
    }
    
    if(validations.minLength && (value.length < validations.minLength)) {
        isValid = false;
        errorMsg = `Minimum of ${validations.minLength} characters are needed`;
        return [isValid, errorMsg];
    }

    return [isValid, errorMsg];
}

export const generalEmailValidations = (email:string, validations: any) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = true;
    let errorMsg = ''

    if(validations.mandatory && !email || !email.trim()) {
        isValid = false;
        errorMsg = "This field is mandatory";
        return [isValid, errorMsg];
    }

    if (!emailRegex.test(email)) {
        isValid = false;
        errorMsg = 'Please enter a valid email';
        return [isValid, errorMsg]
    }

    return [isValid, errorMsg]

}

export const generalGithubLinkValidations = (link:string, validations: any) => {
    const githublinkRegex = /^https:\/\/github.com\/.*$/;
    let isValid = true;
    let errorMsg = ''

    if(validations.mandatory && !link || !link.trim()) {
        isValid = false;
        errorMsg = "This field is mandatory";
        return [isValid, errorMsg];
    }

    if (!githublinkRegex.test(link)) {
        isValid = false;
        errorMsg = 'Please enter a valid Github link';
        return [isValid, errorMsg]
    }

    return [isValid, errorMsg]

}