/*  
dentro de outro div “contêiner”
diretamente no seu HTML
Crie as divs usando JavaScript.16x16 
Use o flexbox para fazer os divs aparecerem como uma grade
*/ 
const contein= document.querySelector(".conteiner");
const butao= document.querySelector("button");

butao.addEventListener('click',()=>{
    const d = document.createElement("div");
    contein.appendChild(d);
    d.textContent="Kaio";
    d.setAttribute("class","Grades")
})

