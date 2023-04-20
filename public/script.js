window.onload = () => {
    console.log("Skrypt załadowany, obrazki po kliknięciu zaczynają się kręcić.")

    let images = document.querySelectorAll("img");
    
    images.forEach(img => {

        img.addEventListener("click", () => {
            img.classList.toggle("spinning");
        });
    })

    let footer = document.querySelector('#footer-text');

    footer.addEventListener("click", async () => {
        footer.innerHTML = "... Ładuję cytat :) ..."
        try {
            let quote = await fetch("/api/quote").then(res => res.json())

            footer.innerHTML = `"${quote.content}" ~${quote.author}`
        } catch (e) {
            footer.innerHTML = "Nie udało się załadować cytatu :("
        }
    })
}
