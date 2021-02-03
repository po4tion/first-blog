import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div``;

function AuthTemplate({ children }) {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
}

export default AuthTemplate;

// 회원가입과 로그인 페이지의 레이아웃
