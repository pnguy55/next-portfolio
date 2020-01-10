import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

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
                    <Link href='/'><a className={active === 'home' ? 'active':'inactive'}>Home</a></Link>
                    <Link href='/about'><a className={active === 'about' ? 'active':'inactive'}>About</a></Link>
                    <Link href='/projects'><a className={active === 'projects' ? 'active':'inactive'}>Projects</a></Link>
                </div>
            </header>
        </div>
        <div className='centered-column parallax'>
            <h1 id='title'>{title}</h1>
            <h5 id='description'>{description}</h5>
            <Link href={active === 'error' ? '/' : active === 'home' ? '/' : `/${active}`}><a><img className={active==='about'? 'about-img':'parallax-img'} src={img} alt='react icon'  /></a></Link>
            <img className='parallax-img2' src='/static/shelf.png'/>
        </div>
        
        {children}

        <footer className='centered-column'>&copy; Phi Nguyen {new Date().getFullYear()}</footer>

        {/* for styling within this component */}
        <style global jsx>
        {`
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
                padding: 1em;
                background: var(--main-background);
                color: var(--dark-text);
                width: 100%;
            }
            #title {
                font-size: 4rem;
                margin-bottom: 1rem;
            }
            #description {
                font-size: 1.5rem;
                margin-top: 1rem;
            }
            .parallax-img {
                max-height: ${img_max_height};
                height: auto;
                max-width: ${img_max_width};
                margin-bottom: -4px;
            }
            .about-img {
                max-height: ${img_max_height};
                height: auto;
                max-width: ${img_max_width};
                margin-bottom: -4px;
                border-radius: 100%;
                -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
            }
            .parallax-img2 {
                max-height: ${img_max_height};
                height: auto;
                max-width: ${img_max_width};
            }
        `}
        </style>
        {/* for global style aka outside of this component */}

    </div>
)