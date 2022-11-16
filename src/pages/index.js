import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <main>
        <p>Welcome to my Gatsby site!</p>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <div className='images'>
          <StaticImage
            style={{ height: 300, width: 300 }}
            src='../images/cat.jpg'
            alt='Gatsby logo'
          ></StaticImage>
          <StaticImage
            style={{ height: 300, width: 300 }}
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
