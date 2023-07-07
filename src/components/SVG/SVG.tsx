import { FC } from "react";

interface ISVGProps {
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
    iconName: string;
}

const DEFAULT_DIMENSION = "24";
const DEFAULT_COLOR = "#00000";

const SVG: FC<ISVGProps> = (props) => {
    const { width, height, fill, className, iconName } = props;
    switch (iconName) {
        case "book":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    fill={fill || DEFAULT_COLOR}
                    className={className || ""}
                >
                    <path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm266-474 97-56 97 56v-266H486v266Z" />
                </svg>
            );
        case "heart":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    fill={fill || DEFAULT_COLOR}
                    className={className || ""}
                >
                    <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" />
                </svg>
            );
        case "page":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    fill={fill || DEFAULT_COLOR}
                    className={className || ""}
                >
                    <path d="M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554h189L551-820v186Z" />
                </svg>
            );
        case "bulb":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    fill={fill || DEFAULT_COLOR}
                    className={className || ""}
                >
                    <path d="M480-80q-34 0-57.5-23.5T399-161h162q0 34-23.5 57.5T480-80ZM318-223v-60h324v60H318Zm5-121q-66-43-104.5-107.5T180-597q0-122 89-211t211-89q122 0 211 89t89 211q0 81-38 145.5T637-344H323Z" />
                </svg>
            );
        case "download":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    fill={fill || DEFAULT_COLOR}
                    className={className || ""}
                >
                    <path d="M251-160q-88 0-149.5-61.5T40-371q0-78 50-137t127-71q18-90 83-150t151-68v349l-83-83-43 43 156 156 156-156-43-43-83 83v-349q101 11 169 90t68 185v24q72-2 122 46.5T920-329q0 69-50 119t-119 50H251Z" />
                </svg>
            );
        case "comment":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    fill={fill || DEFAULT_COLOR}
                    className={className || ""}
                >
                    <path d="M240-400h480v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM140-240q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v740L720-240H140Z" />
                </svg>
            );
        case "figma":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 0 48 48"
                    width={width || DEFAULT_DIMENSION}
                    className={className || ""}
                >
                    <path
                        fill="#e64a19"
                        d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                    />
                    <path
                        fill="#7c4dff"
                        d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                    />
                    <path
                        fill="#66bb6a"
                        d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                    />
                    <path
                        fill="#ff7043"
                        d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                    />
                    <circle cx="32" cy="24" r="7" fill="#29b6f6" />
                </svg>
            );
        case "mail":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    className={className || ""}
                    fill={fill || DEFAULT_COLOR}
                >
                    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302 340-223v-55L480-522 140-740v55l340 223Z" />
                </svg>
            );
        case "send":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    className={className || ""}
                    fill={fill || DEFAULT_COLOR}
                >
                    <path d="M120-160v-245l302-75-302-77v-243l760 320-760 320Z" />
                </svg>
            );
        case "github":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    className={className || ""}
                    fill={fill || DEFAULT_COLOR}
                >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            );
        case "linkedIn":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    className={className || ""}
                    fill={fill || DEFAULT_COLOR}
                >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            );
        case "chevron-down":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height || DEFAULT_DIMENSION}
                    viewBox="0 -960 960 960"
                    width={width || DEFAULT_DIMENSION}
                    className={className || ""}
                    fill={fill || DEFAULT_COLOR}
                >
                    <path d="m480-351 173-173-43-42-130 130-130-130-43 42 173 173Zm0 271q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z" />
                </svg>
            );
        default:
            return null;
    }
};

export default SVG;
