import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';

const Test = () => {
  return (
    <Layout pageTitle='Testing Page'>
      <div>
        <h1>Testing route functions</h1>
      </div>
    </Layout>
  );
};
export const Head = () => <title>Testing</title>;

export default Test;
