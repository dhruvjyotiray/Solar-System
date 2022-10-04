const mercury = document.createElement('img')
mercury.src = 'PLANETS/mercury.png'

const venus = document.createElement('img')
venus.src = 'PLANETS/venus.png'

const earth = document.createElement('img')
earth.src = 'PLANETS/earth.png'

const mars = document.createElement('img')
mars.src = 'PLANETS/mars.png'

const jupiter = document.createElement('img')
jupiter.src = 'PLANETS/jupiter.png'

const saturn = document.createElement('img')
saturn.src = 'PLANETS/saturn.png'

const uranus = document.createElement('img')
uranus.src = 'PLANETS/uranus.png'

const neptune = document.createElement('img')
neptune.src = 'PLANETS/neptune.png'

// const planetDisplay  = document.querySelector('#planet-display')
const massInput = document.querySelector('#mass-input')
const planetSelect = document.querySelector('#planet-select')
const weightExecute = document.querySelector('#weight-execute')
// const planetWeightDiv = document.querySelector('#planet-weight-div')
// const planetPhotoDiv = document.querySelector('#planet-photo-div')
// const infoText = document.querySelector('#info-text')
const mainContent = document.querySelector('#main-content')

let counter = 0
weightExecute.addEventListener('click', event => {
counter += 1
console.log(counter)
const planetDisplay = document.createElement('div')
planetDisplay.setAttribute('id', 'planet-display')

const planetPhotoDiv = document.createElement('div')
planetPhotoDiv.setAttribute('id', 'planet-photo-div')

const planetWeightDiv = document.createElement('div')
planetWeightDiv.setAttribute('id', 'planet-weight-div')

const infoText = document.createElement('p')
infoText.setAttribute('id', 'info-text')


function dataGenerate() {

mainContent.appendChild(planetDisplay)
planetDisplay.appendChild(planetPhotoDiv)
planetDisplay.appendChild(planetWeightDiv)
planetWeightDiv.appendChild(infoText)

    if (planetSelect.value == 'mercury') {
        planetDisplay.appendChild(mercury)
        let newtonInfo = document.createElement('div')
        newtonInfo.innerHTML = `${Math.round(massInput.value*3.6)}N`
        newtonInfo.style.fontSize = '90px'
        newtonInfo.className = "weight-class"
        planetWeightDiv.appendChild(newtonInfo)
        infoText.innerHTML = `The weight of the object on <b>${planetSelect.value.toUpperCase()}</b>`

    } else if (planetSelect.value == 'venus') {
        planetDisplay.appendChild(venus)
        let newtonInfo = document.createElement('div')
        newtonInfo.innerHTML = `${Math.round(massInput.value*8.9)}N`
        newtonInfo.style.fontSize = '90px'
        newtonInfo.className = "weight-class"
        planetWeightDiv.appendChild(newtonInfo)
        infoText.innerHTML = `The weight of the object on <b>${planetSelect.value.toUpperCase()}</b>`

    } else if (planetSelect.value == 'mars') {
        planetDisplay.appendChild(mars)
        let newtonInfo = document.createElement('div')
        newtonInfo.innerHTML = `${Math.round(massInput.value*3.7)}N`
        newtonInfo.style.fontSize = '90px'
        newtonInfo.className = "weight-class"
        planetWeightDiv.appendChild(newtonInfo)
        infoText.innerHTML = `The weight of the object on <b>${planetSelect.value.toUpperCase()}</b>`

    } else if (planetSelect.value == 'jupiter') {
        planetDisplay.appendChild(jupiter)
        let newtonInfo = document.createElement('div')
        newtonInfo.innerHTML = `${Math.round(massInput.value*24.8)}N`
        newtonInfo.style.fontSize = '90px'
        newtonInfo.className = "weight-class"
        planetWeightDiv.appendChild(newtonInfo)
        infoText.innerHTML = `The weight of the object on <b>${planetSelect.value.toUpperCase()}</b>`

    } else if (planetSelect.value == 'saturn') {
        planetDisplay.appendChild(saturn)
        let newtonInfo = document.createElement('div')
        newtonInfo.innerHTML = `${Math.round(massInput.value*10.4)}N`
        newtonInfo.style.fontSize = '90px'
        newtonInfo.className = "weight-class"
        planetWeightDiv.appendChild(newtonInfo)
        infoText.innerHTML = `The weight of the object on <b>${planetSelect.value.toUpperCase()}</b>`

    } else if (planetSelect.value == 'uranus') {
        planetDisplay.appendChild(uranus)
        let newtonInfo = document.createElement('div')
        newtonInfo.innerHTML = `${Math.round(massInput.value*8.7)}N`
        newtonInfo.style.fontSize = '90px'
        newtonInfo.className = "weight-class"
        planetWeightDiv.appendChild(newtonInfo)
        infoText.innerHTML = `The weight of the object on <b>${planetSelect.value.toUpperCase()}</b>`

    } else if (planetSelect.value == 'neptune') {
        planetDisplay.appendChild(neptune)
        let newtonInfo = document.createElement('div')
        newtonInfo.innerHTML = `${Math.round(massInput.value*11.1)}N`
        newtonInfo.style.fontSize = '90px'
        newtonInfo.className = "weight-class"
        planetWeightDiv.appendChild(newtonInfo)
        infoText.innerHTML = `The weight of the object on <b>${planetSelect.value.toUpperCase()}</b>`

    } else if (planetSelect.value == 'earth') {
        planetDisplay.appendChild(earth)
        let newtonInfo = document.createElement('div')
        newtonInfo.innerHTML = `${Math.round(massInput.value*9.8)}N`
        newtonInfo.style.fontSize = '90px'
        newtonInfo.className = "weight-class"
        planetWeightDiv.appendChild(newtonInfo)
        infoText.innerHTML = `The weight of the object on <b>${planetSelect.value.toUpperCase()}</b>`

    }
}

if (counter==0) {
    dataGenerate()
} else {
    mainContent.innerHTML = ''
    dataGenerate()
    counter=0
}


})
