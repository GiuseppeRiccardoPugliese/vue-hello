/*
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: "Hello vue!",
            myImage: "https://it.cryptonews.com/wp-content/uploads/sites/8/2023/05/pepe.webp"
        }
    }
}).mount("#contenitore");