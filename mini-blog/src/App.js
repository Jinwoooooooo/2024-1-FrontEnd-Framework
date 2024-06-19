import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-family: Bebas;
  letter-spacing: 3px;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-top: 100px;
  margin-bottom: 65px;
  -webkit-text-stroke: 1px black;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>SoundScape</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;