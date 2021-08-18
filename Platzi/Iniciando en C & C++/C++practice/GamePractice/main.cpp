#include <iostream>
#include "Player.h"
#include "MapCell.h"
#include "GameMap.h"

using namespace std;

int main()
{
    bool isGameOver = false;
    GameMap Map;
    Player Hero;

    cout << "I wana play a game";

    while(isGameOver == false)
    {
        //Aqu� esta el loop del juego
        Hero.CallImput();

        //Actualizado de inrmocaci�n heroe a mapa
        Map.SetPlayerCell(Hero.x,Hero.y);

        //Aqu� dibujamos el mapa
        Map.Draw();

    }

    return 0;
}
