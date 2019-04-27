import { useStaticQuery, graphql } from "gatsby";

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    query AllProjects {
      allProjectsJson {
        edges {
          node {
            id
            title
            img {
              src {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              alt_text
            }
          }
        }
      }
    }
  `);

  return data.allProjectsJson.edges;
};
