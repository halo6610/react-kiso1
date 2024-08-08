import {Link} from "react-router-dom";
export const Header=()=>{
	return(
		<header>
		<div>
			<div id="title">掲示板アプリ</div>
			<div id="makeThread">
				<Link to="/thread">新規スレッド</Link>
			</div>
		</div>
	</header>
	
	)
}
export default Header