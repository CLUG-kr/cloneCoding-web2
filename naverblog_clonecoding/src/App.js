import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BlogTemplate from './components/BlogTemplate';
import Banner from './components/Banner';
import PostList from './components/PostList';
import { PostProvider } from './PostContext';
import Datas from './components/BannerFrame';
import BannerFrame from './components/BannerFrame';
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
      <BlogTemplate>
        <BannerFrame />
        <PostList />
      </BlogTemplate>
    </>
    </PostProvider>
  );
}

export default App;
