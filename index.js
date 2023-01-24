// Write your code here!


// # Task 1 Removing the main Element Through Dom


const main = document.querySelector('main#main')

main.parentNode.removeChild(main);


// # Task 2 Adding New Header

const newHeader = document.createElement("h1");

// # Task 3 Adding ID to New Header 

newHeader.id = "victory";

// # Task 4 Adding NAme

let name = 'Dismas';
newHeader.innerHTML = `${name} is the champion`;
