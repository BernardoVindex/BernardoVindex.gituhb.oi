#include <iostream>
#include "GameMap.h"
#include <fstream>

using namespace std;

GameMap::GameMap()
{
    //Para limpiar la memoria
    PlayerCell = NULL;
    LoadMapFromFile();
}

void GameMap::Draw()
{
    for(int i = 0; i < 15; i ++)
    {
        for(int p = 0; p < 10; p ++)
        {
            cout << cells[i][p].id;
        }
        cout << endl;
    }
}

void GameMap::SetPlayerCell(int PlayerX, int PlayerY)
{
    if(PlayerCell != NULL)
    {
        PlayerCell->id = 0;
    }
    //Recuerda que el primer array son las columnas (Y) y el segundo son las filas (X)
    PlayerCell = &cells[PlayerY][PlayerX];
    PlayerCell->id = 3;
    //cout << "Mi jugador esta en las cordenas: (" << PlayerX << ", " << PlayerY << ")" << endl;
}

void GameMap::LoadMapFromFile()
{
    ofstream FileCreated("Map.txt");

    if(FileCreated.is_open())
    {

    }
    else
    {
        cout << "FATAL ERROR: Map File could not be CREATED!" << endl;
    }

    string line;
    ifstream MyFile("Map.txt");

    if(MyFile.is_open())
    {

    }
    else
    {
        cout << "FATAL ERROR: Map File could not be LOADED!" << endl;
    }
}
