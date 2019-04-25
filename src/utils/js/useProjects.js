import { useStaticQuery, graphql } from "gatsby";

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    query AllProjects {
      allProjectsJson {
        edges {
          node {
            img
            text
          }
        }
      }
    }
  `);

  return data.allProjectsJson.edges;
};
