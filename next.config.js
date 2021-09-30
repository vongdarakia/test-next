const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    reactStrictMode: true,
    images: isProduction
        ? {
              loader: "imgix",
              path: "/",
          }
        : undefined,
    basePath: isProduction ? "/test-nextjs" : "",
};
