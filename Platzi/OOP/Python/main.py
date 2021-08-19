from car import Car
from account import Account

if __name__=="__main__":
    #Objeto 1 de la clase Car    
    car = Car("AMS234", Account("Andre Herrera", "AND984"))
    print(vars(car))
    print(vars(car.driver))