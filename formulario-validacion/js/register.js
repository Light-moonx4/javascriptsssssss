document.querySelector("#regist").innerHTML = `
    <div>
      <form id="registerForm">
        <label for="username">Username</label>
        <input type="text" id="nuevoUsername" name="username">
        <label for="createpassword">Password</label>
        <input type="password" id="nuevaPassword" name="password">
        <button type="submit" id="register">Register</button>
      </form>
      <button type="submit" id="volver">back</button>
    </div>
`;

const guardarRegistro = (event) => {
  event.preventDefault();

  const nuevoUser = document.getElementById("nuevoUsername").value;
  const nuevaPass = document.getElementById("nuevaPassword").value;

  if (!nuevoUser || !nuevaPass) {
    alert("Por favor completa todos los campos");
    return;
  }
  
   const usuarioExiste = usuariosGuardados.find(
    user => user.username === nuevoUser
  );

  if (usuarioExiste) {
    alert("Ese nombre de usuario ya está registrado");
    return;
  } 
  const usuariosGuardados = JSON.parse(localStorage.getItem("users")) || [];

  usuariosGuardados.push({ username: nuevoUser, password: nuevaPass });
  
  localStorage.setItem("users", JSON.stringify(usuariosGuardados));

  alert("¡Registro exitoso!");
  window.location.href = "index.html"; 
};
const volver = () => {
  localStorage.setItem("volver", "index.html");
  window.location.href = "index.html";
};
document.getElementById("volver")
.addEventListener("click",volver);

document.getElementById("registerForm").addEventListener("submit", guardarRegistro);

/*document.querySelector("#regist").innerHTML = `
    <div>
      <form id="registerForm">
        <label for="username">Username</label>
        <input type="text" id="nuevoUsername" name="username" required>
        
        <label for="createpassword">Password</label>
        <input type="password" id="nuevaPassword" name="password" required>
        
        <label for="fotoUrl">URL de la imagen de perfil</label>
        <input type="url" id="fotoUrl" name="fotoUrl" placeholder="https://ejemplo.com/foto.jpg">
        
        <button type="submit" id="register">Register</button>
      </form>
      <button type="button" id="volver">back</button>
    </div>
`;

const guardarRegistro = (event) => {
  event.preventDefault();

  const nuevoUser = document.getElementById("nuevoUsername").value;
  const nuevaPass = document.getElementById("nuevaPassword").value;
  const urlImagen = document.getElementById("fotoUrl").value;

  if (!nuevoUser || !nuevaPass) {
    alert("Por favor completa todos los campos");
    return;
  }

  // 1. Obtener usuarios previos
  const usuariosGuardados = JSON.parse(localStorage.getItem("users")) || [];

  // 2. Verificar duplicados
  const usuarioExiste = usuariosGuardados.find(user => user.username === nuevoUser);
  if (usuarioExiste) {
    alert("Ese nombre de usuario ya está registrado");
    return;
  }

  // 3. Guardar el nuevo objeto (incluyendo la URL)
  usuariosGuardados.push({ 
    username: nuevoUser, 
    password: nuevaPass,
    avatar: urlImagen || "https://via.placeholder.com/150" // Imagen por defecto si está vacío
  });
  
  localStorage.setItem("users", JSON.stringify(usuariosGuardados));

  alert("¡Registro exitoso!");
  window.location.href = "index.html"; 
};

const volver = () => {
  window.location.href = "index.html";
};

document.getElementById("volver").addEventListener("click", volver);
document.getElementById("registerForm").addEventListener("submit", guardarRegistro);*/