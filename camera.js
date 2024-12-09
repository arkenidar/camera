// program source with explanation in Italian and in English below

navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    var video = $id('video')

    // set the data stream as the video source
    video.srcObject = stream

    // play the video
    video.play()

    // click event handler
    video.onclick = click
  })

function click() {
  var canvas = $id('canvas')
  var video = $id('video')

  // set the canvas size equal to the video size
  var height = canvas.height = video.videoHeight
  var width = canvas.width = video.videoWidth

  // draw the current video frame
  canvas.getContext('2d').drawImage(video, 0, 0, width, height)

  // display the captured image
  $id('photo').src = canvas.toDataURL('image/png')

  // set the link for downloading the image
  $id('link').href = $id('photo').src.replace("image/png", "image/octet-stream")
}

function $id(id) {

  // return the DOM element with the specified id
  return document.getElementById(id)
}

// explanation in Italian and in English

/*
explanation in Italian:
  - getUserMedia: permette di accedere alla fotocamera e al microfono
  - video: true: chiede l'accesso alla fotocamera
  - stream: è il flusso di dati che arriva dalla fotocamera
  - video.srcObject: imposta il flusso di dati come sorgente del video
  - video.play(): avvia la riproduzione del video
  - video.onclick: imposta la funzione click come gestore dell'evento click
  - click: cattura un'immagine dal video e la visualizza in un canvas
  - $id: è una funzione che restituisce l'elemento del DOM con l'id specificato
  - canvas.height e canvas.width: impostano le dimensioni del canvas uguali a quelle del video
  - canvas.getContext('2d').drawImage(video, 0, 0, width, height): disegna il frame corrente del video
  - $id('photo').src = canvas.toDataURL('image/png'): visualizza l'immagine catturata
  - $id('link').href = $id('photo').src.replace("image/png", "image/octet-stream"): imposta il link per il download dell'immagine
  - $id('photo').src.replace("image/png", "image/octet-stream"): sostituisce il tipo di immagine da png a octet-stream
  - octet-stream: è un tipo di contenuto che indica che il file è un file binario
  - toDataURL: converte l'immagine in un URL di dati
  - image/octet-stream: indica che il file è un file binario
  - replace: sostituisce una sottostringa con un'altra
  - image/png: indica che il file è un'immagine png
  - image/octet-stream: indica che il file è un file binario
  - $id: è una funzione che restituisce l'elemento del DOM con l'id specificato
  - document.getElementById(id): restituisce l'elemento del DOM con l'id specificato
  - video.videoHeight: restituisce l'altezza del video
  - video.videoWidth: restituisce la larghezza del video
  - canvas.height = video.videoHeight: imposta l'altezza del canvas uguale all'altezza del video
  - canvas.width = video.videoWidth: imposta la larghezza del canvas uguale alla larghezza del video
  - canvas.getContext('2d'): restituisce un contesto di disegno bidimensionale
  - drawImage(video, 0, 0, width, height): disegna il frame corrente del video
  - video: è l'elemento video
  - 0: è la coordinata x di destinazione
  - 0: è la coordinata y di destinazione
  - width: è la larghezza del frame
  - height: è l'altezza del frame
  - $id('photo').src: è l'elemento img con id photo
  - canvas.toDataURL('image/png'): restituisce un URL di dati che rappresenta l'immagine
*/

/* explanation in English:
  - getUserMedia: allows access to the camera and microphone
  - video: true: asks for access to the camera
  - stream: is the data stream coming from the camera
  - video.srcObject: sets the data stream as the video source
  - video.play(): starts video playback
  - video.onclick: sets the click function as the click event handler
  - click: captures an image from the video and displays it in a canvas
  - $id: is a function that returns the DOM element with the specified id
  - canvas.height and canvas.width: set the canvas size equal to the video size
  - canvas.getContext('2d').drawImage(video, 0, 0, width, height): draws the current video frame
  - $id('link').href: è l'elemento a con id link
  - $id('photo').src = canvas.toDataURL('image/png'): displays the captured image
  - $id('link').href = $id('photo').src.replace("image/png", "image/octet-stream"): sets the link for downloading the image
  - $id('photo').src.replace("image/png", "image/octet-stream"): replaces the image type from png to octet-stream
  - octet-stream: is a content type that indicates the file is a binary file
  - toDataURL: converts the image to a data URL
  - image/octet-stream: indicates the file is a binary file
  - replace: replaces one substring with another
  - image/png: indicates the file is a png image
  - image/octet-stream: indicates the file is a binary file
  - $id: is a function that returns the DOM element with the specified id
  - document.getElementById(id): returns the DOM element with the specified id
  - video.videoHeight: returns the video height
  - video.videoWidth: returns the video width
  - canvas.height = video.videoHeight: sets the canvas height equal to the video height
  - canvas.width = video.videoWidth: sets the canvas width equal to the video width
  - canvas.getContext('2d'): returns a two-dimensional drawing context
  - drawImage(video, 0, 0, width, height): draws the current video frame
  - video: is the video element
  - 0: is the destination x coordinate
  - 0: is the destination y coordinate
  - width: is the frame width
  - height: is the frame height
  - $id('photo').src: is the img element with id photo
  - canvas.toDataURL('image/png'): returns a data URL representing the image
*/
