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
        //Aquí esta el loop del juego
        Hero.CallImput();

        //Actualizado de inrmocación heroe a mapa
        if (Map.SetPlayerCell(Hero.x,Hero.y))
        {
            Map.Draw(); //Aquí dibujamos el mapa
        }
        else
        {
            Hero.ResetToSafePosition();
            Map.Draw();
        }


    }

    return 0;
}
