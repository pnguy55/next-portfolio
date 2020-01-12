import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../public/style.css';

Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeerror = () => NProgress.done();

export default ({ children, title, description, img, img_max_width, img_max_height, active }) => (
    <div className='root centered-column'>
        <Head>
            <title>Phi's Next Portfolio</title>
        </Head>
        <div id="header-wrapper" className='header-wrapper centered-column'>
            <header>
                <div className='round-head'>
                    <Link href='/'><a><img src='/static/phiheadround.png' height='72px' width='72px'></img></a></Link>
                </div>
                <div className='link-wrapper'>
                    <Link href='/'><a className={active === 'about' ? 'active':'inactive'}>About</a></Link>
                    <Link href='/projects'><a className={active === 'projects' ? 'active':'inactive'}>Projects</a></Link>
                </div>
            </header>
        </div>
        <div className='centered-column parallax'>
            <h1 id='title'>{title}</h1>
            <h5 id='description'>{description}</h5>
            <Link href={active === 'error' ? '/' : active === 'about' ? '/' : `/${active}`}><a className='centered-column'><img className={'parallax-img'} src={img} alt='react icon'  /></a></Link>
            <img className='parallax-img2' src='/static/shelf.png'/>
        </div>
        
        {children}

        <footer className='centered-column'>&copy; Phi Nguyen {new Date().getFullYear()}</footer>

        {/* for styling within this component */}
        <style global jsx>
        {`
            :root{
                --antic: 'Antic Didone', cursive;
                --josefin: 'Josefin Sans', sans-serif;
                --oxygen: 'Oxygen', sans-serif;
                --main-background: #E0F2D8;
                --dark: #010440;
                --light: #545D8C;
                --dark-text: #010440;
                --light-text: #545D8C;
                --body-text: #010440;
            }
            .full-width {
                width: 100%;
            }
            body {
                font-family: var(--oxygen);
                color: var(--body-text);
            } 
            h1 {
                font-family: var(--antic);
                color: var(--light-text);
            }   
            h2, h3, h4, h5, h6 {
                font-family: var(--josefin);
                color: var(--light-text);
            }
            body {
                margin: 0;
                font-size: 110%;
                background: var(--main-color);
            }
            .centered-column {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .parallax {
                background: var(--main-background);
                width: 100%;
            }
            .header-wrapper {
                width: 100%;
                background: var(--main-background);
                
            }
            header {
                width: 80%;
                height: fit-content;
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                padding: 1em;
                font-size: 1.2rem;
                background: var(--main-color);
            }
            .round-head {
                flex: 1;
                display: flex;
                justify-content: space-around;

            }
            .link-wrapper {
                flex: 1;
                display: flex;
                justify-content: space-around;
                min-width: 18rem;
                margin: 2rem;
            }
            header a {
                color: darkgrey;
                text-decoration: none;
                font-family: var(--josefin);
                color: var(--light-text);
            }
            header a:hover{
                font-weight: bold;
                color: var(--dark-text);
            }
            .active {
                font-weight: bold;
            }
            footer {
                padding: 1em 0em;
                background: var(--main-background);
                color: var(--dark-text);
                width: 100%;
            }
            #title {
                font-size: 4rem;
                margin-bottom: 0rem;
            }
            #description {
                font-size: 1.5rem;
                margin: 1rem 1rem 0rem 1rem;
                text-align: center;
            }
            .parallax-img {
                max-height: ${img_max_height};
                height: auto;
                max-width: ${img_max_width};
                margin-top: 2rem;
            }
            .parallax-img2 {
                max-height: ${img_max_height};
                height: auto;
                max-width: ${img_max_width};
                margin-bottom: 1rem;
            }
            
        `}
        </style>
        {/* for global style aka outside of this component */}

    </div>
)