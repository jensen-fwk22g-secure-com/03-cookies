const addCookie = document.querySelector('#add-cookie')
const showCookies = document.querySelector('#show-cookies')
const cookieOutput = document.querySelector('#cookie-output')
const welcome = document.querySelector('#welcome')

const lastVisitKey = 'lastVisit'
const clickCountKey = 'clickCount'

let cookieData = document.cookie
let clickCount = 0
let cookieList = cookieData.split(';')
welcome.innerText = ''
cookieList.forEach(cookie => {
	cookie = cookie.trim()
	// console.log('Cookie list loop', cookie, cookie.search(lastVisitKey + '='))
	if (cookie.search(lastVisitKey + '=') === 0 ) {
		let value = cookie.substring(lastVisitKey.length + 1)
		// console.log('Det finns en cookie med value=', value)
		let lastVisit = new Date(value)
		let lastVisitMs = lastVisit.getTime()

		let timeNowMs = Date.now()

		let diff = (timeNowMs - lastVisitMs) / 1000
		// console.log('Diff ', timeNowMs, lastVisitMs)
		welcome.innerText += `Välkommen tillbaka! Du var senast här för ${diff} sekunder sedan.`
	}
	else if (cookie.search(clickCountKey + '=') === 0) {
		let value = cookie.substring(clickCountKey.length + 1)
		// Obs! value är en sträng och måste typomvandlas
		clickCount = Number(value)
		welcome.innerText += `Antal klick: ${clickCount}. `
	}
})

// Typomvandling:
// -> datatypens funktion, exempel Number('15'), Boolean('true')
// -> automatisk typkonvertering: 1 + '1' === '1' + '1' === '11'
// -> '15' - '10' === 15 - 10 === 5
// -> +'25' === 25

// Viktiga metoder för stränghantering:
// - substring
// - search, includes
// - split
// - trim, toLowerCase, toUpperCase


let dateTimeString = getISOTime()
document.cookie = `${lastVisitKey}=${dateTimeString}`


// TODO: använd konstanter i stället för "magic strings" som 'lastVisit='

// const str = 'aefghijklmnopqr'
// Finns m i strängen?
// str.charAt(index)
// str.substring??
// str.includes??




addCookie.addEventListener('click', () => {
	let dateTimeString = getISOTime()
	document.cookie = `${lastVisitKey}=${dateTimeString}`
	clickCount++
	document.cookie = `clickCount=${clickCount}` // 'clickCount=' + clickCount
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
