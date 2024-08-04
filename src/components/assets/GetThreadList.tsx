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
				setThreads(result)
			},
			(error) => {
				console.log(error)
			}
		)
	}
	//https://qiita.com/moich/items/82c586644e1d48d145d8
	const threadListHTML=threads.map((item)=>{
		return <div className="thread" key={item.id}>{item.title}</div>
		}
	)
	return(
		<div id="threads">
		<div>新着スレッド</div>
		{threadListHTML}
	</div>
	)
}
// value={props.selectedBreed} onChange={props.setSelectedBreed}
export default GetThreadList