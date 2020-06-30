const path = require(`path`);

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  const { errors } = result;

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);

    return;
  }

  const component = path.resolve(`src/pages/blog/_date/index.tsx`);

  result.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        component,
        path: slug,
      });
    }
  );
};
