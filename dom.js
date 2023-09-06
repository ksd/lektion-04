const streetNames = ["Nørregade", "Østergade", "Søndergade"]

const olNode = document.createElement('ol')

for (let streetName of streetNames) {
  let streetNode = document.createElement('li')
  streetNode.textContent = streetName
  olNode.appendChild(streetNode)
}

document.body.appendChild(olNode)

//const toDoNode = document.querySelector('#toDo')
// .getElementById == .querySelector('#
const toDoNode = document.getElementById('toDo')
let chore = document.createElement('li')
chore.innerHTML = "<b>Købe ind</b>"
// add class attribut til  noden
chore.className = "listeElement"
// add hjemmelavet attribut til noden
chore.kajFedeAttribut = "hat&Briller"
toDoNode.appendChild(chore)

const headlineNode = document.querySelector('h2')
const headlineContentNode = headlineNode.firstChild
const textNode = document.createTextNode("Adios")
headlineNode.replaceChild(textNode, headlineContentNode)