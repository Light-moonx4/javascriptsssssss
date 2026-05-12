document.querySelector("#regist").innerHTML = `
    <div>
      <form id="registerForm">
        <label for="username">Username</label>
        <input type="text" id="nuevoUsername" name="username">
        <label for="createpassword">password</label>
        <input type="password" id="nuevaPassword" name="password">
        <button id="register">Register</button>
      </form>
    </div>
`;
const guardarRegistro = () => {
  const nuevoUser = document.getElementById("nuevoUsername").value;
  const nuevaPass = document.getElementById("nuevaPassword").value;

  const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios_sistema")) || [];

  usuariosGuardados.push({ username: nuevoUser, password: nuevaPass });
  localStorage.setItem("usuarios_sistema", JSON.stringify(usuariosGuardados));

  alert("¡Registro exitoso!");
  window.location.href = "index.html"; 
};