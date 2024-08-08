import { useEffect,useState } from 'react'
import {Link} from "react-router-dom";
export const GetPostList = (props: { threadId: any; }) => {
	const [threadName,setThreadName]=useState('読み込み中') //投稿を保存
	const [text,setText]=useState('') //投稿を保存
	const [posts, setPosts] = useState<Item[]>([])
	interface Item {
		id: string;
		post: string;
	}
	useEffect(()=>{
		getData()
		getName(props.threadId)
		.then((result:any)=>{
			setThreadName(result)})
	},[])
	
	
	const getData=()=>{ //投稿一覧を取得して更新
		fetch(`https://railway.bulletinboard.techtrain.dev/threads/${props.threadId}/posts`,{
			method:"GET"
		})
		.then(res =>res.json())
		.then(
			(result) => {
				setPosts(result.posts)
			},
			(error) => {
				console.log(error)
			}
		)
	}
	const getName=async(threadId: any)=>{
		for (let i = 0; i < 2; i++) {
	
			const result=await new Promise((resolve,rej)=>{
				fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=${i*10}`,{
					method:"GET"
				})
				.then(res =>res.json())
				.then(
					(result) => {
						for (let thread_i = 0; thread_i < 10; thread_i++) {
							if(result.length<thread_i)resolve(null)
							if(result[thread_i].id===threadId)
							resolve(result[thread_i].title)
						}
						resolve(null)
					},
					(error) => {
						console.log(error)
						resolve(null)
					}
				)
			})
			if(result!==null) return result
		}
		return 'タイトルを読み込めませんでした'
	}

	function post(){ //投稿する
		if(['',' ','　'].some(v=>v===text))return
		fetch(`https://railway.bulletinboard.techtrain.dev/threads/${props.threadId}/posts`,{
			method:"POST",
			body: JSON.stringify({"post":text})
		})
		.then(res =>res.json())
		.then(
			(result) => {
				setText('')
				getData()
			},
			(error) => {
				console.log(error)
			}
		)
	}
	

	//https://qiita.com/moich/items/82c586644e1d48d145d8
	const postListHTML=posts.map((item)=>{
		return <div className="post" key={item.id}>{item.post}</div>
		}
	)
	return(
		<div className="posts">
		<div><h3>{threadName}</h3></div>
		{postListHTML}
    <div id="newThread">
			<div>
			<form onSubmit={(e) => e.preventDefault()}>
			<input id="newThreadTextBox" value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="入力する" />
			</form>
			</div>
			<div>
				<div id="post"><button onClick={post}>投稿する</button></div>
				<div id="back"><Link to="/">戻る</Link></div>
			</div>
			
    </div>
	</div>
	
	)
}
// value={props.selectedBreed} onChange={props.setSelectedBreed}
export default GetPostList