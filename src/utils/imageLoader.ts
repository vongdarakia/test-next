import { imagePrefix } from "./getImagePath";

export const imageLoader = ({ src, width, height }) => {
    return `${imagePrefix}${src}`;
};
