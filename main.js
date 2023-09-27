let addSysslaButton = document.getElementById("addButton")
let toDoList = document.getElementById("attgöralista")
let doneList = document.getElementById("färdigLista")
let errorMessages = document.getElementById("errorMessages")
let resetButton = document.getElementById("återställ")

    


addSysslaButton.addEventListener("click", function(){

    let userInput = document.getElementById("initInput").value
    if(errorMessageCheck(userInput) == false){
    buttonFunktioner.läggTillSyssla(userInput)
    errorMessages.innerText = ""

    let buttonÄndra = document.createElement("button")
    buttonÄndra.innerText = "Ändra"
    let buttonFärdig = document.createElement("button")
    buttonFärdig.innerText = "Färdig"
    let buttonRadera = document.createElement("button")
    buttonRadera.innerText = "Radera"
  
    buttonFunktioner.listItem.append(buttonÄndra)
    buttonFunktioner.listItem.append(buttonFärdig)
    buttonFunktioner.listItem.append(buttonRadera)
    

    buttonÄndra.addEventListener("click",buttonFunktioner.ändraSyssla)
    buttonFärdig.addEventListener("click",buttonFunktioner.färdigställSyssla)
    buttonRadera.addEventListener("click",buttonFunktioner.raderaSyssla)


    resetButton.addEventListener("click", function(){
        document.querySelector("li").remove()
    })
}})

function errorMessageCheck(userInput){
    if(userInput == ""){
        errorMessages.innerText = "Får inte skapa tomma sysslor."
        errorMessages.style.color = "red"
        return true;
    } else if (userInput != ""){
        return false;
    }
}



let buttonFunktioner = {
    läggTillSyssla: function(userInput){
        this.listItem = document.createElement("li");
        this.listItemInput = document.createElement("input");
        this.listItemInput.type = "text";
        this.listItemInput.setAttribute("disabled","disabled")
        this.listItemInput.value = userInput;
        toDoList.append(this.listItem)
        this.listItem.append(this.listItemInput)
    },
    ändraSyssla: function(e){
        if(e.target.parentNode.firstElementChild.disabled == true){
            e.target.parentNode.firstElementChild.disabled = false
            e.target.innerText = "Spara"
       }else if(e.target.parentNode.firstElementChild.disabled == false && e.target.parentNode.firstElementChild.value != ""){
        e.target.parentNode.firstElementChild.disabled = true;
            e.target.innerText = "Ändra"
            errorMessages.innerText = ""
       } else if(e.target.parentNode.firstElementChild.disabled == false && e.target.parentNode.firstElementChild.value == ""){
           errorMessages.innerText = "Får inte ha tomma sysslor."
           errorMessages.style.color = "red"
       }
    },

    raderaSyssla: function(e){
        e.target.parentElement.remove()
    },
    färdigställSyssla: function(e){
        userInput = e.target.parentNode.firstElementChild.value
        e.target.parentElement.remove()
        doneList.append(this.parentNode)
        e.target.remove()
    }

}