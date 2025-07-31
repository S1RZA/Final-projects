const saveUser = document.getElementById('saveUser');
const deleteUser = document.getElementById('deleteUser');
const text = document.getElementById('text');
const textInfo = document.createElement('p');

function showData() {
    const name = localStorage.getItem('UserName');
    const age = localStorage.getItem('UserAge');
    text.appendChild(textInfo)

    name && age ? textInfo.textContent = `Hi! ${name} you are ${age} years old`: textInfo.textContent = 'There is no data';
}

saveUser.addEventListener('click', (e) => {
    const nameInput = document.getElementById('name').value.trim();
    const ageInput = document.getElementById('age').value;
    const name = nameInput;
    const age = ageInput;
    e.preventDefault();

    if (name == "" || age == "" || age <=0) {
        alert('You must type in a valid name and age');
        console.log(name);
        console.log(age);
        return;
    }

    if (name && !isNaN(age)) {

        localStorage.setItem('UserName', name);
        localStorage.setItem('UserAge', age); 
        showData();
    } else {
        alert('Ingrese un valor valido');
    }

})

if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount',0);
}

function updateIteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    console.log(`Interaciones en esta seccion ${count}`);
}

document.getElementById('saveUser').addEventListener('click', updateIteractionCount);
document.getElementById('deleteUser').addEventListener('click', updateIteractionCount);

deleteUser.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    showData();
})


window.onload = showData;

