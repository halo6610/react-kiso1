import {Link} from "react-router-dom";
import '../css/NewThread.css'
import { useState } from 'react'
const NewThread = () => {
	const [text,setText]=useState('')
	function create(){
		if(['',' ','　'].some(v=>v===text))return
		fetch(`https://railway.bulletinboard.techtrain.dev/threads`,{
			method:"POST",
			body: JSON.stringify({"title":text})
		})
		.then(res =>res.json())
		.then(
			(result) => {
				setText('')
			},
			(error) => {
				console.log(error)
			}
		)
	}
	
  return (
    <div id="newThread">
      <h1 >スレッド新規作成</h1>
			<div>
			<form onSubmit={(e) => e.preventDefault()}>
			<input id="newThreadTextBox" value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="スレッドタイトル" />
			</form>
			</div>
			<br/>
			<div>
				<div id="post"><button onClick={create}>投稿する</button></div>
				<div id="back"><Link to="/">戻る</Link></div>
			</div>
			
    </div>

		//<button onClick={post}>表示する</button>
  );
};
//
export default NewThread;