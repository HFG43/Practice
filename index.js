const UL = document.getElementById('list');
const lisUL = UL.children;
console.log(lisUL);
const items = lisUL[1].children;
console.log(items);
const text = items[1].textContent;

console.log(text);
const textcont = items[1];
textcont.textContent = "hi!";
const contenedorTexto = textcont.parentElement;
console.log(contenedorTexto);

const contenedorContenedorTexto = textcont.parentNode.parentNode.parentNode.parentNode;
console.log(contenedorContenedorTexto)