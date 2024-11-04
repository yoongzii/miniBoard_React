//PostWrite.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, BtnBox, PostInput } from "../ui/Style";

function PostWrite({addPost}) {
  const navigator = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    addPost(title, content)
    navigator('/')
  }
  return (
    <>
      <PostInput
        height={52}
        onChange={e => setTitle(e.target.value)}
        placeholder='제목을 입력'
      />
      <PostInput
        height={480}
        onChange={e => setContent(e.target.value)}
        placeholder='내용을 입력'
      />

      <BtnBox>
        <Button label='취소'
          onClick={() => navigator('/')} />
        <Button label='작성완료'
          onClick={handleSubmit} />
      </BtnBox>

    </>
  )
}
export default PostWrite;