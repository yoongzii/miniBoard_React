import CommentItem from './CommentItem';

export default function CommentList({comments}) {
  return (
    <>
      <ul>
        {comments.map(comment => <CommentItem
          key={comment.id} comment={comment}
        />)}
      </ul>
    </>
  )
}