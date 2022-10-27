function signup(){
    let Username = document.getElementById('username').value
    let Password = document.getElementById('psw').value
    let Gmail = document.getElementById('Gmail').value
    let Phone_number=document.getElementById('phnumber').value
    
    console.log(Username,Phone_number,Gmail,Password)

    var numformate =/^\d{10}$/;
    var emailformate=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwformate=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    
    if(Username==''){
        alert("Name is not filled")
    }
    else if(Gmail==''){
        alert('Gmail is not filled')
    }
    else if(Password==''){
        alert('Password not filled')
    }
    else if(!Gmail.match(emailformate)){
        alert('Gmail not exist')
    }
    else if(!Phone_number.match(numformate)){
        alert('phone number must be 10')
    }
    else if(!Password.match(passwformate)){
        alert('password must be in 8 char and one upper case ,one lower case,one special char and number')
        
    }
    else{
        let pastdata = JSON.parse(localStorage.getItem('userdata')||'[]');
        console.log(pastdata)       
        let uid =Math.floor(Math.random() * 100000000);
        
        let userdata={'uid':uid,'Name':Username,'Phone_number':Phone_number,'Gmail':Gmail,'Password':Password}
        // maindata.push(userdata)
        pastdata.push(userdata1)
        localStorage.setItem('userdata',JSON.stringify(pastdata));
        
    }
}

function sinin(){
    let username = document.getElementById().value
    let password = document.getElementById().value
    let userdata = localStorage.getItem('userdata')

}