class Picaro {
    constructor(){
        this.hp = 2600;
        this.imagen_atk1 = "Picaro_P1/Golpe_perfecto_1.PNG";
        this.imagen_atk2 = "Picaro_P1/Apuñalada_Doble1.PNG"; 
    }
    atk1(enemigo){
         enemigo.hp = enemigo.hp - 500;
    }
    atk2(enemigo){
        enemigo.hp = enemigo.hp - 1000;
    }
}
class Sacerdote {
    constructor(){
        this.hp = 2100;
        this.imagen_atk1 = "Sacerdote_P2/Golpe_Sagrado1.PNG";
        this.imagen_atk2 = "Sacerdote_P2/Cura_Sagrada1.PNG"; 
    }
    atk1(enemigo){
        enemigo.hp = enemigo.hp - 300;
    }
    atk2(aliado){
        aliado.hp = aliado.hp + 900;
    }
}
class Guerrero {
    constructor() {
        this.hp = 4000;
        this.imagen_atk1 = "Guerrero_P1/Grito1.PNG";
        this.imagen_atk2 = "Guerrero_P1/Salto_Heroico2.PNG";
    }
    atk1(enemigo){
        enemigo.hp = enemigo.hp -350;
    }
    atk2(enemigo){
        enemigo.hp = enemigo.hp -700;
    }
}
var player_1;
var player_2;
var player_3;
var player_4;

// Seleccion player 1 

function seleccionar_picaro_p1(){
    player_1 = new Picaro();
    document.getElementById("vida_p1").innerHTML = player_1.hp;
    document.getElementById("imagen_atk1_p1").src = "Cartas/Picaro.PNG";
    document.getElementById("boton_atk1_p1").innerHTML = "Golpe perfecto ";
    document.getElementById("imagen_atk2_p1").src = "Cartas/Asesina.PNG";
    document.getElementById("boton_atk2_p1").innerHTML = "Apuñalada doble";
}

function seleccionar_sacerdote_p1(){
    player_1 = new Sacerdote();
    document.getElementById("vida_p1").innerHTML = player_1.hp;
    document.getElementById("imagen_atk1_p1").src = "Cartas/Heler.PNG";
    document.getElementById("boton_atk1_p1").innerHTML = "¡Golpe sagrado!";
    document.getElementById("imagen_atk2_p1").src = "Cartas/Sacer.PNG";
    document.getElementById("boton_atk2_p1").innerHTML = "Cura sagrada";
}

function seleccionar_guerrero_p1(){
    player_1 = new Guerrero();
    document.getElementById("vida_p1").innerHTML = player_1.hp;
    document.getElementById("imagen_atk1_p1").src = "Cartas/Warrior.PNG";
    document.getElementById("boton_atk1_p1").innerHTML = "Grito de batalla"
    document.getElementById("imagen_atk2_p1").src = "Cartas/Guerrero.PNG";
    document.getElementById("boton_atk2_p1").innerHTML = "Salto Heroico";
}
// Seleccion player 2 

function seleccionar_picaro_p2(){
    player_2 = new Picaro();
    document.getElementById("vida_p2").innerHTML = player_2.hp;
    document.getElementById("imagen_atk1_p2").src = "Cartas/Picaro.PNG";
    document.getElementById("boton_atk1_p2").innerHTML = "Golpe perfecto";
    document.getElementById("imagen_atk2_p2").src = "Cartas/Asesina.PNG";
    document.getElementById("boton_atk2_p2").innerHTML = "Apuñalada doble";
}

function seleccionar_sacerdote_p2(){
    player_2 = new Sacerdote();
    document.getElementById("vida_p2").innerHTML = player_2.hp;
    document.getElementById("imagen_atk1_p2").src = "Cartas/Heler.PNG";
    document.getElementById("boton_atk1_p2").innerHTML = "¡Golpe sagrado! "
    document.getElementById("imagen_atk2_p2").src = "Cartas/Sacer.PNG";
    document.getElementById("boton_atk2_p2").innerHTML = "Cura sagrada";
}

function seleccionar_guerrero_p2(){
    player_2 = new Guerrero();
    document.getElementById("vida_p2").innerHTML = player_2.hp;
    document.getElementById("imagen_atk1_p2").src = "Cartas/Warrior.PNG";
    document.getElementById("boton_atk1_p2").innerHTML = "Grito de batalla"
    document.getElementById("imagen_atk2_p2").src = "Cartas/Guerrero.PNG";
    document.getElementById("boton_atk2_p2").innerHTML = "Salto Heroico";
}
// Seleccionar player 3

function seleccionar_picaro_p3(){
    player_3 = new Picaro();
    document.getElementById("vida_p3").innerHTML = player_3.hp;
    document.getElementById("imagen_atk1_p3").src = "Cartas/Picaro.PNG";
    document.getElementById("boton_atk1_p3").innerHTML = "Golpe perfecto "
    document.getElementById("imagen_atk2_p3").src = "Cartas/Asesina.PNG";
    document.getElementById("boton_atk2_p3").innerHTML = "Apuñalada doble";
}

function seleccionar_sacerdote_p3(){
    player_3 = new Sacerdote();
    document.getElementById("vida_p3").innerHTML = player_3.hp;
    document.getElementById("imagen_atk1_p3").src = "Cartas/Heler.PNG";
    document.getElementById("boton_atk1_p3").innerHTML = "¡Golpe sagrado! "
    document.getElementById("imagen_atk2_p3").src = "Cartas/Sacer.PNG";
    document.getElementById("boton_atk2_p3").innerHTML = "Cura sagrada";
}

function seleccionar_guerrero_p3(){
    player_3 = new Guerrero();
    document.getElementById("vida_p3").innerHTML = player_3.hp;
    document.getElementById("imagen_atk1_p3").src = "Cartas/Warrior.PNG";
    document.getElementById("boton_atk1_p3").innerHTML = "Grito de batalla"
    document.getElementById("imagen_atk2_p3").src = "Cartas/Guerrero.PNG";
    document.getElementById("boton_atk2_p3").innerHTML = "Salto Heroico";
}
// Seleccionar player 4

function seleccionar_picaro_p4(){
    player_4 = new Picaro();
    document.getElementById("vida_p4").innerHTML = player_4.hp;
    document.getElementById("imagen_atk1_p4").src = "Cartas/Picaro.PNG";
    document.getElementById("boton_atk1_p4").innerHTML = "Golpe perfecto "
    document.getElementById("imagen_atk2_p4").src = "Cartas/Asesina.PNG";
    document.getElementById("boton_atk2_p4").innerHTML = "Apuñalada doble";
}

function seleccionar_sacerdote_p4(){
    player_4 = new Sacerdote();
    document.getElementById("vida_p4").innerHTML = player_4.hp;
    document.getElementById("imagen_atk1_p4").src = "Cartas/Heler.PNG";
    document.getElementById("boton_atk1_p4").innerHTML = "¡Golpe sagrado! "
    document.getElementById("imagen_atk2_p4").src = "Cartas/Sacer.PNG";
    document.getElementById("boton_atk2_p4").innerHTML = "Cura sagrada";
}
function seleccionar_guerrero_p4(){
    player_4 = new Guerrero();
    document.getElementById("vida_p4").innerHTML = player_4.hp;
    document.getElementById("imagen_atk1_p4").src = "Cartas/Warrior.PNG";
    document.getElementById("boton_atk1_p4").innerHTML = "Grito de batalla"
    document.getElementById("imagen_atk2_p4").src = "Cartas/Guerrero.PNG";
    document.getElementById("boton_atk2_p4").innerHTML = "Salto Heroico";
}
// Ataques Player 1 
function boton_atk1_p1(){
    var numero_de_player = prompt("¿a que jugador?","3");
    if (numero_de_player == "1"){
        player_1.atk1(player_1);
    }else if(numero_de_player == "2"){
        player_1.atk1(player_2);
    }else if(numero_de_player == "3"){
        player_1.atk1(player_3);
    }else if(numero_de_player == "4"){
        player_1.atk1(player_4);
    }
    actualizar_vidas();
    document.getElementById("r_player_1").innerHTML += `<img src="${player_1.imagen_atk1}"><br>`;
    revisar_victoria();
}

function boton_atk2_p1(){
    var numero_de_player = prompt("¿a que jugador?","3");
    if (numero_de_player == "1"){
        player_1.atk2(player_1);
    }else if(numero_de_player == "2"){
        player_1.atk2(player_2);
    }else if(numero_de_player == "3"){
        player_1.atk2(player_3);
    }else if(numero_de_player == "4"){
        player_1.atk2(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_1").innerHTML += `<img src="${player_1.imagen_atk2}"><br>`;
   revisar_victoria();
}
// Ataques Player 2 
function boton_atk1_p2(){
    var numero_de_player = prompt("¿a que jugador?","4");
    if (numero_de_player == "1"){
        player_2.atk1(player_1);
    }else if(numero_de_player == "2"){
        player_2.atk1(player_2);
    }else if(numero_de_player == "3"){
        player_2.atk1(player_3);
    }else if(numero_de_player == "4"){
        player_2.atk1(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_1").innerHTML += `<img src="${player_2.imagen_atk1}"><br>`;
   revisar_victoria();
}

function boton_atk2_p2(){
    var numero_de_player = prompt("¿a que jugador?","4");
    if (numero_de_player == "1"){
        player_2.atk2(player_1);
    }else if(numero_de_player == "2"){
        player_2.atk2(player_2);
    }else if(numero_de_player == "3"){
        player_2.atk2(player_3);
    }else if(numero_de_player == "4"){
        player_2.atk2(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_1").innerHTML += `<img src="${player_2.imagen_atk2}"><br>`;
   revisar_victoria();
}

// Ataques Player 3 

function boton_atk1_p3(){
    var numero_de_player = prompt("¿a que jugador?","1");
    if (numero_de_player == "1"){
        player_3.atk1(player_1);
    }else if(numero_de_player == "2"){
        player_3.atk1(player_2);
    }else if(numero_de_player == "3"){
        player_3.atk1(player_3);
    }else if(numero_de_player == "4"){
        player_3.atk1(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_2").innerHTML += `<img src="${player_3.imagen_atk1}"><br>`;
   revisar_victoria();
}

function boton_atk2_p3(){
    var numero_de_player = prompt("¿a que jugador?","1");
    if (numero_de_player == "1"){
        player_3.atk2(player_1);
    }else if(numero_de_player == "2"){
        player_3.atk2(player_2);
    }else if(numero_de_player == "3"){
        player_3.atk2(player_3);
    }else if(numero_de_player == "4"){
        player_3.atk2(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_2").innerHTML += `<img src="${player_3.imagen_atk2}"><br>`;
   revisar_victoria();
}


// Ataques Player 4

function boton_atk1_p4(){
    var numero_de_player = prompt("¿a que jugador?","2");
    if (numero_de_player == "1"){
        player_4.atk1(player_1);
    }else if(numero_de_player == "2"){
        player_4.atk1(player_2);
    }else if(numero_de_player == "3"){
        player_4.atk1(player_3);
    }else if(numero_de_player == "4"){
        player_4.atk1(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_2").innerHTML += `<img src="${player_4.imagen_atk1}"><br>`;
   revisar_victoria();
}

function boton_atk2_p4(){
    var numero_de_player = prompt("¿a que jugador?","2");
    if (numero_de_player == "1"){
        player_4.atk2(player_1);
    }else if(numero_de_player == "2"){
        player_4.atk2(player_2);
    }else if(numero_de_player == "3"){
        player_4.atk2(player_3);
    }else if(numero_de_player == "4"){
        player_4.atk2(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_2").innerHTML += `<img src="${player_4.imagen_atk2}"><br>`;
   revisar_victoria();
}

// Actualizar vidas =)

function actualizar_vidas(){
    document.getElementById("vida_p1").innerHTML = player_1.hp;
    document.getElementById("vida_p2").innerHTML = player_2.hp;
    document.getElementById("vida_p3").innerHTML = player_3.hp;
    document.getElementById("vida_p4").innerHTML = player_4.hp;
}

// Sirve para ver quien gano =)

function revisar_victoria(){
    if (player_1.hp <= 0 && player_2.hp <= 0){
        alert("¡Ganaron los players 3 y 4!")
        mostrar();
    }else if(player_3.hp <= 0 && player_4.hp <=0){
        alert("¡Ganaron los players 1 y 2!")
        mostrar();
    }  
}

function mostrar(){
	document.getElementById('Ganador').style.display = 'block';
  }