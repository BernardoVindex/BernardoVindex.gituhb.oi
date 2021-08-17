#include <iostream>

using namespace std;

class Human
{
public:
        Human(int SpawnAge)
        {
            Age = SpawnAge;
        }

        void Think()
        {
            cout << GetThingkMessage() << endl;
        }

        int Age;
private:                               //Esta es la parte de abstracción, el usuario no debe ver cómo se calculan estas frases

        int SocialLevel;
        int Inteligence;
        int Luck;

        string GetThingkMessage()
        {
            if(SocialLevel + Luck > 100)
            {
                return "Estoy teniendo un pensamiento feli :D";
            }
            else if (Luck > Inteligence)
            {
                return "Soy un suertudo!";
            }
            else if (Age > 18)
            {
                return "Soy un bebe";
            }
            else
            {
                return "No pienso nada";
            }
        }

};

int main()
{
    Human Bob(19);

    Bob.Think();

    return 0;
}
