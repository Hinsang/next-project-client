import React, { useState, useEffect } from 'react';
import About1 from '../components/About1';

const MyPage = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [textDone, setTextDone] = useState(false);
  const sentence = '포트폴리오 사용기술';
  useEffect(() => {
    const typing = setInterval(() => {
      setText(text + sentence[count]);
      setCount(count + 1);
    }, 200);
    if (sentence.length === count) {
      clearInterval(typing);
      setTimeout(() => {
        setTextDone(true);
      }, 1000);
    }
    return () => {
      clearInterval(typing);
    };
  });
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <h2 className="text" style={{ marginBottom: '40px' }}>{ text }</h2>
      {textDone
        ? (
          <div>
            <h4>React, next, redux, saga, express, mongoose, antd, styled-component, mongoDB 등을 사용하여
              회원가입, 유효성검사, 로그인 API기능을 추가하고, cors에러를 해결하며 airbnb 문법으로 코드를 작성하였습니다.
              client는 netlify로 배포하였고, server는 aws로 배포하려고 하였으나, aws가 신용카드가 없어서 회원가입을 못해서
              일단 front만 배포하기로 하였습니다. (server부분은 사실 백엔드 개발자의 영역이기도 하므로..) 그래서 로그인 회원가입
              api 구현은 했으나 server 배포는 안해서 작동하지는 않습니다.
            </h4>
            <h2 style={{ marginTop: 100 }}>현재 기술 스택</h2>
            <About1 />
          </div>
        )
        : <div />}
      <br /><br /><br /><br /><br />
    </div>
  );
};

export default MyPage;
