import {Library_Books} from './scripts/Library_Books.js';

let button = document.getElementById('btn');
let book_title = document.getElementById('book_title');
let author = document.getElementById('author');



button.addEventListener('click', () => {
    for(let x = 0; x < Library_Books.length; x++){
        if(Library_Books[x].name === book_title.value){
            console.log('Book Name: ' + Library_Books[x].name + ', Author: ' + Library_Books[x].author)
        }
    }
})