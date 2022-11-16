import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';

const Project = () => {
  return (
    <Layout pageTitle='Project Page'>
      <div>
        <p>Project information</p>
        <nav>
          <div className='test_link'>
            <Link className='test' to='/project/test'>
              Test
            </Link>
          </div>
        </nav>
      </div>
    </Layout>
  );
};
export const Head = () => <title>Project</title>;

export default Project;
