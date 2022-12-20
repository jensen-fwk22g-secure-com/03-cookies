const addCookie = document.querySelector('#addCookie')


addCookie.addEventListener('click', () => {
	let now = new Date()
	let dateTimeString = now.toISOString()
	document.cookie = `lastVisit=${dateTimeString}; max-age=5`
})


// 1 timme == 60 minuter == 60 * 60 sekunder
const secondsPerDay = 24 * 60 * 60
