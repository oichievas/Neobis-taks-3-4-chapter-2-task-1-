'use strict'
// Skorogovorka
let first = document.querySelector('#string-1');
let second = document.querySelector('#string-2');
let third = document.querySelector('#string-3');
let fourth = document.querySelector('#string-4');
let fifth = document.querySelector('#string-5');
let six = document.querySelector('#string-6');
let stix = document.querySelector('.stix');

console.log(first.innerHTML)
console.log(second.innerHTML)
console.log(third.innerHTML)
console.log(fourth.innerHTML)
console.log(fifth.innerHTML)
console.log(six.innerHTML)

stix.innerHTML = `${first.innerHTML} <br> ${second.innerHTML} <br> ${third.innerHTML} <br> ${fourth.innerHTML} <br> ${fifth.innerHTML} <br> ${six.innerHTML}`

// End Skorogovorka

// Red, green text
let red = document.querySelector('.red');
let red1 = document.querySelector('.red1');
let red2 = document.querySelector('.red2');
let green = document.querySelector('.green');
let green1 = document.querySelector('.green1');
let green2 = document.querySelector('.green2');

red.style.color='red';
red1.style.color='red';
red2.style.color='red';
green.style.color='green';
green1.style.color='green';
green2.style.color='green';




// End Red, green text

// Todo list
var todoList = document.querySelector('#todo-list');
var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

    for(var i=0; i < tasks.length - 1; i++) {
        todoList.innerHTML += `<li>${tasks[i]}</li>`
        console.log(tasks[i])
    }

// End Todo list

// Add tag hr after each tag p

document.querySelectorAll('p').forEach((elem) => {
    elem.innerHTML = `<hr>`
    });

// Add tag hr after each tag p

// Remove, replace

let item_cola = document.querySelector('.item_cola');
item_cola.remove();

let parent = document.querySelector('#cart-items')
let textnode = document.createTextNode("Canned Fish x4");

parent.replaceChild(textnode, parent.lastChild);


// parent.replaceChild(textnode, parent.lastChild);
// End Remove, replace

// function Remove(){
//     var textnode = document.createTextNode("Canned Fish");
//     var x = document.getElementById("cartitems");
    
//     x.children[1].remove();
//     x.replaceChild(textnode, x.lastChild);
//     }