function Cadastrar() {
  const numero = document.getElementById("nmrCelular");
  const senhaC = document.getElementById("senha");
  const nomeCompleto = document.getElementById("nmCompleto");
  const nomeUsuario = document.getElementById("nmUsuario");

  const numeroValidar = numero.value;
  const senhaValidar = senhaC.value;
  const nomeValidar = nomeCompleto.value;
  const usuarioValidar = nomeUsuario.value;

  if (numeroValidar === "") {
    numero.classList.add("erro");
  } else {
    numero.classList.remove("erro");
  }

  if (senhaValidar === "") {
    senhaC.classList.add("erro");
  } else {
    senhaC.classList.remove("erro");
  }

  if (nomeValidar === "") {
    nomeCompleto.classList.add("erro");
  } else {
    nomeCompleto.classList.remove("erro");
  }

  if (usuarioValidar === "") {
    nomeUsuario.classList.add("erro");
  } else {
    nomeUsuario.classList.remove("erro");
  }
}
