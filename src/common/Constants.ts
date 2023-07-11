import { FormField } from "./Types";

export enum CATEGORIES {
    ALL = "all",
    COMPONENTS = "components",
    SINGLE_PAGE = "single-page"
}

export const contactFormFields:Array<FormField> = [
    {
        name: 'name',
        type: 'text',
        intialValue: '',
        htmlFieldType: 'input'
    },
    {
        name: 'email',
        type: 'email',
        intialValue: '',
        htmlFieldType: 'input',
    },
    {
        name: 'message',
        type: 'message',
        intialValue: '',
        htmlFieldType: 'textarea'
    }
];