const btn = document.querySelector('.btn')
const body = document.querySelector('body')
btn.addEventListener('click', () => {
	const type = prompt('Type')
	type === 'red'
		? (body.style.color = '#d30505')
		: (body.style.color = '#05d316')
})
const getUsers = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await response.json()
		console.log(data)
		return data
	} catch (error) {
		console.log(error)
	}
}

getUsers()

fetch('https://jsonplaceholder.typicode.com/users/1')
	.then(response => response.json())
	.then(console.log)
