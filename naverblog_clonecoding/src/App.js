import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BlogTemplate2 from './components/BlogTemplate2';
import PostList from './components/PostList';
import { PostProvider } from './PostContext';
import Banner2 from './components/Banner2';
//import BannerFrame from './components/BannerFrame';
// import PostContext from '.PostContext';
//import PostListContext from '.PostListContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <PostProvider>
      <>
      <GlobalStyle />
      <BlogTemplate2>
        <Banner2 />
        <PostList />
      </BlogTemplate2>
    </>
    </PostProvider>
  );
}

export default App;
