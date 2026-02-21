const saveBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input")
const ulEl = document.getElementById("ul-el")
let leads = []


saveBtn.addEventListener("click", function () {
    leads.push(inputEl.value)
    inputEl.value = " "
    render(leads)
})

deleteBtn.addEventListener("dblclick", function () {
    leads = []
    render(leads)
})

function render(arr) {
    let lead_tags = ""
    for (let i = 0; i < arr.length; i++) {
        lead_tags += `<li>
        <a href ="${arr[i]}" target='_blank'>
        ${arr[i]}
        </a>
        </li>`
    }
    ulEl.innerHTML = lead_tags
}