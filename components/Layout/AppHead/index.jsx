import React from 'react';
import Head from "next/head";
import {useRouter} from "next/router";

const AppHead = (props) => {

    // Data
    const {image, description, title} = props;
    const router = useRouter();

    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <title>Samantha Mellow {title}</title>
            {/*Facebook & Whatsapp*/}
            <meta name="msapplication-TileImage" content={image}/>
            <meta property="og:site_name" content="Samantha Mellow"/>
            <meta property="og:title" content={`Samantha Mellow ${title}`}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
            <meta property="og:type" content="website"/>
            <meta property="og:image:type" content="image/webp"/>
            <meta property="og:image:width" content="300"/>
            <meta property="og:image:height" content="300"/>
            <meta property="og:url" content={router.asPath}/>
            <meta property="fb:page_id" content="395450240451647"/>


            {/*Twitter*/}
            <meta name="twitter:title" content={`Samantha Mellow ${title}`}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
            <meta name="twitter:card" content={image}/>
            <meta name="twitter:image:alt" content="Site Image"/>

            {/*Favicon Links*/}
            {/*<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>*/}
            {/*<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>*/}
            {/*<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>*/}
            {/*<link rel="manifest" href="/images/favicon/site.webmanifest"/>*/}
            {/*<link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>*/}
            {/*<meta name="msapplication-TileColor" content="#da532c"/>*/}
            {/*<meta name="theme-color" content="#ffffff"/>*/}
        </Head>
    </>)
}

export default AppHead;