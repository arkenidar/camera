
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    var video = $id('video')
    video.srcObject = stream
    video.play()
    video.onclick = click
  })

function click() {
  var canvas = $id('canvas')
  var video = $id('video')
  var height = canvas.height = video.videoHeight
  var width = canvas.width = video.videoWidth
  canvas.getContext('2d').drawImage(video, 0, 0, width, height)
  $id('photo').src = canvas.toDataURL('image/png')
  $id('link').href = $id('photo').src.replace("image/png", "image/octet-stream")
}

function $id(id) {
  return document.getElementById(id)
}
