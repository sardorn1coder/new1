const parts = document.querySelector('.parts');
const form = document.querySelector('.form');
const input1 = document.querySelector('.input1');
let boss = [];

form.addEventListener('submit', e => {
    e.preventDefault(); 

    let inp = input1.value.trim(); 

    
    if (inp) {
        
        if (boss.indexOf(inp) === -1) { 
            const newElement = document.createElement('div'); 
            newElement.textContent = inp; 
            parts.appendChild(newElement); 

            boss.push(inp); 
        } else {
            alert('Bu qiymat allaqachon mavjud.'); 
        }

        input1.value = ''; 
    }
});