import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class index extends Component {

    state = {
        user: null
    };

    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/pnguy55");
        const data = await res.json();

        // we must return an object to be used for props
        return { user: data };
    }
    render() {
        const { user } = this.props;
        return (
            <Layout 
                title="I'm Phi"
                description="a full-stack problem solver."
                img='/static/fractalmaster.png'
                img_max_width='50vw'
                img_max_height='50vh'
                active='about'
            >
                <div className='centered-column'>
                    <img className='upside-down home-story-1' src='/static/fractalmaster.png' />
                    <img className='avatar' src={user.avatar_url} />
                    <h2>Hi!</h2>
                    <p>
                        I'm a web developer and designer from the US and I use technology to solve problems.
                    </p>
                    

                    <iframe className='mobile' src="https://docs.google.com/forms/d/e/1FAIpQLSeZjUmDT2rnMj2Bndvz6SSgM65GZu6tQ4Nk_jQuVTgsEGxQkQ/viewform?embedded=true" width="320" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    <iframe className='desktop' src="https://docs.google.com/forms/d/e/1FAIpQLSeZjUmDT2rnMj2Bndvz6SSgM65GZu6tQ4Nk_jQuVTgsEGxQkQ/viewform?embedded=true" width="460" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

                </div>

                <style jsx>
                {`
                    .upside-down {
                        transform: rotate(180deg);
                    }
                    .home-story-1 {
                        max-width: 10vw;
                    }
                    .avatar {
                        max-height: auto;
                        height: auto;
                        max-width: 10vw;
                        margin: 2rem 0rem;
                        border-radius: 100%;
                        -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                        -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                        box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                    }
                    p {
                        line-height: 2rem;
                        max-width: 35rem;
                        margin: 0px 1rem;
                        text-align: center;
                    }
                    iframe {
                        margin-top: 4rem;
                    }
                    .desktop {
                        display: none;
                    }
                    @media only screen and (min-width: 468px) {
                        .mobile {
                            display: none;
                        }
                        .desktop {
                            display: flex;
                        }
                    }
                `}
                </style>
            </Layout>
        );
    }
}