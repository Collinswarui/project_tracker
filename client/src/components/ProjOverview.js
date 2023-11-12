import React from 'react'

export const ProjectOverview = ({ projects = [] }) => {
    return(
        <div className='overview'>
            <h3>Project Overview</h3>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <storng>{project.name}</storng>
                        <p>Deadline: {project.deadline}</p>
                        <p>Status: {project.status}</p>
                    </li>
                ))}
            </ul>
        </div>

    )
}