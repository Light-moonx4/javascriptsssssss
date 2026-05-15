document.querySelector("#pagina").innerHTML = `
    <div>
      <h1>hello</h1>
      <div id="tarjeta">
        <img src="" alt="" id="imagens">
        <h1 id="name"></h1>
      </div>
      <button type="submit" id="cerrar">cerrar sesion</button>
    </div>
`;


const cerrar = () => {
  localStorage.setItem("cerrar", "index.html");
  window.location.href = "index.html";
};
document.getElementById("cerrar")
.addEventListener("click",cerrar);


// Obtener usuario logueado
const usuarioActivo = JSON.parse(localStorage.getItem("user"));

// Mostrar datos en la tarjeta
if (usuarioActivo) {

  document.getElementById("name").textContent =
    usuarioActivo.username;

  document.getElementById("imagens").src =
    usuarioActivo.avatar;

}