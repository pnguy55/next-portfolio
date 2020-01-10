import Layout from "../components/Layout";

export default () => (
    <Layout 
        title='Projects'
        description="some of the technologies I've used"
        active='projects'   
        img='/static/fruitbanner.png'
        img_max_height='auto'
        img_max_width='95%' 
        className='centered-column'
    >
        <div className='myvideotagger proj-background centered-column'>
            <h2>MyVideoTagger</h2>
            <img src='/static/projects/myvideotagger-portfolio-piece.png' />
            <img src='/static/shelf.png'/>
        </div>
        <div className='weatherapp proj-background centered-column'>
            <h2>Weather Checker</h2>
            <img src='/static/projects/weatherapp.png' />
            <img src='/static/shelf.png'/>
        </div>
        <div className='reactcalc proj-background centered-column'>
            <h2>Calculator</h2>
            <img src='/static/projects/reactcalc.png' />
            <img src='/static/shelf.png'/>
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
                margin-bottom: 4rem;
                padding: 1rem;
                font-size: 4rem;
                font-weight: 800;
            }
            .weatherapp {
                background: #161e31;
                padding: 5rem 0rem;
                width:100%;
            }
            .weatherapp > h2 {
                background: #dbdce1;
                color: #161e31;
                margin-bottom: 4rem;
                padding: 1rem;
                font-size: 4rem;
                font-weight: 800;
            }
            .reactcalc {
                background: #49494d;
                padding: 5rem 0rem;
                width:100%;
            }
            .reactcalc > h2 {
                background: #db890f;
                color: #000000;
                margin-bottom: 4rem;
                padding: 1rem;
                font-size: 4rem;
                font-weight: 800;
            }
            .proj-background > img {
                width: 50%;
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