const myStorage = window.localStorage;


function checkTheme() {
	if (myStorage.getItem('theme') === undefined || myStorage.getItem('theme') === null) {
		myStorage.setItem('theme', 'dark')
		changeBodyClass(myStorage, 'dark', 'light')
		return
	}
	changeBodyClass(myStorage, 'dark', 'light')
	changeBodyClass(myStorage, 'light', 'dark')
	console.log(myStorage.getItem('theme'))
}


function changeBodyClass(storage, newClass, olderClass) {
	if (storage.getItem('theme') === newClass) {
		document.body.classList.remove(olderClass)
		document.body.classList.add(newClass)
		myStorage.setItem('theme', newClass)
	}
}

checkTheme()