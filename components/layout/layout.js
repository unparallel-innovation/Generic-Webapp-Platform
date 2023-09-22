import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "./header";
import globals from "../../styles/globals.module.css";
import Login from "../login/login";
import Footer from "./footer";

export const siteTitle = "Common UI";

export default function Layout({ children, home }){
    const {data: session} = useSession();
    return (
        <div className={`d-flex flex-column vw-100 vh-100 bg-secondary ${globals.font}`}>
            <Head>
                <link rel={"icon"} href={"/favicon.ico"}/>
                <meta
                    name={"description"}
                    content={"Learn how to build a personal website using Next.js"}
                />
                <meta
                    property={"og:image"}
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name={"og:title"} content={siteTitle} />
                <meta name={"twitter:card"} content={"summary_large_image"}/>
            </Head>
            <header className={globals.bgColour}>
            {/*<header style={{'backgroundColor': 'rbga(25, 97, 280, 0)'}}>*/}
                {session ? <Header/> : null}
            </header>
            <div className={`d-flex flex-grow-1 ${globals.bgColour} ${globals.font}`}>
                {!session ? <Login/> : children}
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
