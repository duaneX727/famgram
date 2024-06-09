import { useUserContext } from '@/context/AuthContext'
import { formatDateString } from '@/lib/utils'
import { Models } from 'node_modules/appwrite/types/models'
import { Link } from 'react-router-dom'

type PostCardProps = {
  post: Models.Document
} 
const PostCard = ({post}:PostCardProps) => {
  const {user} = useUserContext()

  if(!post.creator) return;
  return (
    <div className='post-card'>
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={post.creator?.imageUrl || '/assets/icons/profile-placeholder.svg'}
              alt="creator"
              className="w-12 lg:h-12 rounded-full"
            />
          </Link>
          <div className="flex flex-col">
            <p className='base-medium lg:body-bold text-light-1'>
              {post.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className='subtle-semibold lg:small-regular'>
                {formatDateString(post.$createAt)}
              </p>
            -
            <p className='subtle-semibold lg:small-regular'>
              {post.location}
            </p>
            </div>
          </div>
        </div>
        <Link to={`/update-post/${post.$id}`}
           className={`${user.id !== post.creator.$id && "hidden"}`}
        >
          <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20}/>
        </Link>
      </div>
      <Link>
      </Link>
    </div>
  )
}
export default PostCard