import React from 'react';
import {scrollToPosition} from "../../utils/functions";
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import ImageSideText from "components/ImageSideText";
import FullWidthInfo from "components/FullWidthInfo";
import BackImageFloatingContent from "components/BackImageFloatingContent";
import AppHead from "components/Layout/AppHead";
import ContactForm from "components/ContactForm";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";

const Home = () => {

    // Data
    const columnInfoImage = [
        {
            title: 'Contemporary',
            imageBig: '/images/painting-1.jpeg'
        },
        {
            title: 'Traditional',
            imageBig: 'https://images.squarespace-cdn.com/content/v1/5b1c34b212b13ff62b14bdcc/1614251718632-Z1E54071EJU4PM5W6PTO/N-877+LAT.jpg?format=1500wg'
        },
        {
            title: 'Rustic',
            imageBig: 'https://trendyartideas.com/wp-content/uploads/2022/05/Beautiful-paintings-of-nature.jpg'
        },
        {
            title: 'Industrial',
            imageBig: 'https://media.gq-magazine.co.uk/photos/5d139493976fa36a3ef39940/16:9/pass/image.jpg'
        },
        {
            title: 'Bohemian',
            imageBig: 'https://www.heraldnet.com/wp-content/uploads/2021/10/26713309_web1_TSR-Rob-Schouten-edh-211007.jpg'
        },
        {
            title: 'Bespoke',
            imageBig: 'https://mymodernmet.com/wp/wp-content/uploads/2018/07/oil-painting-underwater-paintings-isabel-emrich-6.jpg'
        },
    ];

    return (
        <>
            <AppHead
                title=""
                description=""
                image=""
            />
            <div id="first-component">
                <FullWidthImageTextBanner
                    title="Hi, I'm Samantha"
                    backgroundImage="/images/sam-intro.jpeg"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aspernatur cumque expedita harum hic inventore iusto labore maiores molestias nesciunt nihil odio quisquam quo repellendus saepe ut, voluptates voluptatibus."
                    contentCenter
                    showScrollArrow
                    halfBackShadow
                    arrowsOnCLick={() => scrollToPosition('intuitive-soul-paintings')}
                />
            </div>

            <div id="intuitive-soul-paintings">
                <ColumnInfoImage
                    title="Intuitive Soul Paintings"
                    description="I do painting things fam"
                    data={columnInfoImage}
                    headingLine
                />
            </div>

            <FullWidthVideoPlayer
                title="How The Paintings Work"
                iframeSrc="https://www.youtube.com/embed/ALH1Xjr1Ycc?rel=0"
                thumbnailImage="/images/sam.jpeg"
                cta_onClick={() => scrollToPosition('contact-form')}
                cta_text="Book A Painting"
                paddingTop
            />

            {/*<FullWidthInfo*/}
            {/*    hTag={3}*/}
            {/*    title="British Designed &amp; Made"*/}
            {/*    description="Mood boards can be supplied with unit, doors, worktop, handles, sink, tap, appliance samples and suggested tile & colour pallets along with quote."*/}
            {/*    headingLine*/}
            {/*    alt*/}
            {/*/>*/}

            <FullWidthImageTextBanner
                backgroundImage="/images/sam.jpeg"
                contentCenter
                title="One-To-One Coaching"
                description="All of the products we provide are produced to the highest quality, enabling us to deliver an unrivaled kitchen product at the highest quality, with practical functionality and style to flaunt."
                cta_text="book a consultation"
                onClick={() => scrollToPosition('contact-form')}
                alt
                noPaddTop
                animation
            />

            <div id="coaching">
                <BackImageFloatingContent
                    backgroundImage="/images/pattern-back-4.png"
                    title="Learn How To Heal Yourself"
                    onClick={() => scrollToPosition('contact-form')}
                    cta_text="Contact Me"
                    headingLine
                >
                    <p className="body-copy">Our kitchens are all British made, not only do we use the very best British craftsmanship to create our kitchens but we can also avoid delays from overseas deliveries and damage from prolonged shipping by using the local British craftsmanship that is sought after around the world. Delivering your kitchen on time with as little disruption to you as possible. We feel using the resources around us benifit all those around us, by using local quality we keep the local economy as bustling as we can and our carbon footprint as low as we can. Our kitchen units and doors are manufactured in Lancashire, our handles & ironmongery are mostly made in Sheffield, solid natural worktops are not only quarried locally but also manufactured & processed in the North West, this all makes us very proud to showcase the very best in style & craftsmanship while being environmentally conscious.</p>
                </BackImageFloatingContent>
            </div>

            <FullWidthImageTextBanner
                title="Become Your Authentic Self"
                backgroundImage="/images/sam-1.jpeg"
                contentCenter
                description="The entirety of our carbon footprint is also offset by the tree planting schemes we are involved with. Our membership to the soil association UK is something we're also proud of, as without good soil we would struggle to get good food, good produce makes the kitchen come alive!"
                alt
                noPaddTop
                animation
            />

            <div id="contact-form">
                <FullWidthInfo
                    hTag={3}
                    title="Connect With Me"
                    description="Fill out the form below to start your healing journey."
                    headingLine
                />

                <ContactForm/>
            </div>
        </>
    )
}

export default Home;