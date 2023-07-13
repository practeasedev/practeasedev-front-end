import { CATEGORIES, DIFFICULTY_LEVEL } from "./Constants";

export type TextValidations = {
  maxLength: number;
  minLength: number;
};

export type FormField = {
  name: string;
  type: string;
  intialValue: string | number;
  htmlFieldType: string;
  validations?: any;
};

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
