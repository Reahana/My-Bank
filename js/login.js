document.getElementById('loginBtn').addEventListener('click',function(){
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   

   if(email === 'reahana@bank.com' && password === 'nahid'){
   window.location.href = 'bank.html'

   }
   else{
    alert('Invalid user');
   }
})