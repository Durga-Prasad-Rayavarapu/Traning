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
        pastdata.push(userdata)
        localStorage.setItem('userdata',JSON.stringify(pastdata));
        
    }
}

function signIn(){
    let username = document.getElementById('name').value
    let password = document.getElementById('psw').value
    let userdata = JSON.parse(localStorage.getItem('userdata'));
    // alert('its working')
    console.log(username,password)
    for(i=0;i<userdata.length;i++){
        if(username==userdata[i].Name && password==userdata[i].Password){
            window.location='/mainpage'
        }
        else{
            alert('cerdintials wrong')
        }
        console.log(userdata[i].Name,userdata[i].Password)
    }
    window.location.pathname("/mainpage")
}


