#include "MapCell.h"

MapCell::MapCell()
{
    //El tipo de dato est� dado en su librer�a
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


