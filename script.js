const addCookie = document.querySelector('#add-cookie')
const showCookies = document.querySelector('#show-cookies')
const cookieOutput = document.querySelector('#cookie-output')
const welcome = document.querySelector('#welcome')


let cookieData = document.cookie
let position = cookieData.search('lastVisit=')
if( position === 0 ) {
	let value = cookieData.substring(10)
	console.log('Det finns en cookie med value=', value)
	let lastVisit = new Date(value)
	let lastVisitMs = lastVisit.getTime()

	let timeNowMs = Date.now()

	let diff = (timeNowMs - lastVisitMs) / 1000
	console.log('Diff ', timeNowMs, lastVisitMs)
	welcome.innerText = `Välkommen tillbaka! Du var senast här för ${diff} sekunder sedan.`

} else {
	console.log('Det finns inte någon cookie')
}
let dateTimeString = getISOTime()
document.cookie = `lastVisit=${dateTimeString}`
// TODO: använd konstanter i stället för "magic strings" som 'lastVisit='

// const str = 'aefghijklmnopqr'
// Finns m i strängen?
// str.charAt(index)
// str.substring??
// str.includes??




addCookie.addEventListener('click', () => {
	let dateTimeString = getISOTime()
	document.cookie = `lastVisit=${dateTimeString}`
})

showCookies.addEventListener('click', () => {
	const cookieData = document.cookie
	const p = document.createElement('p')
	p.innerText = cookieData
	cookieOutput.insertBefore(p, cookieData.firstChild)
})

function getISOTime() {
	let now = new Date()
	return now.toISOString()
}


// 1 timme == 60 minuter == 60 * 60 sekunder
const secondsPerDay = 24 * 60 * 60
