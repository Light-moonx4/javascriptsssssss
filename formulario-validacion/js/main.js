const usuariosEnStorage = JSON.parse(localStorage.getItem("users")) || [];
const users = [
  { username: "neyder.ramirez", password: "123Admin.**" },
  { username: "juan.bustamante", password: "123Admin.**" },
  { username: "megaman.x", password:"3126197001.**"},
  ...usuariosEnStorage 
];

document.querySelector("#app").innerHTML = `
    <div>
      <form id="loginForm">
        <label for="username">Username</label>
        <input type="text" id="username" name="username">
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
        <button type="submit" id="login">Login</button>
      </form>
      <button type="submit" id="registroir">Registrarse</button>
    </div>
    
`;

const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  if (!usernameInput || !passwordInput) {
    alert("Hey, no hay username o password");
    return;
  }

  const userFound = users.find(u => 
    u.username === usernameInput && u.password === passwordInput
  );

  if (userFound) {
    sessionStorage.setItem("user", userFound.username);
    localStorage.setItem("user", userFound.username);
    alert(`¡Bienvenido ${userFound.username}!`);
    localStorage.setItem("userFound", "dashoot.html");
    window.location.href = "dashoot.html";
    document.getElementById("login").addEventListener("click",userFound)
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});

const registro = () => {
  localStorage.setItem("registro", "registrar.html");
  window.location.href = "registrar.html";
};
document.getElementById("registroir")
.addEventListener("click",registro);

