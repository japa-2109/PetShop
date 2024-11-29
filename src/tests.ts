// "use client"

// import { useState } from "react"

// const Botao = () => {

//   const [contagem, set] = useState(0)
//   const [cancelado, setCancelado] = useState(false)
//   const handleClickA = () => set(contagem + 1) 
//   const handleClickD = () => set(contagem - 1)
//   const handleCancel= () => {
//     const confirmation = window.confirm("Deseja realmente cancelar?");
//     if (confirmation) {
//       setCancelado(true);
//         alert("Cancelado com sucesso");
//     } else {
//       alert("Não cancelado.");
//     }
//   }

//   return(

// //     <div>
// //       <p className="m-1">{contagem}</p>

// //       <button onClick={handleClickA} className="m-1 p-1 bg-gray-900 text-white rounded-md">+</button>

// //       <button onClick={handleClickD} className="m-1 p-1 bg-gray-900 text-white rounded-md">-</button>

// //       <button onClick={handleCancel} className="m-1 p-1 bg-gray-900 text-white rounded-md">Cancelar</button>


// //     </div>
// //   )
// // }

// export default Botao