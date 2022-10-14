

const Main = document.querySelector('#Main')
const HideDiv = document.querySelector('#HiddenDiv')
const NumberButton = document.querySelectorAll('#NumberButton')
const SubmitButton = document.querySelector('#SubmitButton')


for (let i = 0; i < NumberButton.length; i++){
        let Contador = 0
        NumberButton[i].addEventListener('click', () => {
        NumberButton[i].classList.remove('Number')
        NumberButton[i].classList.add('NumberSelected')

        NumberButton.forEach((item, index) => {
            if(item.classList == ('NumberSelected')){
                Contador++
                if(Contador == 2){
                    NumberButton[index].classList.remove('NumberSelected')
                    NumberButton[index].classList.add('Number')
                    Contador = 0
                }
            }
        })
    })
    
}

SubmitButton.addEventListener('click', () => {
    let Error = true
    NumberButton.forEach((item) => {
        if(item.classList == ('NumberSelected')){
            Error = false
            Main.style.display = 'none'
            HideDiv.style.display = 'block'
        }
    })

    if(Error == true){
        return alert("Selecione uma nota")
    }
    
})

