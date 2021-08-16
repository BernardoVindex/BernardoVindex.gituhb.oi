#include <iostream> //Ingresar datos de entrada y mostrar datos de salida

using namespace std; //

int main()
{
	int edad;
	cout <<"Coloca tu edad: ";
	cin >> edad;

	if ((edad < 18) || (edad > 40)) {
		cout <<"No puedes votar";
  } else {
    cout <<"Puedes votar";
  }
}
