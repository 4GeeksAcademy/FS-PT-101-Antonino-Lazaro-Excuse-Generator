import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const personaje = [
    "Mi abuelo borracho",
    "La tía chiflada de mi primo",
    "Mi vecino extraterrestre",
    "El gato parlante de mi mamá",
    "Un ninja en sandalias"
  ];

  const accion = [
    "se comió",
    "desintegró",
    "robó",
    "prendió fuego",
    "transformó en confeti"
  ];

  const objeto = [
    "mis deberes intergalácticos",
    "mi celular a prueba de bombas",
    "mi computadora",
    "mi colección de memes épicos",
    "mi sándwich gourmet"
  ];

  const lugar = [
    "en la estación espacial de mi abuela",
    "en la escuela de magia",
    "en el supermercado embrujado",
    "en la calle llena de caracoles bailarines",
    "en un universo paralelo de chatarra"
  ];

  let excuseGenerated = document.getElementById('excuseGenerated');                       //asignamos la variable excuseGenerated al parrafo de excuseGenerated
  let buttonGenerateExcuse = document.getElementById('buttonGenerateExcuse');             //asignamos la variable buttonGenerateExcuse al boton de buttonGenerateExcuse
  var buttonAddExcuse = document.getElementById('buttonAddExcuse');                       //asignamos la variable buttonAddExcuse al boton de buttonAddExcuse



  let GenerateExcuse = (arr1, arr2, arr3, arr4) => `${arr1[Math.floor(Math.random() * arr1.length)]} ${arr2[Math.floor(Math.random() * arr2.length)]} ${arr3[Math.floor(Math.random() * arr3.length)]} ${arr4[Math.floor(Math.random() * arr4.length)]}`;
  let InsertExcuse = () => excuseGenerated.innerText = GenerateExcuse(personaje, accion, objeto, lugar);;



  document.addEventListener('DOMContentLoaded', function () {                             //cuando recargue la pagina llamamos a la función InsertExcuse
    InsertExcuse();
  });

  buttonGenerateExcuse.addEventListener('click', function () {                            //cuando se haga click en el boton buttonGenerateExcuse llamamos a la función InsertExcuse   
    InsertExcuse();
  });


  // Añadimos boton e imput para añadir nuevas frases.

  buttonAddExcuse.addEventListener('click', function () {                                 //añadimos un evento al boton de buttonAddExcuse
    let newExcuse = document.getElementById('newExcuse').value;                           //asignamos la variable newExcuse al valor del input de nueva frase
    let locationNewExcuse = document.getElementById('locationNewExcuse');                 //asignamos la variable locationNewExcuse al selector de frases
    if (newExcuse) {                                                                      //si newExcuse es verdadero (existe)
      switch (locationNewExcuse.value) {                                                  //hacemos un switch con el valor del selector de frases                            
        case 'personaje':
          personaje.push(newExcuse);                                                      //añadimos la nueva frase al array personaje
          break;
        case 'accion':
          accion.push(newExcuse);                                                         //añadimos la nueva frase al array accion                   
          break;
        case 'objeto':
          objeto.push(newExcuse);                                                         //añadimos la nueva frase al array objeto
          break;
        case 'lugar':
          lugar.push(newExcuse);                                                          //añadimos la nueva frase al array lugar
          break;
        default:
          break;
      }
      document.getElementById('newExcuse').value = '';
    }                                                                                   //limpiamos el input de newExcuse
  });
};
