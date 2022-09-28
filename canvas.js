function dibujarTablero() {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#F3F5FC"
    tablero.strokeStyle = "#F15069"
    tablero.fillRect(0,0,1200,800)
    tablero.beginPath();
    tablero.moveTo(650,500)
    tablero.lineTo(900,500)
    tablero.stroke()
    tablero.closePath()
  }

  function dibujarLineas() {
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#F15069"
    tablero.beginPath()
    let ancho=600/palabraSecreta.length
    for (let i=0;i<palabraSecreta.length;i++){
      tablero.moveTo(500+(ancho*i),640)
      tablero.lineTo(550+(ancho*i),640)
    }
    tablero.stroke()
    tablero.closePath()
  }
  function escribirLetraCorrecta(index) {
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#1C8989"
    let ancho=600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index],505+(ancho*index),620)
    tablero.stroke()
  }

  function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.lineWidth=6
    tablero.font = 'bold 40px Inter';
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#339999"
    tablero.fillText(letra,535+(40*(10-errorsLeft)),710,40)
  }

  function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#F15069"
    //poste lateral
    if(puntaje===8){
    tablero.moveTo(700,500)
    tablero.lineTo(700,100)
    }
    //techo
    if(puntaje===7){ 
    tablero.moveTo(850,100)
    tablero.lineTo(700,100)
    }
    //cuerda
    if(puntaje===6){
    tablero.moveTo(850,100)
    tablero.lineTo(850,171)
    }
    //cabeza
    if(puntaje===5){
    tablero.moveTo(900,230)
    tablero.arc(850,230,50,0,Math.PI*2)
    }
    //cuerpo
    if(puntaje===4){
    tablero.moveTo(850,389)
    tablero.lineTo(850,289)
    }
    //pierna izquierda
    if(puntaje===3){
    tablero.moveTo(850,389)
    tablero.lineTo(800,450)
    }
    //pierna derecha
    if(puntaje===2){
    tablero.moveTo(850,389)
    tablero.lineTo(890,450)
    }
    //mano izquierda
    if(puntaje===1){
    tablero.moveTo(850,330)
    tablero.lineTo(800,389)
    }
    //mano derecha
    if(puntaje===0){
    tablero.moveTo(850,330)
    tablero.lineTo(890,389)
    }
    tablero.stroke()
    tablero.closePath()
  }

  function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#452F9D"
    tablero.fillText("Fin del juego!",930,320)
  }

  function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#1C8989"
    tablero.fillText("Ganaste,",950,320)
    tablero.fillText("Felicidades!",930,360)
    setTimeout( recargar , 1000)
  }   

  function recargar(){
    location.reload(); 
  }