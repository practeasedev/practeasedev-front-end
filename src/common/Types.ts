export type TextValidations = {
    mandatory?: boolean
    maxLength?: number
    minLength?: number
}

export type EmailValidations = {
    mandatory?: boolean
}

export type FormField = {
    name: string
    type: string
    intialValue: string | number
    validations?: any
}