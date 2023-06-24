import React, {useState, useEffect} from "react";
import 'styles/app.scss';
import AOS from 'aos';
import {isMobile} from 'react-device-detect';
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import Router, {useRouter} from 'next/router';
import {PageChangeContext} from "../utils/pageChangeContext";
import {scrollToPosition} from "../utils/functions";

const MyApp = ({Component, pageProps}) => {

    // Data
    const router = useRouter();

    // States
    const [showNav, setShowNav] = useState(false);
    const [showBackToButton, setShowBackToButton] = useState(false);
    const [pageScrollTarget, setPageScrollTarget] = useState({
        target: '',
        from: ''
    });

    const clickedPageChangeScrollToPosition = (href, target, from) => {
        setPageScrollTarget({target: target, from: from});
        router.push(href);
        setTimeout(() => {
            setShowBackToButton(true);
            scrollToPosition(target);
        },500);
        setTimeout(() => {
            setPageScrollTarget({target: '', from: from})
        },1000);
    };

    useEffect(() => {
        AOS.init({
            offset: isMobile ? 50 : 250,
            once: true
        });
    }, []);


    Router.events.on('routeChangeComplete', () => {
        // Starts new pages at the top of page
        document.documentElement.style = "scroll-behavior: auto";
        document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
        setShowNav(false);
        setShowBackToButton(false);
    });

    return (
        <PageChangeContext.Provider value={{pageScrollTarget, showBackToButton, clickedPageChangeScrollToPosition}}>
            <Header
                showNav={showNav}
                setShowNav={setShowNav}
            />
            <Component {...pageProps} />
            <Footer/>
        </PageChangeContext.Provider>
    )
}

export default MyApp
