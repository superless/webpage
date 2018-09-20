const path = require(`path`)
const _ = require('lodash');
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
              category
            }
          }
        }
      }
    `).then(result => {
      const categorySet = new Set();
      result.data.allContentfulPost.edges.map(({ node }) => {
        categorySet.add(node.category);
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/post.jsx`),
          context: {
            slug: node.slug,
          },
        })
      })
      
      
      const categoryList = Array.from(categorySet);
      categoryList.forEach(category => {
        
        createPage({
          path: `/categories/${_.kebabCase(category)}/`,
          component: path.resolve('./src/templates/category.jsx'),
          context: {
            category : category
          },
        });
      });

      
      resolve()
    })
  })

  // const loadPages = new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulPage {
  //         edges {
  //           node {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     result.data.allContentfulPage.edges.map(({ node }) => {
  //       createPage({
  //         path: `${node.slug}/`,
  //         component: path.resolve(`./src/templates/page.js`),
  //         context: {
  //           slug: node.slug,
  //         },
  //       })
  //     })
  //     resolve()
  //   })
  // })

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulTag.edges.map(({ node }) => {
      
        createPage({
          path: `tag/${node.slug}/`,
          component: path.resolve(`./src/templates/tag.jsx`),
          context: {
            tag: node.title,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadTags])
}
