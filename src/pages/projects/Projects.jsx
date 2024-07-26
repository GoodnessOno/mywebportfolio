import React from 'react'
import './projects.css'
import { Nessdroidweather, Navbar, Header, Footer, Goalsally } from '../../components'


const Projects = () => {

    return (
        <div className="projects-page">
            <Navbar />
            <Header />
            <Nessdroidweather />
            <Goalsally />
            <Footer />
        </div>
    );
};

export default Projects
