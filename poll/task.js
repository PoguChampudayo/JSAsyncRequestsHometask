const xhr = new XMLHttpRequest()
const pollAnswers = document.querySelector('[id=poll__answers]')
xhr.addEventListener('load', () => {
    console.log(xhr.responseText)
    response = JSON.parse(xhr.responseText)

    document.getElementById('poll__title').innerText = response.data.title
    for (let answer in response.data.answers){

        button = document.createElement('button')
        button.className = 'poll__answer'
        button.innerText = response.data.answers[answer]

        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!')
        })
        
        pollAnswers.appendChild(button)
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()