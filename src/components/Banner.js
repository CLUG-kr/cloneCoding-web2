import React from 'react';
import styled, { css } from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { BsList, BsThreeDotsVertical } from 'react-icons/bs';


/*
    아이콘 종류
    FiSearch : 돋보기
    BsList : 목록 (줄 세개)
    BsThreeDotsVertical : 더보기 (수직으로 된 세 점)
*/ 

// styled-components 라이브러리를 사용하여 컴포넌트 스타일링
const BannerBlock = styled.div`
border: 3px solid #FF0000;
    padding-top: 40px;
    padding-bottom: 2px;
    border-bottom: 1px solid #e9ecef;
    
    h1 {
        border: 3px solid #FFFFFF;
        margin: 0;
        font-size: 10px;
        color: #ffffff;
    }
    h2 {
        border: 3px solid #FFFFFF;
        margin: 0;
        font-size: 20px;
        color: #ffffff;
    }
    h3 {
        border: 3px solid #FFFFFF;
        margin: 0;
        font-size: 15px;
        color: #ffffff;
    }
`;


const FinderBlock = styled.div`
border: 1px solid #FF0000;
    width: 50px;
    height: px;
    color: #ffffff;
    display: flex;
    margin-left: 260px;
`;

const Finder = styled.div`
border: 1px solid #FF0000;
    width: 20px;
    height: 20px;
    font-size: 20px;
    margin-right: 2px;
    cursor: pointer;
`;

const BannerMiddleBlock = styled.div`
border: 1px solid #FF0000;
    margin-top: 80px;
    height: 50px; 
    margin-left: 13px;
`;

const Num = styled.div`
border: 1px solid #FF0000;
    width: 15px;
    height: 13px;
    font-size: 10px;
    transform: translate(-22%, 0%) scale(0.8);
    text-align: center;
    line-height: 1.3;
`;

const BannerBottomBlock = styled.div`
border: 1px solid #FF0000;
    margin-top: 30px;
    height: 70px; 
    margin-left: 13px;
    color: #FFFFFF;
    display: flex;
`;

const ProfileImage = styled.img`
border: 1px solid #FF0000;
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background: #ced4da;
    margin-top: 10px;
    margin-bottom: 5px;
    cursor: pointer;
`;

const BannerBottomMiddleBlock = styled.div`
border: 1px solid #FF0000;
    width: 230px;
    height: 100px; 
    margin-left: 10px;
    color: #FFFFFF;
`;


const ProfileName = styled.div`
border: 1px solid #FF0000;
    width: 230px;
    margin: 0;
    font-size: 13px;
    color: #ffffff;
    margin-top: 10px;
    margin-bottom: 2px;
    line-height: 1.3;
`;

const BannerBottomMiddleBottomBlock = styled.div`
border: 1px solid #FF0000;
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
border: 1px solid #FF0000;
    margin-top: 8px;
    width: 25px;
    height: 25px;
    font-size: 25px;
    line-height: 0.5;
    text-align: center;
    margin-right: 8px;
    cursor: pointer;
`;

/*
function Banner( _id, _bannerImage, _todayCount, _totalCount, _blogName, _profileName, _blogCategory, _neighborNum ) {
    return (
      <BannerBlock >
          <div style={{ backgroundImage: `url(${_bannerImage})` }}>
          </div>
          <div style={{ backgroundImage: `url(${_bannerImage})` }}>
          </div>
          <FinderBlock>
              <Finder onClick={() => {console.log("Finder click")}}><FiSearch/></Finder>
              <Finder onClick={() => {console.log("list click")}}><BsList/></Finder>
          </FinderBlock>
          <BannerMiddleBlock>
              <Num>{_todayCount}</Num>
              <h1>오늘 {_todayCount} · 전체 {_totalCount}</h1>
              <h2>{_blogName} </h2>
          </BannerMiddleBlock>
          <BannerBottomBlock>
              <ProfileImage></ProfileImage>
              <BannerBottomMiddleBlock>
                  <ProfileName>{_profileName}</ProfileName>
                  <BannerBottomMiddleBottomBlock>{_blogCategory} {_neighborNum}명의 이웃</BannerBottomMiddleBottomBlock>
              </BannerBottomMiddleBlock>
              <Finder2 onClick={() => {console.log("더보기")}}><BsThreeDotsVertical/></Finder2>
          </BannerBottomBlock>
      </BannerBlock>
    );
  }
*/

function Banner( _id, _bannerImage, _todayCount, _totalCount, _blogName, _profileName, _blogCategory, _neighborNum ) {
  return (
    <BannerBlock >
        <div style={{ backgroundImage: `url(${_bannerImage})` }}>
        </div>
        <div style={{ backgroundImage: `url(${_bannerImage})` }}>
        </div>
        <FinderBlock>
            <Finder onClick={() => {console.log("Finder click")}}><FiSearch/></Finder>
            <Finder onClick={() => {console.log("list click")}}><BsList/></Finder>
        </FinderBlock>
        <BannerMiddleBlock>
            <Num>{_todayCount}</Num>
            <h1>오늘 0{_todayCount} · 전체 2,807 {_totalCount}</h1>
            <h2>Dear {_blogName} </h2>
        </BannerMiddleBlock>
        <BannerBottomBlock>
            <ProfileImage></ProfileImage>
            <BannerBottomMiddleBlock>
                <ProfileName>솝트 디자인{_profileName}</ProfileName>
                <BannerBottomMiddleBottomBlock>일상·생각 {_blogCategory} 38{_neighborNum}명의 이웃</BannerBottomMiddleBottomBlock>
            </BannerBottomMiddleBlock>
            <Finder2 onClick={() => {console.log("더보기")}}><BsThreeDotsVertical/></Finder2>
        </BannerBottomBlock>
    </BannerBlock>
  );
}

export default Banner;

