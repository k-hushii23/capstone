const loginform=document.getElementById('login-form');
if (loginform) {
    loginform.addEventListener('submit',(e) => {
        e.preventDefault();
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;

        if (email && password) {
            alert(`WELCOME, ${email}`);
        }else{
            alert(`Please fill all the required info`);
        }

    }
);
}


const register=document.getElementById('register-form');
if (register){
    register.addEventListener('submit',(e)=>{
        e.preventDefault();
        const email=document.getElementById('email').value;
        const name=document.getElementById('full-name').value;
        const number=document.getElementById('phone').value;
        const password=document.getElementById('password').value;

        if (email && number && name && password){
            alert("REGISTERED SUCCESSFULLY")
        }
        else{
            alert(`Please fill all the required info`)
        }
    }

);
}