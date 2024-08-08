export const getName=async(threadId)=>{
	for (let i = 0; i < 2; i++) {

		const result=await new Promise((resolve,rej)=>{
			fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=${i}*10`,{
				method:"GET"
			})
			.then(res =>res.json())
			.then(
				(result) => {
					for (let thread_i = 0; thread_i < 10; j++) {
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
	return 'このログは倉庫にあります'
}

export default getName