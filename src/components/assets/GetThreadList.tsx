import {Link} from "react-router-dom";
import { useEffect,useState } from 'react'
export const GetThreadList = () => {
	const [threads, setThreads] = useState<Item[]>([])
	interface Item {
		id: string;
		title: string;
	}

	useEffect(()=>{
		getData()
	},[])
	
	const getData=()=>{
		fetch(`https://railway.bulletinboard.techtrain.dev/threads`,{
			method:"GET"
		})
		.then(res =>res.json())
		.then(
			(result) => {
				//console.log(result)
				setThreads(result)
			},
			(error) => {
				console.log(error)
			}
		)
	}


	//https://qiita.com/moich/items/82c586644e1d48d145d8
	const threadListHTML=threads.map((item)=>{
		//<Link to="/">戻る
		//console.log(item)
		return <Link to={"/thread/"+item.id} key={item.id}><div className="thread">{item.title}</div></Link>
		}
	)
	return(
		<div className="threads">
			<div><h3>新着スレッド</h3></div>
			{threadListHTML}
		</div>
	)
}
// value={props.selectedBreed} onChange={props.setSelectedBreed}
export default GetThreadList