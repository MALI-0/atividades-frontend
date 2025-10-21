function tipocomida() {

  const input = document.getElementById("comida").value.toLowerCase().trim();
  const paragrafo = document.getElementById("resultado");

  
  if (input === "pão com ovo") {
    paragrafo.textContent = "Isso é café da manhã";
  } else if (input === "feijão com arroz") {
    paragrafo.textContent = "Isso é almoço ";
  } else {
    paragrafo.textContent = "Isso é jantar ";
  }
}