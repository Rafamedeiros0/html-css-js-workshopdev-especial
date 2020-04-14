function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")
    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

function checkFields(event){
    
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    conso

    const isEmpty = valuesToCheck.find(function(value){
        
        const checkIfIsStrng = typeof event.target[value].value === "string"  //exatamente igual ===
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsStrng && checkIfIsEmpty){
            return true
        }
    })

    if(isEmpty){
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }

}