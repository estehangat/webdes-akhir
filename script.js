function home(event){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == 'admin' && password == 'admin'){
        sessionStorage.setItem('isLogin', 'true');
        window.location.href = '/home/index.html';
    } else {
        document.getElementById('salah').innerHTML = '<br>Username atau Password salah!'
    }
}