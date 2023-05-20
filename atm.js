const users = [
    { "id": 1, "email": "mali@gmail.com", "name": "mali", "password": "123", "balance": 200 },
    { "id": 2, "email": "gera@gmail.com", "name": "gera", "password": "456", "balance": 290 },
    { "id": 3, "email": "maui@gmail.com", "name": "maui", "password": "789", "balance": 67 }
]
let action
let dato = ""
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
const user = users.filter(x => x.id == id)[0]
// Pantalla
const screeam = document.getElementById("lblScreeam")
// Boton de consultar
let btnBalance = document.getElementById("btnBalance")
btnBalance.onclick = () => {
    action="consultar"
    screeam.innerHTML = "SU SALDO ACTUAL ES: " + user.balance
}
// Boton de ingresar
let ingresar = document.getElementById("btnIngresar")
ingresar.onclick = () => {
    dato = ""
    action = "depositar"
    screeam.innerHTML = "Ingrese el monto a depositar: "
}
// Boton de retirar
let retirar = document.getElementById("btnRetirar")
retirar.onclick = () => {
    dato = ""
    action = "retirar"
    screeam.innerHTML = "Ingrese el monto a retirar: "
    }
// Boton clean
let clean = document.getElementById("btnClean")
clean.onclick = () => {
    dato = dato.substr(0, dato.length - 1)
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton enter
let enter = document.getElementById("btnEnter")
enter.onclick = () => {
    console.log(action)
    let newBalance

    switch (action) {
        case "depositar":
            console.log("entro") 
            newBalance = user.balance + parseInt(dato)
            if (newBalance > 990) {
                alert("Su saldo final no puede ser mayor a 990")
                screeam.innerHTML = ""
            }
            else {
                screeam.innerHTML = "Su nuevo saldo es:  " + newBalance
                user.balance = newBalance
            }
            break
        case "retirar":
            newBalance = user.balance - parseInt(dato)
            console.log(newBalance)
            if (newBalance < 10) {
                alert("Su saldo final no puede ser menor a 10")
                screeam.innerHTML = ""}
            else {
                screeam.innerHTML = "Su nuevo saldo es: " + newBalance
                user.balance = newBalance
            } 
            break
        }
}
// Boton cancel
let cancel = document.getElementById("btnCancel")
cancel.onclick = () => { 
    action = ""
    screeam.innerHTML = ""
}
// Boton one
let one = document.getElementById("one")
one.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "1"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton two
let two = document.getElementById("two")
two.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "2"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton three
let three = document.getElementById("three")
three.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "3"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton four
let four = document.getElementById("four")
four.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "4"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton five
let five = document.getElementById("five")
five.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "5"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton six
let six = document.getElementById("six")
six.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "6"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton seven
let seven = document.getElementById("seven")
seven.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "7"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton eight
let eight = document.getElementById("eight")
eight.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "8"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton nine
let nine = document.getElementById("nine")
nine.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "9"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
// Boton zero
let zero = document.getElementById("zero")
zero.onclick = () => {
    if (action == "consultar"){
        return
    }
    dato = dato + "0"
    screeam.innerHTML = `Ingrese el monto a ${action}: ` + dato
}
