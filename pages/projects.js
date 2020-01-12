import Layout from "../components/Layout";

export default () => (
    <Layout 
        title='Projects'
        description="some of the technologies I've used"
        active='projects'   
        img='/static/fruitbanner.png'
        img_max_height='auto'
        img_max_width='90%' 
        className='centered-column'
    >
        <div className='myvideotagger proj-background centered-column'>
            <img src='/static/projects/myvideotagger-portfolio-piece.png' />
            <img src='/static/shelf.png'/>
            <h2>MyVideoTagger</h2>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                MyVideoTagger is a platform that allows you to extract tags from the most popular videos in your niche and add them to a list.  Then you can save those lists to revisit them later!
            </p>
            <h3>Front-end: React</h3>
            <h3>Back-end: Node & MongoDB</h3>
            <h4 className='proj-link'><a href='https://myvideotagger.com'>Link to Project</a></h4>
        </div>
        <div className='weatherapp proj-background centered-column'>
            <img src='/static/projects/weatherapp.png' />
            <img src='/static/shelf.png'/>
            <h2>Weather Checker</h2>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                The weatherapp allows you to find out your weather conditions by using the Google Maps API.
            </p>
            <h3>Front-end: jQuery & Handlebars</h3>
            <h3>Back-end: Node & MongoDB</h3>
            <h4 className='proj-link'><a href='http://phi-weather-application.herokuapp.com/'>Link to Project</a></h4>
        </div>
        <div className='reactcalc proj-background centered-column'>
            <img src='/static/projects/reactcalc.png' />
            <img src='/static/shelf.png'/>
            <h2>Calculator</h2>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                I built this calculator with the intent to using PostgreSQL to save my inputs so I can return to them later!  Feel free to try it out yourself.
            </p>
            <h3>Front-end: React</h3>
            <h3>Back-end: Node & PostgreSQL</h3>
            <h4 className='proj-link'><a href='https://calculator-react-spring.herokuapp.com/'>Link to Project</a></h4>
        </div>



        <style jsx>
        {`  
            .myvideotagger {
                background: var(--light);
                padding: 5rem 0rem;
                width:100%;
            }
            .myvideotagger > h2{
                background: #6b0b0b;
                color: #f0edef;
                padding: 1rem;
                font-weight: 800;
            }
            .myvideotagger > h4 > a {
                text-decoration: none;
                background: #6b0b0b;
                color: #f0edef;
                padding: 1rem;
                font-size: 2.5rem;
                font-weight: 800;
                -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
            }
            .myvideotagger > h4 > a:hover {
                background: #f0edef;
                color: #6b0b0b;
            }
            .myvideotagger > h3 {
                color: #f0edef;
            }
            .myvideotagger > p {
                color: #f0edef;
                line-height: 2rem;
                max-width: 35rem;
                margin: 0px 1rem;
            }
            .weatherapp {
                background: #161e31;
                padding: 5rem 0rem;
                width:100%;
            }
            .weatherapp > h2 {
                background: #dbdce1;
                color: #161e31;
                padding: 1rem;
                font-weight: 800;
                text-align: center;
            }
            .weatherapp > h4 > a {
                text-decoration: none;
                background: #dbdce1;
                color: #161e31;
                padding: 1rem;
                font-size: 2.5rem;
                font-weight: 800;
                -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
            }
            .weatherapp > h4 > a:hover {
                background: #161e31;
                color: #dbdce1;
            }
            .weatherapp > p {
                color: #f0edef;
                line-height: 2rem;
                max-width: 35rem;
                margin: 0px 1rem;
            }
            .weatherapp > h3 {
                color: #dbdce1;
            }
            .reactcalc {
                background: #49494d;
                padding: 5rem 0rem;
                width:100%;
            }
            .reactcalc > h2 {
                background: #db890f;
                color: #000000;
                padding: 1rem;
                font-weight: 800;
            }
            .reactcalc > h4 > a {
                text-decoration: none;
                background: #db890f;
                color: #000000;
                padding: 1rem;
                font-size: 2.5rem;
                font-weight: 800;
                -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
            }
            .reactcalc > h4 > a:hover {
                background: #000000;
                color: #db890f;
            }
            .reactcalc > p {
                color: #f0edef;
                line-height: 2rem;
                max-width: 35rem;
                margin: 0px 1rem;
            }
            .reactcalc > h3 {
                color: #db890f;
            }
            .proj-background > img {
                width: 90%;
                height: auto;
            }
            @media only screen and (min-width: 468px) {
                .proj-background > img {
                    width: 50%;
                }
            }
        `}
        </style>
    </Layout>
)