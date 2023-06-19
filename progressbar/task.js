form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()

    progress = document.getElementById('progress')
    let file = document.getElementById('file').files[0]
    const formData = new FormData()
    formData.append('file', file)

    let xhr = new XMLHttpRequest()

    xhr.upload.addEventListener('progress', (event) => {
        progress.setAttribute('value', Math.round(event.loaded / event.total * 100) / 100)
    })

    // xhr.onload = () => {
    //     console.log(xhr.responseText)
    //   }
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    xhr.send(formData)
})