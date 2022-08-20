import React from 'react';
import styled, { css } from 'styled-components';
import { IoMdHeartEmpty, IoMdHeart} from 'react-icons/io';
import { FaRegCommentDots } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { usePostDispatch } from '../PostContext';

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
    cursor: pointer;
`;

const ButtonBlock = styled.div`
    width: 60px;
    height: 13px;
    display: flex;
    cursor: pointer;
`;

const Heart = styled.div`
    width: 15px;
    height: 13px;
    color: #9DD84B;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const HeartEmpty = styled.div`
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
    color: #495057;
    cursor: pointer;
`;

const ContentBlock = styled.div`
    height: 60px;
    margin-top: 13px;
    margin-bottom: 4px;
`;

const Title = styled.div`
    height: 15px;
    font-size: 10px;
    font-weight: 900;
    line-height: 1.5;
    color: #000000;
    cursor: pointer;
`;

const Content = styled.div`
    width: 200px;
    height: 30px;
    font-size: 10px;
    transform: translate(-15%, -8%) scale(0.7);
    color: #000000;
    cursor: pointer;
`;

const Date = styled.div`
    width: 200px;
    font-size: 10px;
    transform: translate(-15%, -40%) scale(0.7);
    color: #000000;
`;

// Post 컴포넌트
function Post({ _id, _title, _content, _createdAt, _heartNum, _commentNum, _isLike }) {
    //const dispatch = usePostDispatch();
    //const cHeart = () => {dispatch({type: 'HeartClick', _id, _isLike})}
    
    return (
    <PostBlock>
        <PostLeftBlock>
            {_id===1 && <Thumbnail src="img/post1.png" onClick={() => {console.log("Post click")}} />}
            {_id===2 && <Thumbnail src="img/post2.png" onClick={() => {console.log("Post click")}} />}
            {_id===3 && <Thumbnail src="img/post3.png" onClick={() => {console.log("Post click")}} />}
            <ButtonBlock>
                {_isLike===true && 
                    <Heart onClick={() => {console.log("heart click")}}>
                        <IoMdHeart/>
                    </Heart >
                }
                {_isLike===false &&
                    <HeartEmpty onClick={() => {console.log("EmptyHeart click")}}>
                        <IoMdHeartEmpty/>
                    </HeartEmpty>
                }
                <HeartNum>{_heartNum}</HeartNum>
                <Comment onClick={() => {console.log("Comment click")}}><FaRegCommentDots/></Comment>
                <CommentNum>{_commentNum}</CommentNum>
            </ButtonBlock>  
        </PostLeftBlock>
        <PostRightBlock>
            <ContentBlock>
                <Title onClick={() => {console.log("Post click")}}>{_title}</Title>
                <Content onClick={() => {console.log("Post click")}}>{_content}</Content>
                <Date>{_createdAt}</Date>
            </ContentBlock>
            <Share onClick={() => {console.log("Share click")}}><IoShareOutline/></Share>
        </PostRightBlock>
    </PostBlock>
  );
}

export default Post;


//border: 0px solid #ced4da;