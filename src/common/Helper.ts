import { access } from "fs";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { FormField, IProjectDetails } from "./Types";

export const checkIfLoggedIn = () => {
  const accessToken = Cookies.get("accessToken");
  return accessToken ? true : false;
};

export const getLoggedInUserDetails = () => {
  const accessToken = Cookies.get("accessToken");
  const decodedToken = accessToken ? jwtDecode(accessToken) : null;
  return decodedToken;
};

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
    likes: likes || 0,
  };
};
