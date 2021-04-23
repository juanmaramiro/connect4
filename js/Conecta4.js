// VARIABLES \\

/* Este array representa cada una de las celdas del tablero */
var mapa = [0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0
        ];
/* Esta variable representa el turno del jugador */
var jugador = 1;

/* Este array son los contadores que se utilizarán en las funciones para cada uno de los botones */
var contador = [0, 0, 0, 0, 0, 0, 0];

// BOTONES \\

/* Creamos la función que hará que al pulsar en los botones se vayan añadiendo las fichas una encima de otra */
function boton(pos) {
    if (contador[pos] == 0) {
        if (jugador == 1) {
            mapa[35 + pos] = 1;
            jugador = 2;
            contador[pos]++;
        } else {
            mapa[35 + pos] = 2;
            jugador = 1;
            contador[pos]++;
        }
    } else if (contador[pos] == 1) {
        if (jugador == 1) {
            mapa[28 + pos] = 1;
            jugador = 2;
            contador[pos]++;
        } else {
            mapa[28 + pos] = 2;
            jugador = 1;
            contador[pos]++;
        }
    } else if (contador[pos] == 2) {
        if (jugador == 1) {
            mapa[21 + pos] = 1;
            jugador = 2;
            contador[pos]++;
        } else {
            mapa[21 + pos] = 2;
            jugador = 1;
            contador[pos]++;
        }
    } else if (contador[pos] == 3) {
        if (jugador == 1) {
            mapa[14 + pos] = 1;
            jugador = 2;
            contador[pos]++;
        } else {
            mapa[14 + pos] = 2;
            jugador = 1;
            contador[pos]++;
        }
    } else if (contador[pos] == 4) {
        if (jugador == 1) {
            mapa[7 + pos] = 1;
            jugador = 2;
            contador[pos]++;
        } else {
            mapa[7 + pos] = 2;
            jugador = 1;
            contador[pos]++;
        }
    } else if (contador[pos] == 5) {
        if (jugador == 1) {
            mapa[0 + pos] = 1;
            jugador = 2;
            contador[pos]++;
        } else {
            mapa[0 + pos] = 2;
            jugador = 1;
            contador[pos]++;
        }
    }

    /* Al utilizar esta función, también se activarán las otras dos funciones que hemos creado más abajo */
    dibujar();
    comprobacion();
}


// CAMBIO DE COLOR DE LAS CELDAS Y COMPROBACIÓN DE CELDAS GANADORAS \\

/* Creamos la función para que las celdas se cambien al color de la ficha del jugador */
function dibujar() {
    /* Con este bucle for recorremos todo el array de mapa (representación de las celdas) */
    for (var i = 0; i < 43; i++) {
        /* Si el juego aun no ha empezado, las celdas serán de color blanco */
        if (mapa[i] == 0) {
            document.getElementById("celda" + i).style.backgroundColor = "#0000FF";
            /* Si el jugador 1 ha decidido colocar ahí su ficha, la celda cambiará a color rojo */
        } else if (mapa[i] == 1) {
            document.getElementById("celda" + i).style.backgroundColor = "#FF0000";
            /* Si el jugador 2 ha decidido colocar ahí su ficha, la celda cambiará a color amarillo */
        } else if (mapa[i] == 2) {
            document.getElementById("celda" + i).style.backgroundColor = "#FFD700";
        }
    }
}

function comprobacion() {
    /* Creamos una matriz con todas las combinaciones ganadoras posibles */
    /* (cada número representa a una celda del tablero '0-41' */
    /* empezando desde arriba a la izquierda hasta abajo a la derecha) */
    var combinaciones = [
        [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
        [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
        [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
        [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
        [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
        [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
        [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
        [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
        [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
        [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
        [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
        [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
        [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
        [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40],
        [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41],
        [2, 10, 18, 26], [10, 18, 26, 34],
        [3, 11, 19, 27],
        [7, 15, 23, 31], [15, 23, 31, 39],
        [14, 22, 30, 38],
        [3, 9, 15, 21],
        [4, 10, 16, 22], [10, 16, 22, 28],
        [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35],
        [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36],
        [13, 19, 25, 31], [19, 25, 31, 37],
        [20, 26, 32, 38]
        ];

    /* Con este bucle for asociamos las combinaciones con el array que representa cada celda del tablero */
    for (var y = 0; y < combinaciones.length; y++) {
        /* Recogemos el valor en una supuesta celda 1 */
        var celda1 = mapa[combinaciones[y][0]];
        /* Recogemos el valor en una supuesta celda 2 */
        var celda2 = mapa[combinaciones[y][1]];
        /* Recogemos el valor en una supuesta celda 3 */
        var celda3 = mapa[combinaciones[y][2]];
        /* Recogemos el valor en una supuesta celda 4 */
        var celda4 = mapa[combinaciones[y][3]];

        /* Si el valor de todas las celdas es 1, entonces Jugador 1 será el ganador */
        if (celda1 == 1 && celda2 == 1 && celda3 == 1 && celda4 == 1) {
            /* Esto mostrará el mensaje de que Jugador 1 es el ganador además de */
            /* ponerlo de su color (rojo) y bloquear los botones para que no se pueda seguir jugando */
            document.getElementById("ganador").innerHTML = "¡El jugador 1 es el ganador!";
            document.getElementById("ganador").style.color = "#FF0000";
            for (var j = 0; j < 7; j++) {
                document.getElementById("boton" + j).onclick = false;
            }
            /* Si el valor de todas las celdas es 2, entonces Jugador 2 será el ganador */
        } else if (celda1 == 2 && celda2 == 2 && celda3 == 2 && celda4 == 2) {
            /* Esto mostrará el mensaje de que Jugador 2 es el ganador además de */
            /* ponerlo de su color (amarillo) y bloquear los botones para que no se pueda seguir jugando */
            document.getElementById("ganador").innerHTML = "¡El jugador 2 es el ganador!";
            document.getElementById("ganador").style.color = "#FFD700";
            for (var j = 0; j < 7; j++) {
                document.getElementById("boton" + j).onclick = false;
            }
        }
    }
}
