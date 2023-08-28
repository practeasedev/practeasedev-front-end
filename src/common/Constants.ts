import { FormField } from "./Types";

export enum CATEGORIES {
  ALL = "all",
  COMPONENTS = "components",
  SINGLE_PAGE = "single-page",
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

export enum DIFFICULTY_LEVEL {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
};

export const INTERSECTION_OBSERVER_OPTIONS = {
    root: null,
    threshold:0.05,
    triggerOnce:true,
};

export const TOAST_SETTINGS = {
    duration: 2000
};

export const JWT_TOKEN_COOKIE_NAME = 'accessToken'