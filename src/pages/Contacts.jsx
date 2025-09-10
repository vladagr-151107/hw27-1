import React from "react";

function Contacts(){
    return(
         <ul className="contact-list">
                <li><a className="contact-link" href="mailto:vladagrushchenko@gmail.com" target="_blank" rel="noopener noreferrer">vladagrushchenko@gmail.com</a></li> 
                <li><a className="contact-link" href="mailto:v.grushchenko@icloud.com" target="_blank" rel="noopener noreferrer">v.grushchenko@icloud.com</a></li>
                <li><a className="contact-link" href="https://www.linkedin.com/in/vlada-grushchenko-50a306252/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
         </ul>
    );
}
export default Contacts;