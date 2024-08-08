
import { useLocation} from "react-router-dom";
import GetPostList from '../assets/GetPostList'
import '../css/PostList.css'

const PostList = () => {
  const location = useLocation();
	const pathname=location.pathname
	const match=pathname.match(/\/thread\/(.+)/)
	if(!match) return<></>
	const threadId=match[1]
  return ( <>
	<GetPostList threadId={threadId}/>

		</>)
};

export default PostList;