import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css'
import NewThread from './components/pages/NewThread'
import ThreadList from './components/pages/ThreadList'
import PostList from './components/pages/PostList'
import Header from "./components/assets/Header";

function App() {
//遷移 https://www.dailyupblog.com/web_development/2042/
  return (<BrowserRouter>
	<Header/>
	<hr></hr>
	<Routes>
    <Route path="/" element={<ThreadList/>} />
    <Route path="/thread" element={<NewThread />} />
		<Route path="/thread/:threadId" element={<PostList/>} />
  </Routes>

	</BrowserRouter>)
}

export default App
