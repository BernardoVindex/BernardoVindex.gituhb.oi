#include <iostream>
#include <fstream>

using namespace std;

int main()
{
/*
    ofstream MyFile("GameData.txt"); //Variable
    string playerName = "";

    if(MyFile.is_open())
    {
        MyFile << "Hola Platzi" << endl;
        MyFile << "Mi nombre es" << endl;
        cout << "Introduce el nombre de tu heroe" << endl;
        cin >> playerName;
        MyFile << playerName;
    }

    MyFile.close();
*/
    ifstream MyFileRead("GameData.txt");//Variable
    string line;
    string NombreDelHeroe = "";
    int Renglon = 0;

    if(MyFileRead.is_open())
    {
        while (getline(MyFileRead, line))
        {
            Renglon = Renglon + 1;

            if(Renglon == 3)
            {
                NombreDelHeroe = line;
            }
        }
    }
    else
    {
        cout << "No logre abrir arhivo, checar antivirus!!" << endl;
    }

    cout <<"Bienvenido a tu aventura: ";
    cout << NombreDelHeroe << endl;

    return 0;

}



