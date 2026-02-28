const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPagesBuild && repo ? `/${repo}` : "",
  assetPrefix: isGithubPagesBuild && repo ? `/${repo}/` : "",
};

export default nextConfig;

