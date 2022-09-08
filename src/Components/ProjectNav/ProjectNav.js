import React, { useContext } from 'react'
import './ProjectNav.scss'
import { ProjectContext } from "../../contexts/ProjectContext";
import like from '../../assets/like.png'

const ProjectNav = () => {
    const { selectedProject } = useContext(ProjectContext);
    return (
        <div className='project-nav__container'>

            <div className='project-nav__title-icon'>
                <div  className=" project-nav__profile">
                <img src={
                selectedProject.leaderImg ||
                "https://cvbay.com/wp-content/uploads/2017/03/dummy-image.jpg"
              } alt='profile' /></div>
                <h2 className='project-nav__title'>{selectedProject.leader_name}</h2>
            </div>
            <div className='project-nav__likes-join'>
                <img src={like} alt="like" className='project-nav__like' />
                <div className='project-nav__number-likes'>15 Likes</div>
                <button className='project-nav__button'>Join Team</button>
            </div>

        </div>

    )
}

export default ProjectNav;