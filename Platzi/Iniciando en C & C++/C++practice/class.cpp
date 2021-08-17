#include <iostream>

using namespace std;

class cat
{
public:
    string name;
    cat()               //Contructor: lo primero que hace al ser "creado"
    {
        name = "Michis";
    }
    cat(string iname)               //Contructor: lo primero que hace al ser "creado"
    {
        name = iname;
    }

    void meow()
    {
        cout << name << " dice meow" << endl;
    }
};

int main()
{
    cat MyFirstKitty;
    cat MySecondKitty("Patas");

    MyFirstKitty.meow();

    for(int i; i < 3; i++)
    {
        MySecondKitty.meow();
    }

    return 0;
}
