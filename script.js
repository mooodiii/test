document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById('input1');
    let div = document.getElementById('show');
    const button = document.getElementById('click');


    button.onclick = () => {
        div.innerHTML = input1.value;
    }




})