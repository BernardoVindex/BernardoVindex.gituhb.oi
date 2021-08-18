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
        //Aquí esta el loop del juego
        Hero.CallImput();

        //Actualizado de inrmocación heroe a mapa
        Map.SetPlayerCell(Hero.x,Hero.y);

        //Aquí dibujamos el mapa
        Map.Draw();

    }

    return 0;
}
