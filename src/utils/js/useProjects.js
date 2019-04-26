import { useStaticQuery, graphql } from "gatsby";

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    query AllProjects {
      allProjectsJson {
        edges {
          node {
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
            title
          }
        }
      }
    }
  `);

  return data.allProjectsJson.edges;
};
