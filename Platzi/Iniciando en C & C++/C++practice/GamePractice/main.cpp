#include <iostream>
#include "Player.h"
#include "MapCell.h"
#include "GameMap.h"

using namespace std;

int main()
{
    GameMap Map;
    Player Hero;

    Map.DrawIntro();
    Map.Draw();

    while(Map.isGameOver == false)
    {
        cout << "Introduce el comando de moviemiento w,a,d,s" << endl;
        //Aqu� esta el loop del juego
        Hero.CallImput();

        //Actualizado de inrmocaci�n heroe a mapa
        if (Map.SetPlayerCell(Hero.x,Hero.y))
        {
            Map.Draw(); //Aqu� dibujamos el mapa
        }
        else
        {
            Hero.ResetToSafePosition();
            Map.Draw();
        }


    }

    return 0;
}
