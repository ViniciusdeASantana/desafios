const form = document.querySelector(".form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const emailInput = e.target.querySelector("#email").value
    const passwordInput = e.target.querySelector("#password").value
    console.log(emailInput, passwordInput)
})