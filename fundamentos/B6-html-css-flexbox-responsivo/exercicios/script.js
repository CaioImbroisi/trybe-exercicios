function preventSubmit(event) {
    event.preventDefault()
}
    let submitBtn = document.querySelector('#submit-btn')
    submitBtn.addEventListener('click', preventSubmit);
}
