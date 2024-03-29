const inputs = document.querySelectorAll('.controls input');

// function handleUpdate(){
//   const suffix = this.dataset.size || '';
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

const handleUpdate = (event) => {
  const suffix = event.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
