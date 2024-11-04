import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import PostWrite from './components/page/PostWrite';
import PostView from './components/page/PostView';
import { Wrapper, GlobalStyle } from './components/ui/Style';

function App() {
   const [data, setData] = useState([
      {
         "id": 1,
         "title": "리액트에서 리스트 렌더링하기",
         "content": "안녕하세요.\n이번 글에서는 리액트에서 리스트를 렌더링하는 방법에 대해서 배워보겠습니다.\n리스트를 렌더링하기 위해서는 자바스크립트 배열에서 제공하는 map함수를 사용합니다.",
         "comments": [
         {
            "id": 11,
            "content": "실제로 개발하다보면 map함수를 진짜 많이 쓰는 것 같아요😄"
         },
         {
            "id": 12,
            "content": "적용해보니 코드가 정말 간결해지네요ㅎㅎ"
         }
         ]
      },
   ])
   const addPost = (title, content) => {
      setData([...data, {
         id: data.length + 1,
         title: title,
         content: content,
         comments: []
      }])
   }
   console.log(data);
   return (
      <>
         <GlobalStyle />
         <Wrapper>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<MainPage posts={data} />} />
               <Route path='/write' element={<PostWrite addPost={addPost} />} />
               <Route path='/post/:postId' element={<PostView posts={data} setPosts={setData} />}/>
            </Routes>
         </BrowserRouter>
         </Wrapper>
      </>
   );
}

export default App;
