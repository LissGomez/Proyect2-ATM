
const users = [
    {"id": 1, "email": "mali@gmail.com", "name": "mali", "password": "123", "balance": 200 },
    {"id": 2, "email": "gera@gmail.com", "name": "gera", "password": "456", "balance": 290 },
    {"id": 3, "email": "maui@gmail.com", "name": "maui", "password": "789", "balance": 67 }
]
let id

let btnLogin = document.getElementById("btnLogin")
btnLogin.onclick = () => {

    let txtEmail = document.getElementById("txtEmail")
    let txtPass = document.getElementById("txtPassword")
    
    let email = txtEmail.value
    let password = txtPass.value

    const user = users.filter(x => x.email === email && x.password === password)

    if(user.length === 0){
        console.log("this user doesn´t exist")
        var alert = document.getElementById("alert-dialog")
        alert.removeAttribute("hidden"); 
        return
    }
    else{
        console.log("user exists")
        id = user[0].id
        window.location = "http://127.0.0.1:5500/atm.html?id="+id
    }
}




