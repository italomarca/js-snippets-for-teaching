
const id = setInterval(() => console.log('executei'), 1000)

setTimeout(() => clearInterval(id), 5000)

