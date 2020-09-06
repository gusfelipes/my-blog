const postsQuery = `{
    posts: allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date })
    {
        edges {
            node {
                objectID: id
                fields {
                    slug
                }
                frontmatter {
                    background
                    category
                    date_timestamp: date
                    date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                    description
                    title
                }
                excerpt(pruneLenght:5000)
            }
        }
    }
}`

const faltten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmattter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))
const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: "Posts",
    settings: {
      attributesToSnippet: ["excerpt:20"],
    },
  },
]

module.exports = queries
