import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {Col, Container, Row} from "reactstrap";
import Nav from "components/Layout/Nav";
import BurgerButton from "components/Elements/BurgerButton";
import {useRouter} from "next/router";
import {scrollToPosition} from "../../../utils/functions";

const Header = (props) => {

    // Data
    const {showNav, setShowNav} = props;
    const router = useRouter();

    // States
    const [headerScroll, setHeaderScroll] = useState(0);

    // Functions
    const scrollToTop = (e) => {
        e.preventDefault();
        scrollToPosition('first-component', 0);

    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setHeaderScroll(window.scrollY);
        });
    }, []);

    return (<>
        <header className={`main-header ${headerScroll > 0 ? 'scroll-active' : ''} ${router.asPath === '/admin' ? 'admin' : ''}`}>
            <Container>
                <Row>
                    <Col xs={12} className="main-header-inner">
                        <Link href="/" legacyBehavior>
                            <a className="brand-logo" onClick={(e) => scrollToTop(e)}>
                                Samantha Mello
                            </a>
                        </Link>
                        <Nav
                            showNav={showNav}
                            setShowNav={setShowNav}
                            className="desktop"
                        />
                        <BurgerButton
                            activeState={showNav}
                            setState={setShowNav}
                        />
                    </Col>
                </Row>
            </Container>
        </header>
        <Nav
            showNav={showNav}
            setShowNav={setShowNav}
        />
    </>)
}

export default Header;