function add(){
    let Name =document.getElementById('Name').value;
    let Phone_number=document.getElementById('num').value;
    let Gmail =document.getElementById('email').value;
    let password=document.getElementById('psw').value;
    let Gender =document.querySelector('input[type="radio"]:checked').value;
    let State=document.getElementById('state').value;
    let Langague=document.querySelectorAll('input[type="checkbox"]:checked')
    let Address = document.getElementById('address').value;
    let listolan=''
    for(var checkbox of Langague){
        listolan += checkbox.value+" ";
    }
    
    let numformate =/^[-+]?[0-9]+$/;
    let emailformate=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwformate=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    
    // console.log(Name,Phone_number,Gmail,password,Gender)
    if(Name==''){
        alert("Name is not filled")
    }
    else if(password==''){
        alert('Password not filled')
    }
    else if(Gmail==""){
        alert('Gmail is not filled')
    }
    else if(!Gmail.match(emailformate)){
        alert('password must be in 8 char and one upper case ,one lower case,one special char and number')
    }
    else{
        let pastdata = JSON.parse(localStorage.getItem('studentdata')||'[]');
        console.log(pastdata)
        let uid =Math.floor(Math.random() * 100000000);
        
        let userdata={'uid':uid,'Name':Name,'Phone_number':Phone_number,'Gmail':Gmail,'Password':password,'Gender':Gender,'State':State,
        'Langague':listolan,'Address':Address}
        // maindata.push(userdata)
        pastdata.push(userdata)
        localStorage.setItem('studentdata',JSON.stringify(pastdata));
        
    }
}

function getItems(){
    let data = JSON.parse(localStorage.getItem('studentdata'))
    console.log(data)  
    let tabledata='';
    for(i=0;i<data.length;i++){
        let j = i+1
        tabledata +='<tr><td><input type= "checkbox" value="'+data[i].uid+'"></td><td>'+j+'</td><td>'+data[i].Name+'</td><td>'+data[i].Phone_number+'</td><td>'+data[i].Gmail+'</td><td>'+data[i].Password+'</td><td>'+data[i].Gender+'</td><td>'+ data[i].State+
        '</td><td>'+data[i].Langague+'</td><td>'+data[i].Address+'</td><td><button  data-toggle="modal" data-target="#myModal" onclick="edit('+data[i].uid+')">Edit</button><button onclick="del('+data[i].uid+')">Delete</button></td></tr>'
        
    }
    document.getElementById('demo').innerHTML=tabledata
    $(".delall").attr("onclick","delall()")
    
    $(".delall").hide()
    var checkboxes = document.querySelectorAll('input[type=checkbox]'),
    checkboxArray = Array.from( checkboxes );
    
    checkboxArray.forEach(function(checkbox) {
        checkbox.addEventListener('change', confirmCheck);
    });
    
}

function confirmCheck() {
    if (this.checked) {
        $(".delall").show()
    }
    else{
        $(".delall").hide()
    }
    
  }

        
function del(id){
    let dta =JSON.parse(localStorage.getItem("studentdata"));
    for(i=0;i<dta.length;i++){
        if(dta[i].uid==id){
            dta.splice(i,1)
            // console.log(i)
        }
        localStorage.setItem("studentdata",JSON.stringify(dta));
    }
    window.location.reload();
}

function edit(id){
    let dta =JSON.parse(localStorage.getItem("studentdata"));

    for(i=0;i<dta.length;i++){
        if(dta[i].uid==id){
           $('#exampleInputName').val(dta[i].Name);
           $('#exampleInputNumber').val(dta[i].Phone_number);
           $('#exampleInputEmail1').val(dta[i].Gmail);
           $('#exampleInputPassword1').val(dta[i].Password);
           $('#exampleSelect1').val(dta[i].State);
          $('#textarea1').val(dta[i].Address);
           let a = dta[i].Gender;
           $('.'+a).prop('checked',true);
           let lvalue = dta[i].Langague.split(' ');
           for(let j = 0; j < lvalue.length; j++){
               $('.'+lvalue[j]).prop('checked',true);           
 
        }
    }
    $("#save").attr("onclick","sav("+id+")");

}
}
function sav(id){
        let dta1=JSON.parse(localStorage.getItem("studentdata"));
        
        for(i=0;i<dta1.length;i++){
            alert('saved')    
            if(dta1[i].uid==id){
              dta1[i].Name=document.getElementById('exampleInputName').value
              dta1[i].Phone_number=document.getElementById('exampleInputNumber').value
              dta1[i].Gmail=document.getElementById('exampleInputEmail').value
              dta1[i].Password=document.getElementById('exampleInputPassword').value
              dta1[i].Gender=document.querySelector('input[type="radio"]:checked').value
              dta1[i].State=document.getElementById('exampleSelect1').value;
            let Langague=document.querySelectorAll('input[type="checkbox"]:checked')
              let listolan='';
              for(var checkbox of Langague){
                listolan += checkbox.value+" ";
            }
            dta1[i].Langague=listolan
            dta1[i].Address = document.getElementById('textarea').value;
            
        }      
             }
             console.log(dta1)

        localStorage.setItem("studentdata",JSON.stringify(dta1));
        $('.modal').hide()
        }


        
        

        function delall(){ 
            let markedcheck=document.querySelectorAll('input[type="checkbox"]:checked')
            let listolan=[]
            for(var checkbox of markedcheck){
                // listolan += checkbox.value+" ";
                listolan.push(checkbox.value)
            }  
            // console.log(listolan)
            let dta =JSON.parse(localStorage.getItem("studentdata"));
            for(let i=0;i<listolan.length;i++){
                for (let j = 0; j < dta.length; j++) {
                    if(listolan[i] == dta[j].uid){
                        dta.splice(j,1)
                       

                    }
                }
                             
            localStorage.setItem("studentdata",JSON.stringify(dta));
            }
            // console.log(listolan.length,dta.length)
             window.location.reload()
            

        }