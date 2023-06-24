import React from 'react';
import {useRouter} from 'next/router';
import Clickable from "components/Elements/Clickable";
import {scrollToPosition} from "../../../utils/functions";

const Nav = (props) => {

    const navList = [
        {
            title: 'Coaching',
            link: '',
            target: 'coaching',
        },
        {
            title: 'Intuitive Soul Paintings',
            link: '',
            target: 'intuitive-soul-paintings',
        },
        {
            title: 'Contact Me',
            link: '',
            target: 'contact-form',
        },
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
                        onClick={() => goToSection(item.target)}
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