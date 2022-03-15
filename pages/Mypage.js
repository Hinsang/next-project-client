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
              client는 netlify로 배포하였고, server는 heroku로 배포하였으나, 배포모드에서 session이 추가가 안되는 에러가 발생해서
              그냥 프론트부터 먼저 배포하기로 했습니다. 그래서 로그아웃, 새로고침하면 로그인이 풀리는 문제가 발생합니다.
              그 외의 프론트엔드 부분이나 로그인, 회원가입 부분은 문제없이 작동합니다.
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
