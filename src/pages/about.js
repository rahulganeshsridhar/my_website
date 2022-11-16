import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Page'>
      <main>
        <p>
          Hi there! Myself Rahul Sridhar. I am a software engineer at Accenture
        </p>
      </main>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
