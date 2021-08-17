#include <iostream>

using namespace std;

class dog
{
public:

    dog(string name, string barkType)
    {
        mName = name;
        mBark = barkType;
    }

        string getName()    //Esta sección devuelve el nombre para que lo conozcan
        {
            return mName;
        }

        void setName(string newName)
        {
            mName = newName;
        }
        void bark()
        {
            cout << mBark << endl;
        }

private:                   //Esta sección protege que los datos sean modificados
        string mName;
        string mBark;
};

int main()
{
    dog perroUno("Hank","Grrr");
    perroUno.setName("Anubis");

    dog perroDos("Chakalozo","Essseee");

    cout << perroUno.getName() << endl;
    perroUno.bark();
    cout << perroDos.getName() << endl;
    perroDos.bark();
    return 0;
}
