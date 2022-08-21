import React from 'react';
import styled from 'styled-components';

const BlogTemplateBlock = styled.div`
  width: 315px;
  height: 830px;
  //width: 242.65px;
  //height: 497px;

  //position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const StatePrintBlock = styled.div`
  width: 242.65px;
  height: 30px;

  background: #FFFFFF;

  font-size: medium;
  text-align: center;
  line-height: 1.8;
  color: #000000;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 30px;
  margin-bottom: 10px;
`;

function BlogTemplate({ children, clickState }) {
  return(
    <div>
      <BlogTemplateBlock>{children}</BlogTemplateBlock>
    </div>
  );
}

export default BlogTemplate;

//<StatePrintBlock>{clickState}</StatePrintBlock>