import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/NavBar';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <main>
        <p>Welcome to my Gatsby site!</p>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
