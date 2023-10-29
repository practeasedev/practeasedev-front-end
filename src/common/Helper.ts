import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { IProjectDetails, IUserDetails } from "./Types";
import { JWT_TOKEN_COOKIE_NAME } from "./Constants";

export const checkIfLoggedIn = () => {
  const accessToken = Cookies.get(JWT_TOKEN_COOKIE_NAME);
  return accessToken ? true : false;
};

export const getLoggedInUserDetails = (): IUserDetails | null => {
  const accessToken = Cookies.get(JWT_TOKEN_COOKIE_NAME);
  const decodedToken = accessToken
    ? (jwtDecode(accessToken) as IUserDetails)
    : null;
  return decodedToken;
};

export const getCookieValue = (key: string): string | undefined =>
  Cookies.get(key);

export const setCookieValue = (key: string, value: string) => {
  Cookies.set(key, value, {
    expires: 0.2
  })
}

export const removeCookie = (key: string) => {
  Cookies.remove(key);
}

export const getFormattedDate = (timeStamp: number): string =>
  new Date(timeStamp).toLocaleString();

export const formatProjectDetails = (response: any): IProjectDetails => {
  const {
    _id,
    project_name,
    project_description,
    project_image,
    difficulty_level,
    category,
    figma_link,
    user_stories,
    download_link,
    key_concepts,
    resource_links,
    slug,
    likes,
  } = response || {};
  return {
    projectId: _id,
    projectName: project_name || "-",
    projectDescription: project_description || "-",
    projectImage: project_image || "",
    difficultyLevel: difficulty_level || "-",
    projectCategory: category || "-",
    projectFigmaLink: figma_link || "",
    userStories: user_stories || [],
    downloadLink: download_link || "",
    keyConcepts: key_concepts || [],
    resourceLinks: resource_links || [],
    slug: slug || '',
    likes: likes || 0,
  };
};
