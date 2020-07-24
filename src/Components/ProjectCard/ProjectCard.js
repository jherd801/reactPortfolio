// import React from 'react';
// import './style.css';

// function ProjectCard({ title, description, liveLink, repoLink, screenshot }) {
//     return (
//         <div className="project-card">
//             <div className="project-img">
//                 <img src={screenshot} alt="project screenshot" className="screenshot"/>
//             </div>
//             <div className="project-content">
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//             </div>
//             <div className="project-btns">
//                 <button type="button" className="card-btn link-btn" onClick={() => (window.open(liveLink, '_blank'))}>
//                     View Live Project
//                 </button>
//                 <button type="button" className="card-btn repo-btn" onClick={() => (window.open(repoLink, '_blank'))}>
//                     View Project Repository
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default ProjectCard;

import React from 'react';
import './style.css';

function ProjectCard({ title, description, liveLink, repoLink, screenshot }) {
    return (
        <div className="row cardBody">
            <div className="col col-lg-4">
                <img src={screenshot} alt="project screenshot" className="screenshot"/>
            </div>
            <div className="col col-lg-8 projectContent">
                    <h3>{title}</h3>
                    <p>{description}</p>
                <div className="project-btns">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => (window.open(liveLink, '_blank'))}>
                        View Live Project
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => (window.open(repoLink, '_blank'))}>
                        View Project Repository
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;