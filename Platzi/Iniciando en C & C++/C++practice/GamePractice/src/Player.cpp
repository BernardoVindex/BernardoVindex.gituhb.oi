#include "Player.h"
#include <iostream>

using namespace std;

Player::Player()
{
    x = 1;
    y = 1;
}

void Player::CallImput()
{
    char UserImput = ' ';
    cin >> UserImput;

    switch(UserImput)
    {
        case 'w':
            //Recuerda que mientras mas abajo vayas, le tienes que sumar
            y -= 1;
            cout << "Se movio a ariba" << endl;
            break;
        case 'a':
            x -= 1;
            cout << "Se movio a la izquierda" << endl;
            break;
        case 's':
            //Las columnas crecen de arriba a abajo, si quieres "bajar" debes aumentar la coordenada
            y+= 1;
            cout << "Se movio a abajo" << endl;
            break;
        case 'd':
            x += 1;
            cout << "Se movio a derecha" << endl;
            break;
        default:
            cout << "Tecla no registrada" << endl;

    }
}
