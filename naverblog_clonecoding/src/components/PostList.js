import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MdViewAgenda, MdViewList } from 'react-icons/md';
import { HiViewGrid } from 'react-icons/hi';
import { BsChevronDown } from 'react-icons/bs';
import Post from './Post';

/*
    아이콘 종류
    HiViewGrid : 뷰 방식 4칸 그리드
    MdViewAgenda : 위아래 2칸 그리드
    MdViewList : 리스트형 뷰 방식 3칸 (좌우 반전해야 네이버랑 똑같아짐)
    BsChevronDown : 몸통 없는 아래로 화살표 
*/ 

// styled-components 라이브러리를 사용하여 컴포넌트 스타일링
const PostFilterBlock = styled.div`
    border-top: solid 0.5px #eeeeee;
    border-bottom: solid 0.5px #eeeeee;
    
    width: 100%;
    height: 36.5px;
    
    margin-top: 12.5px;
    display: felx;
    align-items: center;
`;

const PostCategoryBlock = styled.div`
    width: 56px;
    height: 100%;
    display: flex;
    margin-left: 13.5px;
`;

const PostCategory = styled.div`
    width: 40.5px;
    height: 100%;
    font-size: 12px;
    font-weight: 900;
    text-align: center;
    line-height: 3;
    cursor: pointer;
`;

const PostCategoryFolder = styled.div`
    width: 15.5px;
    height: 100%;
    font-size: 10px;
    color: #808080;
    text-align: right;
    line-height: 4;
    cursor: pointer;
`;

const PostViewBlock = styled.div`
    width: 95.5px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 153px;
`;

const PostView = styled.div`
    width: 17px;
    height: 17px;
    transform: scaleX(-1);
    font-size: 19px;
    margin-right: 13.5px;
    margin-bottom: 5px;
    cursor: pointer;
`;


const PostListBlock = styled.div`
    flex: 1;
    width: 315px;
    overflow-y: auto;
`;


function PostList() {
  // api 불러오는 작업
  //요청 결과, 로딩상태, 에러를 관리해줄 useState 구문들
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //데이터 로딩 과정을 비동기로 만들기 위해 async/await 구문 사용
  const fetchDatas = async () => {
      try{
          // 데이터 요청 시작할 때 에러, 데이터를 초기화 해주기
          setDatas(null);
          setError(null);
          // 데이터 불러와야 하니까 로딩 true로 변경하기
          setLoading(true);
          // 해당 url로 부터 응답 받기
          const response = await axios.get(
              'https://asia-northeast3-naverblog-server.cloudfunctions.net/api/post/main'
          );
          // 응답받은 데이터로 Datas 할당해주기
          setDatas(response.data);
      } catch(e) {
          //응답 받는 과정에서 에러가 발생했다면 반환
          setError(e);
      }
      // 실패하나 안 하나 로딩은 끝났으니까 false로 
      setLoading(false);   
  };

  // []: 뭐 하나라도 변경사항이 있을 때 
  // fetchDatas(): 이걸로 렌더링 다시 해라
  useEffect(() => {fetchDatas();}, []);

  // 로딩중일때, 에러발생했을때, 받아온 데이터가 비었을 때
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!datas) return null;

  // 위의 조건들에서 모두 벗어났을 때는 다음을 리턴해라
  // 근데 받아온 데이터가 몇개일지 모르니까 map 사용

  return(
    <>
      <PostFilterBlock>
        <PostCategoryBlock onClick={() => {console.log("PostCategory click")}}>
          <PostCategory>전체글</PostCategory>
          <PostCategoryFolder><BsChevronDown/></PostCategoryFolder>
        </PostCategoryBlock>
        <PostViewBlock>
          <PostView style={{color: "#c0c0c0"}} onClick={() => {console.log("PostView1 click")}}><HiViewGrid/></PostView>
          <PostView style={{color: "black"}} onClick={() => {console.log("PostView2 click")}}><MdViewList/></PostView>
          <PostView style={{color: "#c0c0c0"}} onClick={() => {console.log("PostView3 click")}}><MdViewAgenda/></PostView>
        </PostViewBlock>
      </PostFilterBlock>
      <PostListBlock>
        {datas.data.posts.map(data => (
          <Post 
            key={data.postId}
            _id={data.postId}
            _title={data.title}
            _content={data.content}
            _createdAt={data.createdAt}
            _heartNum={data.heartNum}
            _commentNum={data.commentNum}
            _isLike={data.isLike}
          />
        ))}
      </PostListBlock>    
    </>

  );
}

export default PostList;


/*

{datas.data.banner.map(data => (
        <img src={data.bannerImage} /> 
      ))}

  */