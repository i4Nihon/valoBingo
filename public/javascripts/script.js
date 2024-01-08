let tdTable = []

for (let i = 1; i <= 16; i++) {
  let temp = document.getElementById(`field-${i}`)
  tdTable[i] = document.getElementById(`field-${i}`)
  temp.classList.add("active")
  temp.addEventListener('click', () => {
    if (!temp.classList.contains("inactive")) {
      temp.classList.remove("active")
      temp.classList.add("inactive")
    }else {
      temp.classList.remove("inactive")
      temp.classList.add("active")
    }
  })
}