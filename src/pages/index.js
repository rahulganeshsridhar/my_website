import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <main>
        <h2>Welcome to my Gatsby site!</h2>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <div>
          <StaticImage
            className='images'
            src='../images/cat.jpg'
            alt='Gatsby logo'
          ></StaticImage>
          <StaticImage
            className='images'
            alt='Clifford, a reddish-brown pitbull, dozing in a bean bag chair'
            src='../images/clifford.jpg'
          />
        </div>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
