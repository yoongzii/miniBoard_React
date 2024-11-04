//CommentItem.js


function CommentItem({comment, onDelete}) {
   return (
      <li style={{display: 'flex', justifyContent:'space-between'}}>

         {comment.content}
         <button style={{background:'none', border: 'none'}} onClick={() => onDelete(comment.id)}>
            <i class="ri-delete-bin-5-line"></i>
         </button>

      </li>
   )
}

export default CommentItem;