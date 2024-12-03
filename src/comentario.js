document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("commentForm");
    const enviarButton = document.querySelector(".enviar");
  
    enviarButton.addEventListener("click", () => {
      const nome = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const comentario = document.getElementById("comment").value.trim();
  
      if (!nome || !email || !comentario) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
      }
  
      const novoComentario = {
        nome,
        email,
        comentario,
        data: new Date().toLocaleString(),
      };
  
      const comentariosExistentes = JSON.parse(localStorage.getItem("comentarios")) || [];
  
      comentariosExistentes.push(novoComentario);
  
      localStorage.setItem("comentarios", JSON.stringify(comentariosExistentes));

      alert("Comentário enviado com sucesso!");
  
      form.reset();
    });
  });