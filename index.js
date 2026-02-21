const saveBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input")
let leads = []


saveBtn.addEventListener("click", function () {
    leads.push(inputEl.value)
    render()
})

function render() {
    console.log(leads)
}