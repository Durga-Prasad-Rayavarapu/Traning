function login(){
    let user = document.getElementById('name').value
    let password = document.getElementById("psw").value
    console.log(user,password)
    $.post("/validation", { name : user, password : password },
    function(data, status){
        alert("DATA :"+ JSON.stringify(data));
        console.log(data);
        // window.location.pathname('/login');
    })
    .fail(function(xhr) {

        switch (xhr.status) {

            case 500:

                alert('your session is invalid');

                break;

            case 501:

                alert('session db error!');

                break;

            default:

                alert('Default Error!');

                break;

        }

    })



}