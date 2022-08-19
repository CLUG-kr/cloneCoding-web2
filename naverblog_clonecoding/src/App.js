import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BlogTemplate from './components/BlogTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BlogTemplate>안녕하세요</BlogTemplate>
    </>
  );
}

export default App;
