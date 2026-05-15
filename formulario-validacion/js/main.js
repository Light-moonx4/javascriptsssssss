const usuariosEnStorage = JSON.parse(localStorage.getItem("users")) || [];
const users = [
  { username: "neyder.ramirez", password: "123Admin.**",avatar:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Flow_Blender_splash_cropped.png" },
  { username: "juan.bustamante", password: "123Admin.**",avatar:"https://static.wikia.nocookie.net/mangakaart/images/d/dc/Kratos.jpg/revision/latest?cb=20130521130952&path-prefix=es" },
  { username: "megaman.x", password:"3126197001.**",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsUppRQ5LtlYH7SQaxFG0DBRWdSnHsyDRcLxX266XP7yeNMlgeY-6Uc9C-bpIKwylKUMDKV-zSJ6y5cqQqDA64Zj-14yvZpSUTbTJN3jcRw&s=10"},
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

  sessionStorage.setItem(
    "user",
    JSON.stringify(userFound)
  );

  localStorage.setItem(
    "user",
    JSON.stringify(userFound)
  );

  alert(`¡Bienvenido ${userFound.username}!`);

  window.location.href = "dashoot.html";
 document.getElementById("login").addEventListener("click",userFound)
 }
    
   else {
    alert("Usuario o contraseña incorrectos");
  }
});

const registro = () => {
  localStorage.setItem("registro", "registrar.html");
  window.location.href = "registrar.html";
};
document.getElementById("registroir")
.addEventListener("click",registro);

