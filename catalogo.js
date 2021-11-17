window.addEventListener('DOMContentLoaded',()=>{
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