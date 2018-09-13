const config = require("./config/website");
let contentfulConfig;

try {
  contentfulConfig = require("./.contentful");
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN
    }
  };
} finally {
  const { spaceId, accessToken } = contentfulConfig.production;
  if (!spaceId || !accessToken) {
    throw new Error(
      "Contentful space ID and access token need to be provided."
    );
  }
}

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl,
      feed_url: `${config.siteUrl}/rss.xml`,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl}${config.siteLogo}`,
      author: config.author,
      copyright: config.copyright,
    }
  },
  /* Plugins */
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`
          },
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: "white",
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-contentful",
      options:
        process.env.NODE_ENV === "development"
          ? contentfulConfig.development
          : contentfulConfig.production
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
        anonymize: true
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "config/typography.js"
      }
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteShortName,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "fullscreen",
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://mintfort.us12.list-manage.com/subscribe/post?u=52c52522e40057472766a9ee3&amp;id=304a96c331"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`
      }
    },
    "gatsby-plugin-netlify",
    /* Must be placed at the end */
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "Trifenix";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata;
              return ctx.query.allContentfulPost.edges.map(edge => ({
                date: edge.node.publishDate,
                title: edge.node.title,
                description: edge.node.body.childMarkdownRemark.excerpt,

                url: rssMetadata.site_url + "/" + edge.node.slug,
                guid: rssMetadata.site_url + "/" + edge.node.slug,
                custom_elements: [
                  {
                    "content:encoded": edge.node.body.childMarkdownRemark.html
                  }
                ]
              }));
            },
            query: `
              {
            allContentfulPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
               edges {
                 node {
                   title
                   slug
                   publishDate(formatString: "MMMM DD, YYYY")
                   body {
                     childMarkdownRemark {
                       html
                       excerpt(pruneLength: 80)
                     }
                   }
                 }
               }
             }
           }
      `,
            output: "/rss.xml"
          }
        ]
      }
    }
    
  ]
};
