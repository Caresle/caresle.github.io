const formSearchInput = document.querySelector('.search-project-form>input')
const formSearchButton = document.getElementById('search-project-btn')

formSearchButton.addEventListener('click', e => {
	e.preventDefault()
	const toSearch = formSearchInput.value

	if (isNaN(toSearch) || toSearch == undefined) return
	console.log(`hello ${toSearch}`)
})