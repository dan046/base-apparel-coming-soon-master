const form = document.getElementById("form")
const email = document.getElementById("email")
const errorContainer = document.getElementById("error-container")
const errorsList = document.getElementById("errors-list")
const errorIcon = document.getElementById("icon-error")
const inputBorder = document.getElementById("input-container")
const header = document.getElementById("header-content")

function showError(errorMessages) {
  errorMessages.forEach((errorMSG) => {
    const li = document.createElement("li")
    li.innerText = errorMSG
    errorContainer.appendChild(li)
  })
}

function clearErrors() {
  errorContainer.innerText = ""
  errorIcon.style.visibility = "hidden"
}

function checkEmail(input) {
  const errorMessages = []

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (re.test(input.value.trim())) {
    console.log("success")
  } else {
    errorMessages.push("Please provide a valid email")
    inputBorder.style.border = "2px solid var(--error-color)"
  }

  if (errorMessages.length > 0) {
    errorIcon.style.visibility = "visible"
    showError(errorMessages)
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  clearErrors()
  checkEmail(email)
})

window.addEventListener("resize", function () {
  // document.body.style.fontSize = window.innerWidth / 100 + "px"
  let fontSize = window.innerWidth / 20 + "px"
  if (parseFloat(fontSize) < 40) {
    fontSize = "45px"
  }
  header.style.fontSize = fontSize
})
