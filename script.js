const inputs = document.querySelectorAll('.controls input')     // returns nodelist with all the inputs

function handleUpdate(){
    suffix = this.dataset.sizing || '';     // if data-sizing isn't in the tag, then suffix will be blank
    console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)   // name of the tag is the same of the css variable name
    document.getElementById(`${this.name}`).innerHTML = this.value + suffix;
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
