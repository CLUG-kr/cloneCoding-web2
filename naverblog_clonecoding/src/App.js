import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BlogTemplate from './components/BlogTemplate';
import PostList from './components/PostList';
import { PostProvider } from './PostContext';
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
        <PostList />
      </BlogTemplate>
    </>
    </PostProvider>
  );
}

export default App;
