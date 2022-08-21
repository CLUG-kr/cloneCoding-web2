import React from 'react';
import styled from 'styled-components';

const BlogTemplateBlock = styled.div`
  width: 315px;
  height: 830px;

  //position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function BlogTemplate({ children }) {
  return(
    <div>
      <BlogTemplateBlock>{children}</BlogTemplateBlock>
    </div>
  );
}

export default BlogTemplate;
