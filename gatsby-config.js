/* eslint-disable */
const path = require("path");

module.exports = {
  siteMetadata: {
    description: process.env.npm_package_description,
    homepage: process.env.npm_package_homepage,
    name: process.env.npm_package_name,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kk-web`,
        short_name: `kk-web`,
        start_url: `/`,
        background_color: `#234794`,
        theme_color: `#b33e5c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Muli", "Poiret+One"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        filetypes: {
          ".scss": { syntax: `postcss-scss` },
        },
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        hooks: path.join(__dirname, "src/hooks"),
        styles: path.join(__dirname, "src/styles"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-59624553-5",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NVKSTRC",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-2447798512998125`,
      },
    },
    {
      resolve: "gatsby-plugin-mixpanel",
      options: {
        apiToken: "21ddd8b89e954ea21013dff62ec7ec2c",
        enableOnDevMode: false,
      },
    },
  ],
};
