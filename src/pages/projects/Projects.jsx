import React from 'react'
import './projects.css'
import { Intelliux, Navbar, Header, Footer, Goalsally } from '../../components'


const Projects = () => {

    return (
        <div className="projects-page">
            <Navbar />
            <Header />
            <Intelliux />
            <Goalsally />
            <Footer />
        </div>
    );
};

export default Projects
