import React, { useState, useRef, useEffect } from 'react';
import './css/home-page.css';
import { useParams } from 'react-router-dom';
import './css/hamburger-menu.css';


function HamburgerMenu() {

    const params = useParams()

    const [menuDisabled, setMenuDisabled] = useState(true);

    const handleCheckboxChange = (event) => {
      setMenuDisabled(!event.target.checked);
    };

return (
<nav className="hamburgerMenu" role="navigation">

        <div id="menuToggle">
            <input
             id="check"
             type="checkbox"
             onChange={handleCheckboxChange}
             checked={!menuDisabled} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu" className={menuDisabled ? 'disabled' : ''}>
            <a href={`/home-page/${params.email}`}><li>Home</li></a>
                <a href={`/profile/${params.email}`}><li>Profile</li></a>
                <a href={`/messages/${params.email}`}><li>Messages</li></a>
                <a href={`/settings-help/${params.email}`}><li>Settings/Help</li></a>
                <a href={`/about/${params.email}`}><li>About</li></a>
            </ul>
     </div>
</nav>
);
};

export default HamburgerMenu