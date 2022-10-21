window.addEventListener("load", solve);

function solve() {
    let button = document.querySelector('form button');
    let description = document.getElementById("description");
    let clientName = document.getElementById("client-name");
    let clientPhone = document.getElementById("client-phone");
    let product = document.getElementById("type-product");

    button.addEventListener("click", (e)=> {
        console.log("ASDASD");
        e.preventDefault();
        
        productValue = product.value;
        productText = product.options[product.selectedIndex].text;
        descriptionValue = description.value;
        clientNameValue = clientName.value;
        clientPhoneValue = clientPhone.value;

        if(!descriptionValue || !clientNameValue || !clientPhoneValue ){
            return;
        }

        

        let recievedOrders = document.getElementById("received-orders");

        let divContainer = document.createElement("div");
        divContainer.classList.add("container");

        let h2 = document.createElement("h2");
        h2.textContent = `Product type for repair: ${productText}`;

        let h3 = document.createElement("h3");
        h3.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`

        let h4 = document.createElement("h4");
        h4.textContent = `Description of the problem: ${descriptionValue}`

        let startRepair = document.createElement("button");
        startRepair.classList.add("start-btn");
        startRepair.textContent = "Start repair";

        let finishRepair = document.createElement("button");
        finishRepair.classList.add("finish-btn");
        finishRepair.textContent = "Finish repair";
        finishRepair.disabled = true;


        divContainer.appendChild(h2);
        divContainer.appendChild(h3);
        divContainer.appendChild(h4);
        divContainer.appendChild(startRepair);
        divContainer.appendChild(finishRepair);

        recievedOrders.appendChild(divContainer);

        clientName.value = "";
        clientPhone.value = "";
        description.value = "";

        startRepair.addEventListener('click', () => {
            startRepair.disabled = true;
            finishRepair.disabled = false;
            console.log("asd");
        });

        let divContainer_v2 = document.getElementById("completed-orders")

        finishRepair.addEventListener("click", ()=>{
            divContainer.removeChild(startRepair);
            divContainer.removeChild(finishRepair);
            divContainer_v2.appendChild(divContainer);
            console.log("dsa");
        });
    })

    let clearButton = document.querySelector('.clear-btn')
    clearButton.addEventListener('click', (e) => {
        let arrFromClasses = Array.from(document.querySelectorAll('#completed-orders .container'))
        console.log(arrFromClasses)
        for (const line of arrFromClasses) {
            line.remove()
        }
    })

}