import NextImage, { ImageProps } from "next/image";
import { getImagePath } from "utils/getImagePath";

export const Image = (props: ImageProps) => {
    return (
        <NextImage
            {...props}
            unoptimized={props.unoptimized !== undefined ? props.unoptimized : true}
            src={typeof props.src === "string" ? getImagePath(props.src) : props.src}
        />
    );
};
