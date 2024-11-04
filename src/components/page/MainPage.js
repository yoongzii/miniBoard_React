//MainPage.js
import { useNavigate } from 'react-router-dom'
import { Button, BtnBox } from '../ui/Style'
import PostList from '../list/PostList';
import { useState } from 'react';
// import data from '../../data.json'

function MainPage({posts}) {
  const navigate = useNavigate()

  return (
    <>
      <h1>미니 게시판</h1>
      <BtnBox>
        <Button
          label='글쓰기'
          onClick={() => navigate('/write')}
        />
      </BtnBox>
      <PostList posts={posts} />
    </>
  )
}
export default MainPage;