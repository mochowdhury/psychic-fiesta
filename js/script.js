// Make sure the script tag in HTML file uses the key word defer!
// Otherwise, the document won't load and you'll chase your tail wondering why bodyElement
// (or whatever element you're selecting) comes back null/none/undefined.

const headerText = 'Psychic Fiesta - API Practice Lab'
const instructUlText = ['Welcome to Psychic Fiesta, an API Practice Lab!',
    'Please click the button to trigger a random action.',
    'Please use the textbox to search for something you like.']
//const searchApiUrl = 'https://get.geojs.io/v1/ip/geo/'
const searchApiUrl = 'https://api.domainsdb.info/v1/domains/search?limit=50&domain='

let bodyElement = document.querySelector('body')

// Refactor
// -- Might be able to use one instantiation of div element.

let instructionsDivElement = document.createElement('div')
let instructionsUlElement = document.createElement('ul')

let headerElement = document.createElement('h1')

let mainDivElement = document.createElement('div')

let searchDivElement = document.createElement('div')
let searchBoxElement = document.createElement('input')
let searchButtonElement = document.createElement('button')

let randomDivElement = document.createElement('div')


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

function createSearch(mainDivElement, searchDivElement, searchBoxElement, searchButtonElement){
    searchDivElement.classList.add('main')
    searchDivElement.id = 'search-div-id'
    mainDivElement.appendChild(searchDivElement)

    searchBoxElement.classList.add('main')
    searchBoxElement.id = 'search-box-id'
    searchBoxElement.placeholder = 'search-box-id'
    searchDivElement.appendChild(searchBoxElement)

    searchButtonElement.classList.add('main')
    searchButtonElement.id = 'search-button-id'
    searchButtonElement.textContent = "Search"
    searchDivElement.appendChild(searchButtonElement)
}

createSearch(mainDivElement, searchDivElement, searchBoxElement, searchButtonElement)

function implementSearch(searchBoxElement, searchButtonElement, searchApiUrl){
    let searchText = ''
    searchButtonElement.addEventListener('click', getSearchBoxValue)

    function getSearchBoxValue(){
        searchText = searchBoxElement.value
        getSearchResults(searchText, searchApiUrl)
    }

    function getSearchResults(queryString, searchApiUrl){
        let ajaxClient = new XMLHttpRequest()
        // Overcome CORS
        // -- Stackoverflow: https://stackoverflow.com/a/46785554
        // -- Github: https://corsproxy.github.io/

        ajaxClient.open('GET', `${searchApiUrl}${queryString}`)
        ajaxClient.setRequestHeader('Access-Control-Allow-Origin','*')
        ajaxClient.send()
        console.log(ajaxClient.response)

        // No way to overcome XHR vs CORS issues even with the domain search site. Tried a few proxies, but even those haven't worked. I'll have to get this on an EC2 instance or put it up on S3 and try again over the break.

    }
}

implementSearch(searchBoxElement, searchButtonElement, searchApiUrl)