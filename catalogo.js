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

    const generarJinx = newCar("Jinx", "$300", "Tu sembradora de caos preferida", "jinx.jpg");
    const generarVi = newCar("Vi", "$50", "Tu impulsiva e imponente luchadora", "vi.jpg");
    const generarCaitlyn = newCar("Caitlyn", "$200", "La sheriff de Piltover", "caitlyn.webp")
    const generarKata = newCar("Katarina", "$900", "La cuchilla siniestra", "kata.jpg");
    const generarShen = newCar("Shen", "$1000", "El ojo del crepúsculo", "shen.jpg");
    const generarNami = newCar("Nami", "$1100", "La joven y obstinada vastaya de los mares", "nami.jpg");
    const generarZed = newCar("Zed", "$150", "Tu ninja de las sombras favorito", "zed.webp");
    const generarVayne = newCar("Vayne", "$100", "La letal y despiadada cazadora", "vayne.webp");
    const generarDraven = newCar("Draven", "$200", "El glorioso ejecutor ", "draven.webp");
    const campeones = [[generarJinx,generarVi, generarCaitlyn], [generarKata, generarShen, generarNami], [generarZed, generarDraven, generarVayne]];
    // let i=0;
    const filtros = document.querySelectorAll('div.filter');
    // console.log(filtros);
    filtros.forEach((item)=>{
        item.addEventListener('click',(event)=>{
            if (item.children.item(0).innerText == "ARCANE"){
                // document.querySelector(`div#card-${i} div.img-container img.card-image `).setAttribute("src", campeones[0][2].source);
                // console.log(document.querySelector(`div#card-0 div.img-container img.card-image `));
                // console.log(campeones[0][2].source);
                for(let i=0; i<campeones.length; i++){
                    document.querySelector(`div#card-${i} div.img-container img.card-image`).setAttribute("src",`images/${campeones[0][i].source}`);
                    document.querySelector(`div#card-${i} div.card-information div.title`).innerText = campeones[0][i].title;
                    document.querySelector(`div#card-${i} div.card-information div.price`).innerText = campeones[0][i].price;
                    document.querySelector(`div#card-${i} p`).innerText = campeones[0][i].description;
                    // document.querySelector(`div#card-${i} div.img-container img.card-image`).setAttribute("src",`images/${campeones[0][i].price}`);
                    // document.querySelector(`div#card-${i} div.img-container img.card-image`).setAttribute("src",`images/${campeones[0][i].descrip}`);
                    // document.querySelector(`div#card-${i} button[data-order]`).setAttribute("data-order", campeones[1][i].source);
                    // console.log( document.querySelector(`div#card-${i} p`));
                    // console.log(`img#card-${i}`);
                }
            }
            if (item.children.item(0).innerText == "BLANCO"){
                // document.querySelector(`div#card-${i} div.img-container img.card-image `).setAttribute("src", campeones[0][2].source);
                // console.log(document.querySelector(`div#card-0 div.img-container img.card-image `));
                // console.log(campeones[0][2].source);
                for(let i=0; i<campeones.length; i++){
                    document.querySelector(`div#card-${i} div.img-container img.card-image`).setAttribute("src", `images/${campeones[1][i].source}`);
                    document.querySelector(`div#card-${i} div.card-information div.title`).innerText = campeones[1][i].title;
                    document.querySelector(`div#card-${i} div.card-information div.price`).innerText = campeones[1][i].price;
                    document.querySelector(`div#card-${i} p`).innerText = campeones[1][i].description;
                    // console.log(document.querySelector(`div#card-${i} div.img-information div.title`).innerText);
                    // document.querySelector(`div#card-${i} div.img-information div.title`).setAttribute("src",campeones[0][i].title);
                    // document.querySelector(`div#card-${i} div.img-container img.card-image`).setAttribute("src",`images/${campeones[0][i].price}`);
                    document.querySelector(`div#card-${i} button[data-order]`).setAttribute("data-order", campeones[1][i].source);
                    // console.log(campeones[1][i].source);
                    // console.log(`img#card-${i}`);
                }
            }
            if (item.children.item(0).innerText == "CHIBI"){
                // document.querySelector(`div#card-${i} div.img-container img.card-image `).setAttribute("src", campeones[0][2].source);
                // console.log(document.querySelector(`div#card-0 div.img-container img.card-image `));
                // console.log(campeones[0][2].source);
                for(let i=0; i<campeones.length; i++){
                    document.querySelector(`div#card-${i} div.img-container img.card-image`).setAttribute("src", `images/${campeones[2][i].source}`);
                    document.querySelector(`div#card-${i} div.card-information div.title`).innerText = campeones[2][i].title;
                    document.querySelector(`div#card-${i} div.card-information div.price`).innerText = campeones[2][i].price;
                    document.querySelector(`div#card-${i} p`).innerText = campeones[2][i].description;
                    document.querySelector(`div#card-${i} button[data-order]`).setAttribute("data-order", campeones[2][i].source);
                    // console.log(campeones[1][i].source);
                    // console.log(`img#card-${i}`);
                    console.log(document.querySelector(`.title`));
                }
            }
            
        })
    })
    const orderButton = document.querySelectorAll('button[data-order]'); //query te da un trozo de html
    
    orderButton.forEach((item) => {
        item.addEventListener('click',(event)=>{
            const button = event.currentTarget;
            const container = button.parentNode; //parentNode me devuelve el html padre
            const order = {
                title: container.querySelector('.title').innerText, //inner te da el texto encerrado en la etiqueta
                price: container.querySelector('.price').innerText,
                gabriel: button.getAttribute('data-order')
            }
            localStorage.setItem('order', JSON.stringify(order)); //JSON.str... me stringuea el objeto order
            //window:ventana donde toy -- location: ubicacion--href es el link EJ:https://translate.google.com/?sl=en&tl=es&text=parse&op=translate
            window.location.href = "order.html"; //esto me manda directo a donde quiero
        });
    })
});