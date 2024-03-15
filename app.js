/*  
dentro de outro div “contêiner”
diretamente no seu HTML
Crie as divs usando JavaScript.16x16 
Use o flexbox para fazer os divs aparecerem como uma grade
*/
const container = document.querySelector(".conteiner");
let tamGrade = 50// Number(prompt("qual proporção você deseja EX'16' = 16X16 "));
if (tamGrade <= 100) {

    //Crai um arrei com o numero de Elementos digita do no prompt
    let Grade = new Array(tamGrade);
    //ele itera no array criado criando ele varias veses
    // ate q crumpra o valor digitado do prompt
    //assim sendo criado uma matriz
    for (let i = 0; i < tamGrade; i++) {
        //exemplo prompt=3

        Grade[i] = new Array(tamGrade);
        /*
        assim formando uma matriz
        ou array bi dimencional
        [1,2,3]primeiro array
        [1,2,3]segundo array
        [1,2,3]terceiro array
        */
    }
    //aqui ele vai passar pelo primeiro elemento do array dps
    //executa a coluna pelo primeiro elento
    /*  fazendo isso ate formar a matriz
        linha[0]dps[0]
        colu[0]dps[0]
    */
    for (let linha = 0; linha < tamGrade; linha++) {
        for (let coluna = 0; coluna < tamGrade; coluna++) {
            //toda vez que passar pela linha e coluna cria uma div
            //e atribui a classe "Grades"
            Grade[linha][coluna] = document.createElement("div")

            Grade[linha][coluna].className = "Grades";

            //aki ele coloca a grade no elemento Pai no documento HTML 
            container.appendChild(Grade[linha][coluna]);
        }
        //aki ele cria uma TAG "br"apos o fim de cada linha da matriz
        container.appendChild(document.createElement("br"));
    }

//pega todas as div criadas com a class "Grades"    
    let Grades = document.querySelectorAll(".Grades");
//Passa por todas as class "Grades" e coloca este evento 
// de pinta o fundo de azul
    Grades.forEach(Grades => {
        Grades.addEventListener("mouseenter",(e)=>{
            e.target.style.background="blue";
        })
    });
        

} else {
    document.body.style.cssText = "background-color:black;color:white;"
    para.textContent = "NADA PEGOU"
    container.appendChild(para)
}






