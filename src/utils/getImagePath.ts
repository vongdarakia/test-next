export const imagePrefix =
    process.env.NODE_ENV === "production" ? `https://vongdarakia.github.io/test-nextjs` : "";

export const getImagePath = (imagePath: string) => {
    return `${imagePrefix}${imagePath}`;
};
