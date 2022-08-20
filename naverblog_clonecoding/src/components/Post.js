import React from 'react';
import styled, { css } from 'styled-components';
import { IoMdHeartEmpty, IoMdHeart} from 'react-icons/io';
import { FaRegCommentDots } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

/*
    아이콘 종류
    IoMdHeartEmpty : 속 빈 하트
    IoMdHeart : 속 찬 하트
    IoShareOutline : 공유 아이콘
    FaRegCommentDots : 댓글 아이콘
*/

// styled-components 라이브러리를 사용하여 컴포넌트 스타일링
const PostBlock = styled.div`
    border-bottom: solid 0.5px #ced4da;
    display: flex;
    width: 222.65px;
    height: 100px;
    margin-left: 10px;
  }
`;

const PostLeftBlock = styled.div`
    width: 70px;
    height: 100px; 
    margin-right: 10px;
`;

const Thumbnail = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background: #ced4da;
    margin-top: 10px;
    margin-bottom: 5px;
`;

const ButtonBlock = styled.div`
    width: 60px;
    height: 13px;
    display: flex;
`;

const Heart = styled.div`
    width: 15px;
    height: 13px;
    color: #808080;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const HeartNum = styled.div`
    width: 15px;
    height: 13px;
    font-size: 10px;
    transform: translate(-10%, 0%) scale(0.8);
    text-align: left;
    line-height: 1.3;
`;

const Comment = styled.div`
    width: 15px;
    height: 13px;
    color: #808080;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CommentNum = styled.div`
    width: 15px;
    height: 13px;
    font-size: 10px;
    transform: translate(-22%, 0%) scale(0.8);
    text-align: center;
    line-height: 1.3;
`;

const PostRightBlock = styled.div`
    width: 152.65px;
    height: 100px; 
`;

const Share = styled.div`
    height: 13px;
    font-size: 10px;
    display: flex;
    justify-content: right;
    align-items: center;
`;

const ContentBlock = styled.div`
    height: 60px;
    color: #495057;
    margin-top: 13px;
    margin-bottom: 4px;
`;

const Title = styled.div`
    height: 15px;
    font-size: 10px;
    font-weight: 900;
    line-height: 1.5;
    color: #495057;
`;

const Content = styled.div`
    width: 200px;
    height: 30px;
    font-size: 10px;
    transform: translate(-15%, -8%) scale(0.7);
    color: #495057;
`;

const Date = styled.div`
    width: 200px;
    font-size: 10px;
    transform: translate(-15%, -40%) scale(0.7);
    color: #495057;
`;

// Post 컴포넌트 반환

function Post({ _title, _content, _createdAt, _heartNum, _commentNum, isLike }) {
  return (
    <PostBlock>
        <PostLeftBlock>
            <Thumbnail src="img/post1.png"/>
            <ButtonBlock>
                <Heart><IoMdHeartEmpty/></Heart>
                <HeartNum>{_heartNum}</HeartNum>
                <Comment><FaRegCommentDots/></Comment>
                <CommentNum>{_commentNum}</CommentNum>
            </ButtonBlock>  
        </PostLeftBlock>
        <PostRightBlock>
            <ContentBlock>
                <Title>{_title}</Title>
                <Content>{_content}</Content>
                <Date>{_createdAt}</Date>
            </ContentBlock>
            <Share><IoShareOutline/></Share>
        </PostRightBlock>
    </PostBlock>
  );
}

export default Post;


/*

<CheckCircle done={done}>{done && <IoMdHeartEmpty />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <IoMdHeart />
      </Remove>

*/

/*
    &:hover {
    //mouseover 이벤트 넣는 곳 다 
    // ${} {
    //   display: initial;
    // }
*/

//border: 0px solid #ced4da;