window.addEventListener('DOMContentLoaded',()=>{

    const newCar = (title, price, descrip, source)=>{
        const cards = {
            title: title,
            price: price,
            description: descrip,
            source: source
        }
        return cards
    }

    const generarJinx = newCar("Jinx", "$2500", "Tu sembradora de caos preferida", "jinx.jpg");
    const generarVi = newCar("Vi", "$2750", "Tu impulsiva e imponente luchadora", "vi.jpg");
    const generarCaitlyn = newCar("Caitlyn", "$2300", "La sheriff de Piltover", "caitlyn.webp")
    const generarKata = newCar("Katarina", "$1500", "La cuchilla siniestra", "kata.jpg");
    const generarShen = newCar("Shen", "$1350", "El ojo del crepúsculo", "shen.jpg");
    const generarNami = newCar("Nami", "$1100", "La joven y obstinada vastaya de los mares", "nami.jpg");
    const generarZed = newCar("Zed", "$2200", "Tu ninja de las sombras favorito", "zed.webp");
    const generarVayne = newCar("Vayne", "$2000", "La letal y despiadada cazadora", "vayne.webp");
    const generarDraven = newCar("Draven", "$2150", "El glorioso ejecutor ", "draven.webp");
    const campeones = [[generarJinx,generarVi, generarCaitlyn], [generarKata, generarShen, generarNami], [generarZed, generarDraven, generarVayne]];
    const filtros = document.querySelectorAll('div.filter');
    filtros.forEach((item)=>{
        item.addEventListener('click',(event)=>{
            if (item.children.item(0).innerText == "ARCANE"){
                for(let i=0; i<campeones.length; i++){
                    document.querySelector(`div#card-${i} div.img-container img.card-image`).setAttribute("src",`images/${campeones[0][i].source}`);
                    document.querySelector(`div#card-${i} div.card-information div.title`).innerText = campeones[0][i].title;
                    document.querySelector(`div#card-${i} div.card-information div.price`).innerText = campeones[0][i].price;
                    document.querySelector(`div#card-${i} p`).innerText = campeones[0][i].description;
                }
            }

            if (item.children.item(0).innerText == "BLANCO"){
                for(let i=0; i<campeones.length; i++){
                    document.querySelector(`div#card-${i} div.img-container img.card-image`).setAttribute("src", `images/${campeones[1][i].source}`);
                    document.querySelector(`div#card-${i} div.card-information div.title`).innerText = campeones[1][i].title;
                    document.querySelector(`div#card-${i} div.card-information div.price`).innerText = campeones[1][i].price;
                    document.querySelector(`div#card-${i} p`).innerText = campeones[1][i].description;
                    document.querySelector(`div#card-${i} button[data-order]`).setAttribute("data-order", campeones[1][i].source);
                }
            }

            if (item.children.item(0).innerText == "CHIBI"){
                for(let i=0; i<campeones.length; i++){
                    document.querySelector(`div#card-${i} div.img-container img.card-image`).setAttribute("src", `images/${campeones[2][i].source}`);
                    document.querySelector(`div#card-${i} div.card-information div.title`).innerText = campeones[2][i].title;
                    document.querySelector(`div#card-${i} div.card-information div.price`).innerText = campeones[2][i].price;
                    document.querySelector(`div#card-${i} p`).innerText = campeones[2][i].description;
                    document.querySelector(`div#card-${i} button[data-order]`).setAttribute("data-order", campeones[2][i].source);
                    console.log(document.querySelector(`.title`));
                }
            }    
        })
    })
    const orderButton = document.querySelectorAll('button[data-order]'); 
    
    orderButton.forEach((item) => {
        item.addEventListener('click',(event)=>{
            const button = event.currentTarget;
            const container = button.parentNode; 
            const order = {
                title: container.querySelector('.title').innerText, 
                price: container.querySelector('.price').innerText,
                id: button.getAttribute('data-order')
            }
            localStorage.setItem('order', JSON.stringify(order)); 
            window.location.href = "order.html"; 
        });
    })
});