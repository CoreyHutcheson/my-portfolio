import React from "react";

import { useProjects } from "src/utils/js/useProjects";

const ProjectPanels = () => {
  const projects = useProjects();

  return projects.map(({ node }) => (
    <div>
      {node.img} - {node.text}
    </div>
  ));
};

export default ProjectPanels;
