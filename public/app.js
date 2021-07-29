const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

loadEventListeners()

function loadEventListeners() {
    btn.addEventListener('click', getData)
}

async function getData() {
    const result = await fetch('http://localhost:5001/api/messages')
    const data = await result.json()
    
    for(let i = 0; i < data.length; i++) {
        let current = data[i]
        const div = document.createElement('div')
        div.className = 'item'
        div.textContent = current.message_body
        output.appendChild(div)
    }
}