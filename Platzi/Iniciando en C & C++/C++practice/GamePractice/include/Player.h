#ifndef PLAYER_H
#define PLAYER_H

class Player
{
    public:
        Player();

        void CallImput();
        void ResetToSafePosition();

        int x, y;

        //Coordenadas a las que regresará si intenta pasar un muro
        int lastX, lastY;

    protected:


    private:
};

#endif // PLAYER_H
