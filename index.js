const saveBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input")
const ulEl = document.getElementById("ul-el")
let leads = []

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        leads.push(tab[0].url)
        localStorage.setItem("leads", JSON.stringify(leads))
        render(leads)
    })
})
saveBtn.addEventListener("click", function () {
    leads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("leads", JSON.stringify(leads))
    render(leads)
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
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


