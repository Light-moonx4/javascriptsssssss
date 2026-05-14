document.querySelector("#pagina").innerHTML = `
    <div>
      <h1>hello</h1>
      
      <button type="submit" id="cerrar">cerrar sesion</button>
    </div>
`;



const cerrar = () => {
  localStorage.setItem("cerrar", "index.html");
  window.location.href = "index.html";
};
document.getElementById("cerrar")
.addEventListener("click",cerrar);