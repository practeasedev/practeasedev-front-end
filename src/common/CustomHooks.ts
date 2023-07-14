import { ChangeEvent, useState } from "react"
import { FormField } from "./Types";
import { generalEmailValidations, generalTextValidations } from "./FormValidations";

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
    
    return {values, errors, setFormField, validateForm}
}