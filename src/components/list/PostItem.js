//PostItem
import { ItemStyle } from '../ui/Style'

function PostItem({post, onClick}) {
   return (
      <>
         <ItemStyle onClick={onClick}>
         {post.title}
         {post.comments.length > 0 &&
            <span>[{post.comments.length}]</span>
         }
         </ItemStyle>
      </>
   )
}

export default PostItem;