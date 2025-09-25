const lete = document.querySelector('#lete');
const input = document.querySelector('input');
const p = document.querySelector('p');
const ul = document.querySelector('#cuz');
const lu = document.querySelector('#zuc')
const lista = document.querySelectorAll('li');

/*lete.addEventListener("mouseover", () => {
    //alert("Clicou sefudeu")
    lete.style.backgroundColor = 'red';
})

lete.addEventListener("mouseout", () => {
    lete.style.backgroundColor = '';
})

input.addEventListener("input", () => {
    console.log(input.value)
    p.textContent = "Sua busca: " + input.value
})

cuz.addEventListener("mousemove", () => {
    console.log("CUZ")

ul.addEventListener('mousemove', () => {
    let r = parseInt(Math.random() *255)
    let g = parseInt(Math.random() *255)
    let b = parseInt(Math.random() *255)
    let cor = `rgb(${r},${g},${b} )`
    console.log(cor);
    ul.style.backgroundColor = cor;


Math.random
})
})
*/

lista.forEach((item) => {
    console.log(item)
    item.addEventListener('click', (ev) => {
        console.log(ev.target.innerText);
        console.log(ev.target.parentElement);
        pai = ev.target.parentElement;
        filho = ev.target;
        if (pai === lu) {
            ul.appendChild(filho)
        } else {
            lu.appendChild(filho)
        }
    })
});

