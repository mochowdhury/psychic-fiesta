// Make sure the script tag in HTML file uses the key word defer!
// Otherwise, the document won't load and you'll chase your tail wondering why bodyElement
// (or whatever element you're selecting) comes back null/none/undefined.

const headerText = 'Psychic Fiesta - API Practice Lab'
const instructUlText = ['Welcome to Psychic Fiesta, an API Practice Lab!',
    'Please click the button to trigger a random action.',
    'Please use the textbox to search for something you like.']
let bodyElement = document.querySelector('body')
let headerElement = document.createElement('h1')
let mainDivElement = document.createElement('div')
let instructionsDivElement = document.createElement('div')
let instructionsUlElement = document.createElement('ul')

function createHeader(bodyElement, headerElement, headerText){
    headerElement.textContent = headerText
    bodyElement.appendChild(headerElement)
}

createHeader(bodyElement, headerElement, headerText)

function createMainDiv(bodyElement, mainDivElement){
    mainDivElement.classList.add('main')
    mainDivElement.id = 'main-div-id'
    bodyElement.appendChild(mainDivElement)
}

createMainDiv(bodyElement, mainDivElement)

// Refactor
// -- not DRY not
// -- not ONE task
function createInstructionsElement(bodyElement, instructionsDivElement, instructUlText, instructionsUlElement){
    instructionsDivElement.classList.add('instruct')
    instructionsDivElement.id = 'instruct-div-id'
    bodyElement.insertBefore(instructionsDivElement, mainDivElement)

    instructionsUlElement.classList.add('instruct')
    instructionsUlElement.id = 'instruct-ul-id'
    instructionsDivElement.appendChild(instructionsUlElement)

    for (let index = 0; index < instructUlText.length; index++){
        let instructionsLiElement = document.createElement('li')
        instructionsLiElement.classList.add('instruct')
        instructionsLiElement.id = `instruct-li-${index}-id`
        instructionsLiElement.textContent = instructUlText[index]
        instructionsUlElement.appendChild(instructionsLiElement)
    }
}

createInstructionsElement(bodyElement, instructionsDivElement, instructUlText, instructionsUlElement)
