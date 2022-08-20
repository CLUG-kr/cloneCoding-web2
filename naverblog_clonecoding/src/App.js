import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BlogTemplate from './components/BlogTemplate';
import PostList from './components/PostList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BlogTemplate>
        <PostList />
      </BlogTemplate>
    </>
  );
}

export default App;
