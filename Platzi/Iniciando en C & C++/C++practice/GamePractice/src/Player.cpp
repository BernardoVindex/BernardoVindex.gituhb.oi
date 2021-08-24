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
            lastX = x;
            lastX = y;
            //Recuerda que mientras mas abajo vayas, le tienes que sumar
            y -= 1;
            cout << "Se movio a ariba" << endl;
            break;
        case 'a':
            lastX = x;
            lastX = y;
            x -= 1;
            cout << "Se movio a la izquierda" << endl;
            break;
        case 's':
            lastX = x;
            lastX = y;
            //Las columnas crecen de arriba a abajo, si quieres "bajar" debes aumentar la coordenada
            y+= 1;
            cout << "Se movio a abajo" << endl;
            break;
        case 'd':
            lastX = x;
            lastX = y;
            x += 1;
            cout << "Se movio a derecha" << endl;
            break;
        default:
            cout << "Tecla no registrada" << endl;
    }
}

void Player::ResetToSafePosition()
{
    x = lastX;
    y = lastY;
}
