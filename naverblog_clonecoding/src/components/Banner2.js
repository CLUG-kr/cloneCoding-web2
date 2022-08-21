import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { BsList, BsThreeDotsVertical } from 'react-icons/bs';
import Banner from './Banner';
//import Numeral from 'numeral';


/*
    아이콘 종류
    FiSearch : 돋보기
    BsList : 목록 (줄 세개)
    BsThreeDotsVertical : 더보기 (수직으로 된 세 점)
*/ 

// 스타일링하기
// styled-components 라이브러리를 사용하여 컴포넌트 스타일링
const BannerBlock = styled.div`
    width: 315px;
    height: 350px;
    padding-bottom: 2px;
    border-bottom: 1px solid #e9ecef;
    backgroundPosition: 'center';
    background-size: 315px 350px;
    backgroundRepeat: 'no-repeat';
    
    h1 {
        margin: 0;
        font-size: 12px;
        font-weight: 100;
        color: #ffffff;
    }
    h2 {
        margin: 0;
        font-size: 22px;
        font-weight: 500;
        color: #ffffff;
    }
    h3 {
        margin: 0;
        font-size: 15px;
        color: #ffffff;
    }
`;


const FinderBlock = styled.div`
    padding-top: 40px;
    width: 50px;
    height: 50px;
    color: #ffffff;
    display: flex;
    margin-left: 255px;
`;

const Finder = styled.div`
    margin-top: 5px;
    font-size: 21px;
    margin-right: 8px;
    cursor: pointer;
`;

const List = styled.div`
    margin-top: 2px;
    font-size: 26px;
    cursor: pointer;
`;

const BannerMiddleBlock = styled.div`
    margin-top: 120px;
    height: 50px; 
    margin-left: 13px;
`;

const Num = styled.div`
    width: 15px;
    height: 13px;
    font-size: 10px;
    //transform: translate(-22%, 0%) scale(0.8);
    text-align: center;
    line-height: 1.3;
`;

const BannerBottomBlock = styled.div`
    margin-top: 15px;
    margin-left: 13px;
    color: #FFFFFF;
    display: flex;
`;

const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background: #FFF5E3;
    margin-top: 10px;
    margin-bottom: 5px;
    cursor: pointer;
`;

const BannerBottomMiddleBlock = styled.div`
    width: 200px;
    height: 100px; 
    margin-left: 10px;
    color: #FFFFFF;
`;

const ProfileBlock = styled.div`
    display: flex;
`;

const ProfileName = styled.div`
    margin: 0;
    font-size: 13px;
    color: #ffffff;
    margin-top: 10px;
    margin-bottom: 2px;
    line-height: 1.3;
`;

const Neighbor = styled.div`
    width: 57px;
    height: 13px;
    font-size: 10px;
    text-align: center;
    border: solid 0.5px #FFFFFF;
    border-radius: 100px;
    margin-left: 7px;
    margin-top: 11px;
    margin-bottom: 2px;
    cursor: pointer;
`;

const BannerBottomMiddleBottomBlock = styled.div`
    width: 230px;
    height: 30px;
    margin: 0;
    margin-top: 3px;
    font-size: 5px;
    color: #ffffff;
    margin-bottom: 5px;
    line-height: 1.5;
`;

const Finder2 = styled.div`
    margin-top: 8px;
    width: 17px;
    height: 17px;
    font-size: 25px;
    line-height: 0.5;
    text-align: center;
    margin-right: 8px;
    cursor: pointer;
`;


//컴포넌트 만들기
function Banner2(){
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
    <div>
        {datas.data.banner.map(data => (
            <BannerBlock key={data.blogId} style={{backgroundImage: `url(${data.bannerImage})`}}>
                <FinderBlock>
                    <Finder onClick={() => {console.log("Finder click")}}><FiSearch/></Finder>
                    <List onClick={() => {console.log("list click")}}><BsList/></List>
                </FinderBlock>
                <BannerMiddleBlock>
                    <h1>오늘 {data.todayCount.toLocaleString()} · 전체 {data.totalCount.toLocaleString()}</h1>
                    <h2>{data.blogName} </h2>
                </BannerMiddleBlock>
                <BannerBottomBlock>
                    <ProfileImage></ProfileImage>
                    <BannerBottomMiddleBlock>
                        <ProfileBlock>
                            <ProfileName>{data.profileName}</ProfileName>
                            <Neighbor onClick={() => {console.log("서로이웃")}}>서로이웃</Neighbor>
                        </ProfileBlock>
                        <BannerBottomMiddleBottomBlock>{data.blogCategory} · {data.neighborNum.toLocaleString()}명의 이웃</BannerBottomMiddleBottomBlock>
                    </BannerBottomMiddleBlock>
                    <Finder2 onClick={() => {console.log("더보기")}}><BsThreeDotsVertical/></Finder2>
                </BannerBottomBlock>
            </BannerBlock>
        ))}
    </div>
  );
}

export default Banner2;

//{datas.data.banner.map(data => ())}

//<BannerFrame styles={{ backgroundImage: `url(./bannerImage.png) }`} />
