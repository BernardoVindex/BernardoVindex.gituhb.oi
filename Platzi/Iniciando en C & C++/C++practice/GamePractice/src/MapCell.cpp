#include "MapCell.h"

MapCell::MapCell()
{
    //El tipo de dato está dado en su librería
    id = '0';
}

bool MapCell::IsBlocked()
{
    if (id == '1')
    {
        return true;
    }
    else
    {
        return false;
    }
}


