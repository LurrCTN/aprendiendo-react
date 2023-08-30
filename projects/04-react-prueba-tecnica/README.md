# Prueba tecnica para Juniors y Trainees de React en Live Coding

APIs: 

- Facts Random: https://catfact.ninja/fact
- Imagen Random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API y muestra una imagen de un gato con la primera palabra del hecho usando la segunda API.

- usar vanillajs :check:
- importar react y hacer el endpoint :check:

- recuperar un hecho de la primera api
  - endpoint a usar "https://catfact.ninja/fact"
- recuperar la primera palabra del hecho
  - endpoint a usar `https://cataas.com/cat/says/${firstWord}?size=${size}&color=${color}&json=true`
- mostrar una imagen de la segunda api con la primera palabra del hecho recuperado

- rehacer el fetch de los datos con axios, async await u otras dependencias 
- paginacion infinita
- boton siguiente fact
- test end to end