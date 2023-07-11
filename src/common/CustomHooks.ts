import { ChangeEvent, useState } from "react"
import { FormField } from "./Types";

export const useForm = (formFields:Array<FormField>, validations?:(values: any) => [string, boolean]) => {

    const fieldsIntialState:any = {}
    const fieldsErrorIntialState:any = {}
    
    formFields.forEach((field) => {
        fieldsIntialState[field.name] = field.intialValue;
        fieldsErrorIntialState[field.name] = '';
    })

    const [values, setValues] = useState<any>(formFields);
    const [errors, setErrors] = useState<any>(formFields);

    const setFormField = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ,fieldName:string) => {
        const {value} = event.target;
        const newValues = {...values};
        newValues[fieldName] = value;
        setValues(newValues);
    }

    const validateForm = () => {
        let error
        Object.keys(values).every((value) => {

        })
    }    
    
    return {values, errors, setFormField, validateForm}
}