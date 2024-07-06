document.addEventListener("DOMContentLoaded", () =>
{
    const p = document.querySelector("p")
    const button = document.querySelector("button")
    let textoNumero = 0

    const textos = [
        "Lionel Messi, considerado um dos melhores jogadores de futebol de todos os tempos, construiu a maior parte de sua carreira no FC Barcelona, onde conquistou inúmeros títulos, incluindo várias Ligas dos Campeões e La Liga. Conhecido por sua incrível habilidade com a bola, dribles impressionantes e precisão nos passes e chutes, Messi também é notável por sua humildade e espírito de equipe. Em 2021, ele se transferiu para o Paris Saint-Germain (PSG), continuando a encantar os fãs com suas atuações magistral.",
        "Cristiano Ronaldo, um atleta de futebol de renome mundial, fez história em clubes como Manchester United, Real Madrid e Juventus. Ronaldo é famoso por sua força física, velocidade, habilidades aéreas e capacidade de marcar gols em qualquer situação. Além de suas conquistas em campo, que incluem múltiplos títulos da Liga dos Campeões e ligas nacionais, ele é reconhecido por sua ética de trabalho e dedicação ao esporte. Em 2021, Ronaldo retornou ao Manchester United, continuando a deixar sua marca indelével no mundo do futebol."
    ]

    p.innerHTML = textos[textoNumero]

    console.log(textos.length - 1)
    
    button.addEventListener("click", () =>
    {
        textoNumero >= textos.length - 1 ? textoNumero = 0 : textoNumero++

        p.innerHTML = textos[textoNumero]      
                
    })


})