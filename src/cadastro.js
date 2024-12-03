document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("cadastroForm");
    const botaoEnviar = document.getElementById("enviar");
  
    botaoEnviar.addEventListener("click", () => {
      const nome = document.getElementById("name").value.trim();
      const sobrenome = document.getElementById("sobrenome").value.trim();
      const idade = document.getElementById("idade").value.trim();
      const sexo = document.querySelector('input[name="sexo"]:checked');
      const cpf = document.getElementById("cpf").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("tel").value.trim();
      const endereco = document.getElementById("end").value.trim();
      const cidade = document.getElementById("cidade").value.trim();
      const estado = document.getElementById("est").value.trim();
  
      if (
        !nome ||
        !sobrenome ||
        !idade ||
        !sexo ||
        !cpf ||
        !email ||
        !telefone ||
        !endereco ||
        !cidade ||
        !estado
      ) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
      }
  
      const dadosUsuario = {
        nome,
        sobrenome,
        idade,
        sexo: sexo.value,
        cpf,
        email,
        telefone,
        endereco,
        cidade,
        estado,
      };
  
      localStorage.setItem("dadosCadastro", JSON.stringify(dadosUsuario));
  
      alert("Cadastro enviado com sucesso!");
  
      window.location.href = "index.html";
    });
  });

  