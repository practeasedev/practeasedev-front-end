const API_VERSION_1 = "/api/v1";
export const BASE_URL_DEV = "http://localhost:5000";
export const BASE_URL_PREPROD = "https://api-dev.practeasedev.com";
export const BASE_URL_PROD = "https://api.practeasedev.com";
export const BASE_URL = BASE_URL_PROD;

export const GITHUB_AUTHORIZE = "https://github.com/login/oauth/authorize";

// Auth routes
export const LOGIN_OR_REGISTER = `${API_VERSION_1}/auth/register`;
export const LOGOUT_USER = `${API_VERSION_1}/auth/logout`;

// Project routes
export const GET_ALL_PROJECTS = `${API_VERSION_1}/projects`;

// Mail route
export const SEND_CONTACT_EMAIL = `${API_VERSION_1}/mails/send-contact-email`;

// Comments routes
export const GET_COMMENTS = `${API_VERSION_1}/comments/get_comments`;
export const POST_COMMENT = `${API_VERSION_1}/comments/add_comment`;

// Project tracking
export const GET_PROJECT_STATUS = `${API_VERSION_1}/user_tracking/get`;
export const POST_PROJECT_STATUS = `${API_VERSION_1}/user_tracking/persist`

//Download routes
export const DOWNLOAD_PROJECT = `${API_VERSION_1}/download`
