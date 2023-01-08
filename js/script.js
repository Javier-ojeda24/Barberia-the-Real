document.addEventListener("DOMContentLoaded", function () {
  let imagenes = [
    { img: "/img/corte-1.jpg" },
    { img: "/img/corte-2.jpg" },
    { img: "/img/corte-3.jpg" },
    { img: "/img/corte-4.jpg" },
    { img: "/img/corte-5.jpg" },
    { img: "/img/corte-6.jpg" },
    { img: "/img/corte-7.jpg" },
    { img: "/img/corte-8.jpg" },
    { img: "/img/corte-9.jpg" },
    { img: "/img/corte-10.jpg" },
    { img: "/img/corte-11.jpg" },
    { img: "/img/corte-12.jpg" },
    { img: "/img/corte-13.jpg" },
    { img: "/img/corte-14.jpg" },
    { img: "/img/corte-15.jpg" },
  ];
  let contador = 0;
  const contenedor = document.querySelector(".slideshow");
  const overlay = document.querySelector(".overlay");
  const galeria_imagenes = document.querySelectorAll(".galeria img");
  const img_slideshow = document.querySelector(".slideshow img");

  contenedor.addEventListener("click", function (event) {
    let atras = contenedor.querySelector(".atras"),
      adelante = contenedor.querySelector(".adelante"),
      img = contenedor.querySelector(".img"),
      tgt = event.target;
    if (tgt == atras) {
      if (contador > 0) {
        img.src = imagenes[contador - 1].img;
        contador--;
      } else {
        img.src = imagenes[imagenes.length - 1].img;
        contador = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (contador < imagenes.length - 1) {
        img.src = imagenes[contador + 1].img;
        contador++;
      } else {
        img.src = imagenes[0].img;
        contador = 0;
      }
    }
  });
  Array.from(galeria_imagenes).forEach((img) => {
    img.addEventListener("click", (event) => {
      const imagenesSeleccionadas = +event.target.dataset.imgMostrar;
      img_slideshow.src = imagenes[imagenesSeleccionadas].img;
      contador = imagenesSeleccionadas;
      overlay.style.opacity = 1;
      overlay.style.visibility = "visible";
    });
  });
  document.querySelector(".btn-cerrar").addEventListener("click", () => {
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
  });
});
const evento = document.getElementById("send");
const enviarFormulario = () => {
  let nombre = document.getElementById("nombres").value;
  let apellido = document.getElementById("apellidos").value;
  let mensaje = document.getElementById("mensaje").value;
  let numero = 541126620461;
  var win = window.open(
    `https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}
    %20${apellido}, Asunto:%20${mensaje} `,
    "_blank"
  );
};
evento.addEventListener("click", enviarFormulario);
