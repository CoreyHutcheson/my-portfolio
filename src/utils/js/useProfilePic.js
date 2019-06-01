import { useStaticQuery, graphql } from "gatsby";

export const useProfilePic = () => {
  const data = useStaticQuery(graphql`
    query AllProfilePic {
      profilePicJson {
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
  `);

  return data.profilePicJson;
};
