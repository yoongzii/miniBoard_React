//PostView
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentList from '../list/CommentList';
import { Button, PostStyle, CommentStyle, BtnBox, PostInput } from '../ui/Style';
// import data from '../../data.json';

function PostView() {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState();

  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find(item => item.id == postId)
  console.log(post.comments);

  return (
    <>
      <BtnBox>
        <Button label='목록으로'
          onClick={() => navigate('/')} />
      </BtnBox>

      <PostStyle>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </PostStyle>
      <CommentStyle>
        <h4>댓글</h4>
        <CommentList comments={post.comments} />
        <div className='comment_write'>
          <PostInput
            height={80}
            onChange={e => setComment(e.target.value)}
            placeholder='댓글을 입력'
          />
          <button className='comment_submit'>등록</button>
        </div>
      </CommentStyle>


      <BtnBox>
        <Button label='삭제' color='#294B29' />
        <Button label='수정' />
        <Button label='글쓰기' />
        <Button label='답글' />
      </BtnBox>
    </>
  )
}

export default PostView