export type TextValidations = {
    maxLength: number;
    minLength: number;
}

export type FormField = {
    name: string
    type: string
    intialValue: string | number
    htmlFieldType: string
    validations?: any
}