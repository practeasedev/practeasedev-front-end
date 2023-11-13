import { ChangeEvent, useState, useEffect } from "react"
import { FormField } from "./Types";
import { generalEmailValidations, generalGithubLinkValidations, generalTextValidations } from "./FormValidations";
import { Router } from "next/router";

export const useForm = (formFields:Array<FormField>, customValidations?:(values: any, setErrors:React.Dispatch<React.SetStateAction<any>>) => boolean) => {

    const fieldsIntialState:any = {}
    const fieldsErrorIntialState:any = {}
    const fieldValidations:any = {}
    
    formFields.forEach((field) => {
        fieldsIntialState[field.name] = field.intialValue;
        fieldsErrorIntialState[field.name] = '';
        fieldValidations[field.name] = field.validations;
    })

    const [values, setValues] = useState<any>(fieldsIntialState);
    const [errors, setErrors] = useState<any>(fieldsErrorIntialState);

    const setFormField = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ,fieldName:string, fieldType: string) => {
        const {value} = event.target;
        setValues((prevValues:any) => ({...prevValues, [fieldName]: value}));

        if(errors[fieldName]) {
           const  [isValid, errorMsg] = generalValidations(value, fieldType, fieldValidations[fieldName]);
           setErrors((prevErrors:any) => ({...prevErrors, [fieldName] : isValid ? '' : errorMsg}));
        }
    }

    const generalValidations = (value:string, fieldType: string, validations: any) => {
        switch(fieldType) {
            case 'text':
                return generalTextValidations(value, validations || {});
            case 'email':
                return generalEmailValidations(value, validations || {});
            case 'githubLink':
                return generalGithubLinkValidations(value, validations || {});
            default:
                return [true, ''];
        }
    }

    const validateForm = () => {
        let isGeneralValid:boolean = true;
        let isCustomValid: boolean = true;

        formFields.forEach((field) => {
            const [isValid, errorMsg] = generalValidations(values[field.name], field.type, field.validations);
            if(!isValid) {
                setErrors((prevErrors:any) => ({...prevErrors, [field.name] : errorMsg }));
                isGeneralValid = false;
            }
        });

        if(customValidations) {
            isCustomValid = customValidations(values, setErrors)
        }

        return (isGeneralValid && isCustomValid);
    }    

    const resetForm = () => {
        formFields.forEach(({name}) => setValues((prevValues:any) => ({...prevValues, [name]: ""})))
    }
    
    return {values, errors, setFormField, validateForm, resetForm}
}

export const  usePageLoading = () => {
    const [isPageLoading, setIsPageLoading] = useState(false);
  
    useEffect(() => {
      const routeEventStart = () => {
        setIsPageLoading(true);
      };
      const routeEventEnd = () => {
        setIsPageLoading(false);
      };
  
      Router.events.on('routeChangeStart', routeEventStart);
      Router.events.on('routeChangeComplete', routeEventEnd);
      Router.events.on('routeChangeError', routeEventEnd);
      return () => {
        Router.events.off('routeChangeStart', routeEventStart);
        Router.events.off('routeChangeComplete', routeEventEnd);
        Router.events.off('routeChangeError', routeEventEnd);
      };
    }, []);
  
    return { isPageLoading };
  };
