import { FormField } from "./Types";

export enum CATEGORIES {
  ALL = "all",
  COMPONENTS = "components",
  SINGLE_PAGE = "single-page",
}

export const CONTACT_FORM_FIELDS:Array<FormField> = [
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

export const SOLUTION_FORM_LINKS:Array<FormField> = [
    {
        name: 'githubLink',
        type: 'githubLink',
        intialValue: '',
        validations: {
            mandatory: true,
        }
    },
    {
        name: 'comments',
        type: 'text',
        intialValue: '',
        validations: {
            mandatory: true,
        }
    }
]

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

export const JWT_TOKEN_COOKIE_NAME = 'accessToken';

export const SOLUTION_PAGE_SIZE = 5;

export const REASONS_FOR_ACCOUNT_DELETE = [
    {
        label: 'No longer use the website',
        value: 'no longer use the website'
    },
    {
        label: 'Privacy and Security Concerns',
        value: 'privacy and security concerns',
    },
    {
        label: 'Found a better alternative',
        value: 'found better alternative',
    },
    {
        label: 'Account created by mistake',
        value: 'account created by mistake',
    },
    {
        label: 'Other',
        value: 'other' 
    }
];
