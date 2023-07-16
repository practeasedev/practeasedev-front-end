import { CATEGORIES, DIFFICULTY_LEVEL } from "./Constants";

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

export interface IUserDetails {
  userId: string;
  avatarUrl: string;
  userName: string;
  email: string;
}

export interface ICommentDetails {
  _id: string;
  comment: string;
  modified_on: number;
  user_avatar_url: string;
  user_name: string;
}

export interface IProjectDetails {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectImage: string;
  difficultyLevel: DIFFICULTY_LEVEL;
  projectCategory: CATEGORIES;
  projectFigmaLink: string;
  userStories: string[];
  downloadLink: string;
  keyConcepts: string[];
  resourceLinks: string[];
  likes: number;
}
