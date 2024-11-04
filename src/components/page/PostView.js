//PostView
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentList from '../list/CommentList';
import { Button, PostStyle, CommentStyle, BtnBox, PostInput } from '../ui/Style';


function PostView({posts, setPosts}) {
   // const [comments, setComments] = useState([])//전체 댓글
   const [newComment, setNewComment] = useState()//인풋

   const navigate = useNavigate();
   const { postId } = useParams();

   const post = posts.find(item => item.id == postId)
   if(!post) {
      return <div>
         <p>Not Found</p>
         <button onClick={() => navigate('/')}>홈으로</button>
      </div>
   }

   const handleCommentSubmit = () => {
      //코멘트 등록 버튼
      //코멘트 인풋에 저장된 코멘트(입력받은 텍스트) => newComment
      //newComment를 post(data 배열의 id가 postId와 같은)의 comments 배열에 추가
      //comments 배열을 App.js에 리프팅하고 data를 수정


      const updatePosts = posts.map(item =>
      //updatePosts 전체 페이지 item 과 현재 페이지 post
      // item.id == post.id ? () : item

         item.id == post.id
         ? {
         // id, title, content 는 그대로 가지고 오는 → ...item
         // 바뀌는 내용은 comments
         ...item,
         comments : [
            ...item.comments, //기존의 내용은 그대로 가져오고
            // 추가된 댓글 넣기
            //{
            //    "id": 11,
            //    "content": "실제로 개발하다보면 map함수를 진짜 많이 쓰는 것 같아요😄"
            // } → 형태 틀 맞춰서 작성

            {
               id: `${post.id}${post.comments.length + 1}`,
               content: newComment
            }
         ]
      }
         : item
      )
      setPosts(updatePosts)
      //updatePosts 변수 처리
   }
   const handleCommentDelete = commentId => {
    //commentId 변수: commentItem 에서 가지고 온 comment.id
      const updatePosts = posts.map(item =>
         item.id == post.id
         ? {...item,
            comments : item.comments.filter(comment =>
            comment.id != commentId)
         }
         : item
      )
      setPosts(updatePosts)
   }

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
         <CommentList comments={post.comments} onClick={handleCommentDelete}/>
         <div className='comment_write'>
            <PostInput
               height={80}
               value={newComment}
               onChange={e => setNewComment(e.target.value)}
               placeholder='댓글을 입력'
            />
            <button className='comment_submit' onClick={handleCommentSubmit}>등록</button>
         </div>
         </CommentStyle>

         <BtnBox>
         <Button label='삭제' />
         <Button label='수정' />
         <Button label='글쓰기' color='#294B29' onClick={() => navigate('/write')} />
         </BtnBox>
      </>
   )
}

export default PostView