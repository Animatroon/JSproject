'use strict';

function first() {
    setTimeout(function() {   
        console.log(56);
    }, 500);
    
}

function second() {
    console.log(9);
}

function three() {
    let textSkaz = "В визуал студио коуде управлять плагинами и раширениями легче всего. Оно увляется гибким и удобной вещю";
    console.log(textSkaz);
}


first();
second();
three();

