#include <iostream>

using namespace std;

void drawMap(int HeroPosX, int HeroPosY, char gameMap[5][5])
{

    for(int i = 0; i < 5; i++ )
    {
        for(int p = 0; p < 5; p++)
        {
            if (i != HeroPosY)
            {
                cout << gameMap[p][i];
            }
            else
            {
                if (p != HeroPosX)
                {
                    cout << gameMap[p][i];
                }
                else
                {
                    cout << 'H';
                }
            }
         }
       cout << endl;
    }
}

int main()
{
    int HeroPosX, HeroPosY = 0;
    bool isGameOver = false;
    char input;
    char gameMap[5][5] =
    {
        {'~','~','~','~','~'},
        {'~','~','~','~','~'},
        {'~','~','~','~','~'},
        {'~','~','~','~','~'},
        {'~','~','~','~','~'}
    };

    drawMap(HeroPosX, HeroPosY, gameMap);

    //cout << "H vale: " << HeroPosY <<endl;

    while(isGameOver == false)
    {
         cin >> input;

            if(input == 'd')
            {
                HeroPosX = HeroPosX + 1;
            }
            else if(input == 'a')
            {
                HeroPosX = HeroPosX - 1;
            }
            else if(input == 'w')
            {
                HeroPosY = HeroPosY - 1;
            }
            else if(input == 's')
            {
                HeroPosY = HeroPosY + 1;
            }
            else if(input == 'p')
            {
                isGameOver = true;
            }
/*
            switch(input)
            {
                case 'd';
                HeroPosX = HeroPosX + 1;
                break;
                case 'a';
                HeroPosX = HeroPosX - 1;
                break;
                case 'w';
                HeroPosX = HeroPosY + 1;
                break;
                case 's';
                HeroPosX = HeroPosY - 1;
                break;
                default;
                isGameOver = true;
            }
*/
    drawMap(HeroPosX, HeroPosY, gameMap);

    }


    return 0;
}
