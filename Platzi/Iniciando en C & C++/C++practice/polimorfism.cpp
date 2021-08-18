#include <iostream>

using namespace std;

class Mage
{
public:
        Mage(int BasePower, int BaseHp)
        {
            Power = BasePower;
            hp = BaseHp;
        }


        int Damage()
        {
            return Power;
        }

        void SpellGreet()
        {
            cout << "Hello World";
        }

        void GetDamaged(int Value)
        {
            hp -= Value;
            cout << "A mi mago le queda: " << hp << endl;
        }

protected:
        int Power, hp;

};

class IceMage : public Mage
{
public:
    IceMage(int BasePower, int BaseHp) : Mage(BasePower, BaseHp)
    {
        Power = BasePower + 10;
        hp = BaseHp;
    }
};

class FireMage : public Mage
{
public:
    FireMage(int BasePower, int BaseHp) : Mage(BasePower, BaseHp)
    {
        Power = BasePower;
        hp = BaseHp + 20;
    }
};

int main()
{
    Mage* CourrentMage;


    FireMage Gandalf(50, 70);
    IceMage Arthoras(60, 55);

    CourrentMage = &Gandalf;
    CourrentMage->GetDamaged(10);

    CourrentMage = &Arthoras;
    CourrentMage->GetDamaged(15);


    return 0;
}
