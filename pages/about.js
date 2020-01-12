import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class About extends Component {

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
                title='About Me'
                active='about'
                description='Phi Nguyen'
                img={user.avatar_url}
                img_max_height='auto'
                img_max_width='25vw'
            >
                <p>{user.name}</p>
            </Layout>
        )
    }
}
