import CommentItem from './CommentItem';

export default function CommentList({comments, onClick}) {

   return (
      <>
         <ul>
         {comments.map(comment => <CommentItem
            key={comment.id} comment={comment} onDelete={onClick}
         />)} {/*  → li */}
         </ul>
      </>
   )
}