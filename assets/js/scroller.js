const container = document.getElementById("scroll-text")
const randomNumber = () => Math.floor(Math.random() * Math.floor(facts.length))
const loop = () => {
  setInterval(() => container.innerHTML = facts[randomNumber()], 4000)
}
