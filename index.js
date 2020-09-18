// this will remove the main with the ID of main/

document.querySelector('main#main').remove();

// creates a new header and we give it the ID of named victory
const newHeader = document.createElement('h1');
newHeader.id = "victory"

// we asssign a string for that new header and id
newHeader.innerHTML = 'Josue is the champion'