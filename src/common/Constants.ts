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
        validations: {
            mandatory: true,
            minLength: 2
        }
    },
    {
        name: 'email',
        type: 'email',
        intialValue: '',
        validations: {
            mandatory: true,
        }
    },
    {
        name: 'message',
        type: 'text',
        intialValue: '',
        validations: {
            mandatory: true,
        }
    }
];