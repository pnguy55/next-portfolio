import Layout from '../components/Layout';

function Error({ statusCode }) {
    
    return (
      <Layout
      title="Hi! Phi here, seems like you've lost your way."
      description={<a style={{textDecoration:'none',color:'var(--dark)'}} href='/'>Want to go home?</a>}
      img='/static/home.png'
      img_max_width='30vw'
      img_max_height='30vh'
      active='error'
      >
        <div className='round-head'>
            <img className='error-img' src='/static/phiheadrounderror.png' height='172px' width='172px'></img>
        </div>
        <p>
            {statusCode
                ? `A ${statusCode} error occurred on server`
                : 'An error occurred on client'}
        </p>
        <style jsx>
          {`
          .error-img{
              -webkit-box-shadow: -1px 4px 17px -6px rgba(0,0,0,0.75);
              -moz-box-shadow: -1px 4px 17px -6px rgba(0,0,0,0.75);
              box-shadow: -1px 4px 17px -6px rgba(0,0,0,0.75);
              border-radius: 100%;
              margin-top 2rem;
          }
          `}
        </style>
      </Layout>
      
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error