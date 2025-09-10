import React from "react";

function About(){
    return(
        <div className="about-section">
            <div className="text-center">
                <h1 className="mb-4">Про мене</h1>
            </div>
            
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h3 className="mb-3">Front-end Developer</h3>
                    <p className="lead">
                        Hi, I am Vlada Grushchenko 🇺🇦
                    </p>
                    <p>Front-end developer, based in Romania. 
                       Want to fully apply my knowledge and potential in IT.</p>
                    
                    <h4 className="mt-4">Skills</h4>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        <span className="badge bg-primary">HTML</span>
                        <span className="badge bg-primary">CSS</span>
                        <span className="badge bg-primary">JavaScript</span>
                        <span className="badge bg-primary">React</span>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/vlada-grushchenko-50a306252/" 
                           target="_blank" 
                           className="btn btn-outline-primary">
                            <i className="bi bi-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;