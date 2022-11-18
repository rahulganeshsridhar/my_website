import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Counter from '../components/counter';
import Layout from '../components/layout';
import { UserProvider } from '../components/userContext';
import { images } from '../styles/home.module.css';

const IndexPage = () => {
  const user = { name: 'Rahul Sridhar', loggedIn: true };
  return (
    <UserProvider value={user}>
      <Layout pageTitle='Home Page'>
        <main>
          <h2>Welcome to my Gatsby site!</h2>
          <p>I'm making this by following the Gatsby Tutorial.</p>

          <div className={images}>
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
            <Counter />
          </div>
        </main>
      </Layout>
    </UserProvider>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
