
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 

Interactive Frontend Development Milestone Project

For my Milestone Project 2 , I have created a single page Application Simon said”.

I have created a single page website for those looking for memory training using the memory game Simon said.  The Game is a 
simple one speed game where the computer selects a pattern of colors and the user-player must copy the exact sequence to progress to the next level 
where the sequence gets harder. It is a fun game for everybody to play.

UX

A typical player of Simon would be looking for the following.

    An appealing easy to follow user interface
    Straight forward interface let you know where the start button is for instant play.
    Clearly highlighted game-tiles and sound notification on selection.
    Clear next level notification through level window box.  Clear fail pop up box.

The Home section is set out with Header text indicating positive applications for Memory Games

The Page background is black so as to provide great contrast to the game as well as providing lest distraction to all users


The About section outlines the benefits of Memory games for adults, children and benefits for children with ADHD. 

    Start button: If the user clicks on this button, the computer will randomly select a game tile starting with one tile 
    and adding an extra tile as the player progresses through each level.
    Game counter: notifies the player what level they are on. If the player fails to follow the sequence the 
    counter will say “You crashed - Try again” and if the player wins the game the counter will display “You Win!”.
    Game tiles: When selected by the computer or clicked by the user-player, the game tiles will “light up” and play a short tone to signify it’s selection.
    There are two game options Strict which allows only one mistake.  The relaxed option which allows 2 mistakes.
    A reset button was implemented to reset the game back to zero
    
Features Left to Implement

    Better Game reset feature.
    Game is not optimized for smaller devices like phones. It will work but not to the desired level.
    on smaller screens game needs to morph into parallel lines to be more screen size friendly.
    I adapted parts of w3school template for the webpage as time dictated speed of implementation.
Technologies Used

Javascript: For game interaction and game-tiles animation
Scss: to add logic to my stylesheets.
Bootstrap (getbootstrap.com): For the Grid System and buttons across the site.

    Hover(cdnjs): I used "sweep to bottom" hover on the start button. When the user hovers over the start button, a transparent shade sweeps down over the selection to highlight what the user is about to select.
    Font Awesome: I put a star at either side of the label on the start button using font-awesome.
    

Testing

As per my primary targets above:

    A regular player will see the start button on landing and can get started straight away.
    Testing has been performed on numerous devices.  All worked.
Other Testing...

    HTML and CSS code was validated through the relevant validators. https://validator.w3.org

Deployment


Content

Media

Sounds from amazon.
Acknowledgements

Code institute tutorials.
w3schools.com
Slack
Javascript tutorials on Udemy
stackoverflow.com
codepen.io