import fetch from 'node-fetch'

var paramInput = 'Harry Potter'
const pieces = paramInput.split(' ')
const query = pieces.join('+')

async function doSubmit() {
    const result = await fetch(`https://openlibrary.org/search.json?q=${query}`)
    const data = await result.json()
    const docs = data.docs

    const choosenBook = docs.filter(book => book.title === "Harry Potter and the Philosopher's Stone")
    const person = choosenBook[0].person
    console.table(person)
}

doSubmit()