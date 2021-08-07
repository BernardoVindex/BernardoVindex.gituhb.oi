/*#include <stdio.h>

enum weekDays {Monday, Tuesday, Wendsday, Thursday, Friday, Saturday, Sunday};

int main()
{
 
    enum weekDays today;
    today = Sunday;
    printf("Day %d", today+1);
    return 0; 
}
*/

/*#include <stdio.h>

enum deck {
    club = 0,
    diamonds = 5,
    heart = 10,
    spades = 15,
    } card;

int main()
{
 
    card = spades;
    
    printf("Card Powe %d", card);
    return 0; 
}
*/

#include <stdio.h>

enum deck {
    club = 0,
    diamonds = 5,
    heart = 10,
    spades = 15,
    } card;

int main()
{
 
    card = spades;
    
    printf("Size of var %d", sizeof(card));
    return 0; 
}