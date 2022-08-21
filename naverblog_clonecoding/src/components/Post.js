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
    width: 288px;
    height: 132px;
    margin-left: 13.5px;
  }
`;

const PostLeftBlock = styled.div`
    width: 96px;
    height: 132px; 
`;

const Thumbnail = styled.img`
    width: 81px;
    height: 81px;
    border-radius: 5px;
    background: #ced4da;
    margin-top: 13.5px;
    margin-bottom: 7px;
    cursor: pointer;
`;

const ButtonBlock = styled.div`
    width: 81px;
    height: 17px;
    display: flex;
    cursor: pointer;
`;

const Heart = styled.div`
    width: 17px;
    height: 17px;
    color: #9DD84B;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const HeartEmpty = styled.div`
    width: 17px;
    height: 17px;
    color: #808080;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const HeartNum = styled.div`
    width: 17px;
    height: 17px;
    font-size: 10px;
    text-align: left;
    line-height: 1.5;
    margin-left: 2px;
    margin-right: 2px;
`;

const Comment = styled.div`
    width: 17px;
    height: 17px;
    color: #808080;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CommentNum = styled.div`
    width: 17px;
    height: 17px;
    font-size: 10px;
    text-align: left;
    line-height: 1.5;
    margin-left: 4px;
`;

const PostRightBlock = styled.div`
    width: 192px;
    height: 132px; 
`;

const ContentBlock = styled.div`
    height: 81px;
    margin-top: 13.5px;
    margin-bottom: 8px;
`;

const Title = styled.div`
    height: 27px;
    font-size: 12.5px;
    font-weight: 900;
    line-height: 2.2;
    color: #000000;
    cursor: pointer;
`;

const Content = styled.div`
    height: 35px;
    font-size: 10px;
    color: #000000;
    cursor: pointer;
`;

const Date = styled.div`
    font-size: 10px;
    color: #000000;
`;

const Share = styled.div`
    width: 16px;
    height: 17px;
    margin-left: 176px;
    font-size: 17px;
    color: #495057;
    cursor: pointer;
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


//border: 0.5px solid #ced4da;
//배너 넣은 크기: 높이369px
/*
    - 포스트 카테코리 높이: 36.5px
    - 포스트 하나 높이: 137px
    - 배너와 포스트리스트 사이 간격: 12.5px
*/