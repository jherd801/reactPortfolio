import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectData from '../../utils/projects.json';

function ProjectContainer() {
    const projects = ProjectData

    return (
        <div>
            <h2>A few examples of past projects</h2>
            <div>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        liveLink={project.liveLink}
                        repoLink={project.repoLink}
                        screenshot={project.screenshot}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer;