function getRandomColor(){
  const letters ='0123456789ABCDEF';
  let color ='#';
  for(let i=0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

function generatePalette(){
  const palette = document.querySelector('.palette');
  palette.innerHTML='';
  for(let i=0; i<5; i++){
    const color =getRandomColor();
    const box = document.createElement("div");
    box.classList.add('color-box');
    box.style.backgroundColor=color;
    box.textContent = color;
    box.addEventListener('click', ()=>{
      navigator.clipboard.writeText(color);
      alert(`Copied: ${color}`);
    })
    palette.appendChild(box);
  }
}

document.getElementById('generate').addEventListener('click', generatePalette);
generatePalette();