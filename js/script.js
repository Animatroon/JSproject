'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName("button"),
      circle = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart"),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '50%';
circle[0].style.backgroundColor = 'red'; // Индексы псевдомассивов прописать обязательно 

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'gray';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'gray';
});

const div = document.createElement('div');

div.classList.add('black');

wrapper.append(div); // Этот код append вставляет в конец родительского кода. Тут родительский код wrapper
// wrapper.appendChild(div);

// wrapper.prepend(div); // Этот код prepend вставляет код в самое начало родительского кода

// hearts[0].before(div); // Этот код вставляет код перед заданным кодом
// wrapper.insertBefore(div, hearts[0]); // То же самое что и before, но тут вставится внутри псевдомассива

// hearts[0].after(div); // Этот код вставляет код после задданого кода

// circle[0].remove(); // Этот код удалят заданный элемент
// wrapper.removeChild(hearts[1]); // Старый способ удаления элемента

// hearts[0].replaceWith(circle[0]); // Заменяет собой другой элемент
// wrapper.replaceChild(circle[0], hearts[0]); // Старый способ замены элемаента

div.innerHTML = "<h1>Hello world !</h1>"; // Даёт возможность ставить HTML структуры в элемент

// div.textContent = 'hello'; // Ставляет в элементы текст

div.insertAdjacentHTML('afterbegin', '<h2>Hello babe</h2>'); // Вставляет элемент который там же пишется. Есть четыре вариантов: beforebegin(перед началом, по есть в до начала самого заданного элемента), beforeand(после конца, то есть перед самым концом), afterbegin(после начала, то есть в начале заданного элемента), afterend(после конца, то есть после того как заданный элемент закончился)