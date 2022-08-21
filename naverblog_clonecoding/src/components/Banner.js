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
    padding-top: 40px;
    padding-bottom: 2px;
    border-bottom: 1px solid #e9ecef;
    background: #000000; 
    background-image: "url('https://firebasestorage.googleapis.com/v0/b/sopt-server.appspot.com/o/blog_banner.png?alt=media&token=1f3417e5-1449-4010-a775-53fcd3ababee')";
    h1 {
        margin: 0;
        font-size: 10px;
        color: #ffffff;
    }
    h2 {
        margin: 0;
        font-size: 20px;
        color: #ffffff;
    }
    h3 {
        margin: 0;
        font-size: 15px;
        color: #ffffff;
    }
`;

const bannerImage = styled.img`
    width: 60px;
    height: 60px
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

const FinderBlock = styled.div`
    width: 100%;
    height: 50px;
    color: #ffffff;
    display: flex;
    margin-left: 260px;
`;

const Finder = styled.div`
    width: 13px;
    height: 13px;
    font-size: 20px;
    margin-right: 8px;
    cursor: pointer;
`;

const BannerMiddleBlock = styled.div`
    margin-top: 80px;
    height: 50px; 
    margin-left: 13px;
`;

const Num = styled.div`
    width: 15px;
    height: 13px;
    font-size: 10px;
    transform: translate(-22%, 0%) scale(0.8);
    text-align: center;
    line-height: 1.3;
`;

const BannerBottomBlock = styled.div`
    margin-top: 30px;
    height: 70px; 
    margin-left: 13px;
    color: #FFFFFF;
    display: flex;
`;

const ProfileImage = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background: #ced4da;
    margin-top: 10px;
    margin-bottom: 5px;
    cursor: pointer;
`;

const BannerBottomMiddleBlock = styled.div`
    width: 230px;
    height: 100px; 
    margin-left: 10px;
    color: #FFFFFF;
`;


const ProfileName = styled.div`
    width: 230px;
    margin: 0;
    font-size: 13px;
    color: #ffffff;
    margin-top: 10px;
    margin-bottom: 2px;
    line-height: 1.3;
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
    width: 15px;
    height: 15px;
    transform: translate(-22%, 0%) scale(0.8);
    font-size: 25px;
    margin-right: 8px;
    cursor: pointer;
`;


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
