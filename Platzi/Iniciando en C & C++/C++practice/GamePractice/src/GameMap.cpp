#include <iostream>
#include "GameMap.h"
#include <fstream>

using namespace std;

GameMap::GameMap()
{
    //Para limpiar la memoria
    PlayerCell = NULL;
    LoadMapFromFile();
    isGameOver = false;
}

//Funcion para dibujar mapa con array
void GameMap::Draw()
{
    for(int i = 0; i < 15; i ++)
    {
        for(int p = 0; p < 10; p ++)
        {
            //Imprimipara en pantalla las celdas con la figura del .id ubicada en MapCell.cpp
            cout << cells[i][p].id;
        }
        cout << endl;
    }
}

bool GameMap::SetPlayerCell(int PlayerX, int PlayerY)
{
    if(cells[PlayerY][PlayerX].IsBlocked() == false)
    {
        if(cells[PlayerY][PlayerX].id == '$')
        {
            DrawVictory();
            isGameOver = true;
            return true;
        }
        else
        {
            if(PlayerCell != NULL)
            {
            //Coloca el valor 0, como id es char, etonces id = NULL
            PlayerCell->id = 0;
            }
            //Recuerda que el primer array son las columnas (Y) y el segundo son las filas (X)
            PlayerCell = &cells[PlayerY][PlayerX];
            //En las coordendadas del player cell, coloca este caracter
            PlayerCell->id = 'V';
        }


    return true;
    }
    else
    {
        return false;
    }
}

void GameMap::DrawIntro()
{
    string line;
    ifstream MyFile("Intro.txt");

        if(MyFile.is_open())
        {
            while ( getline(MyFile, line) )
                {
                    cout << line << endl;
                }
                cin >> line;
        }
        else
        {
            cout << "FATAL ERROR: Intro could not be LOADED!" << endl;
        }
}

void GameMap::DrawVictory()
{
    string line;
    ifstream MyFile("Victory.txt");

        if(MyFile.is_open())
        {
            while ( getline(MyFile, line) )
                {
                    cout << line << endl;
                }
                cin >> line;
        }
        else
        {
            cout << "FATAL ERROR: Victory could not be LOADED!" << endl;
        }
}

void GameMap::LoadMapFromFile()
{
    //Función para crear el archivo Map.txt
    //Se "comentó" la función para que no sobreescriba el archivo ya existente
    /*
    ofstream FileCreated("Map.txt");

    if(FileCreated.is_open())
    {

    }
    else
    {
        cout << "FATAL ERROR: Map File could not be CREATED!" << endl;
    }
    */

    //Caragará los caracteres desde Map.txt para formar el mapa
    string line;

    //Esta varable nos ubica en el posición 0 del array
    int row = 0;

    //Funcion para entrada de datos a Map.txt
    ifstream MyFile("Map.txt");

    if(MyFile.is_open())
    {
        while ( getline(MyFile, line) )
        {
            for (int p = 0; p <line.length(); p++)
            {
                if(line[p] == '0')
                {
                    cells[row][p].id = 0;
                }
                else
                {
      //Parece que aquí sobrescribimos sobre el id
                    cells[row][p].id = line[p];
                }
            }
            row++;
        }
    }
    else
    {
        cout << "FATAL ERROR: Map File could not be LOADED!" << endl;
    }
}
