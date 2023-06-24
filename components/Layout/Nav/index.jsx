import React from 'react';
import {useRouter} from 'next/router';
import Clickable from "components/Elements/Clickable";
import {scrollToPosition} from "../../../utils/functions";

const Nav = (props) => {

    const navList = [
        {
            title: 'Contact Me',
            link: ''
        }
    ];

    const goToSection = (target) => {
        scrollToPosition(target);
        setShowNav(false);
    }

    const {className, showNav, setShowNav} = props;
    const router = useRouter();

    return (
        <nav className={`main-nav ${className ? className : ''} ${showNav ? 'active' : ''}`}>
            <ul className="nav-list">
                {navList.map((item, key) => <li className="list-item" key={`nav-key-${key}`}>
                    <Clickable
                        onClick={() => goToSection('contact-form')}
                        className={`item-link ${router.pathname === item.link ? 'active' : ''}`}
                    >
                        {item.title}
                    </Clickable>
                </li>)}
            </ul>
        </nav>
    )
}

export default Nav;