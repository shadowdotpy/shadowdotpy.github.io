function loginSubmit() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'admin' && password == 'krassespasswort69') {
        alert('Das Passwort ist richtig! Hurra!')
    } else {
        alert('Passwort falsch!');
    }
}