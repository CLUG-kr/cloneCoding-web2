import React, {useEffect, useState} from 'react';
import axios from 'axios';

//Datas 컴포넌트 작성하기
function Datas() {
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
    /* <사용한 태그 목록>
        ul: unordered list 순서가 없는 리스트 만들 때 사용
            즉 출력하면 다음과 같이 렌더링됨.
            - 항목1
            - 항목2
            - 항목3
            ...
        li: ul이나 ol 안에 들어가는 요소를 의미한다.
    */
   
    return (
        <>
            <ul>
            {datas.data.banner.map(data => (
                <li key={data.blogId}>
                {data.title}
                <img src={data.bannerImage}></img>
                </li>
            ))}
            </ul>
            <button onClick={fetchDatas}>다시 불러오기</button>
        </>
        );
}

export default Datas;


