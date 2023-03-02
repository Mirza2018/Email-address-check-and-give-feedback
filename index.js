const submitBtn = () => {
    const inputValue = document.getElementById('input-field').value;
    console.log(inputValue);


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {

        return viewtext('Correct! Your Email Address is valid', 'green')
    }

    return viewtext('Worng!! Your email Address is invalid', 'red')

}

const viewtext = (text, color) => {
    const div = document.getElementById('div-container');
    div.style.color = color;
    div.textContent = '';
    const h3 = document.createElement('h1');
    h3.innerText = text;
    div.appendChild(h3);
}