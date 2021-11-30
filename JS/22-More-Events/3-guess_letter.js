/**************************************************************************\
* Psuedo code:                                                             *
* 1. generate random letter and store in a global variable                 *
* 2. Listen to keyboard event       <--------------------------------\     *
* 3. if the key is a letter, store the letter, else change           |     *
*    message to "Invalid char"                                       |     *
* 4. Check if the letter is the hidden letter             -----------+----\*
* 5. if the key was not guessed yet store in guessed array           |    |*
*    and change the message "You guessed wrong".                     |    |*
*    else change the message to "You already guessed the letter"     |    |*
* 6. Update the wrong guesses section according to the array --------/    |*
* 7. if 4 is true change the message to "Congrats" and dye it green color</*
* 8. Reveal the hidden letter in the .letter div                           *
* 9. Create a button to reset the game                                     *
\**************************************************************************/

/**********************************************************\
* Reset:                                                   *
* 1. go through everything and set it to the initial value *
* 2. referesh the page                                     *
\**********************************************************/
