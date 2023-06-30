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
        default:
            return null;
    }
};

export default SVG;
