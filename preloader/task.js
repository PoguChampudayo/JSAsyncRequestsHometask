let xhr = new XMLHttpRequest()
const items = document.querySelector('[id=items]')

xhr.addEventListener('load', () => {
    let response = JSON.parse(xhr.responseText)
    document.querySelector('[id=loader]').classList.toggle('loader_active')
    for (let valute in response.response.Valute){

        let record = document.createElement('div')

        record.className = 'item'
        record.innerHTML = `
                <div class="item__code">
                    ${response.response.Valute[valute].CharCode}
                </div>
                <div class="item__value">
                    ${response.response.Valute[valute].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
        `
        items.appendChild(record)
    }

    let record = document.createElement('div')
    record.className = 'item'


})


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()