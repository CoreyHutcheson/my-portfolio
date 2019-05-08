import { useStaticQuery, graphql } from "gatsby";

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    query AllProjects {
      allProjectsJson {
        edges {
          node {
            id
            title
            tag
            description
            technologies
            link
            github
            images {
              alt_text
              src {
                id
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allProjectsJson.edges;
};
