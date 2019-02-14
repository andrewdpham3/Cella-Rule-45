# Cells-Rule-45

Andrew

Allie

Juan

Requirements: Javascript enabled web browser (tested in chrome). High resolution monitor recommended.

Run Instructions: Open cell45.html in a web browser.

Description: This program calculates generations of cells described by Wolfram ECA rule 45.

Architecture: This program uses HTML to create a div for the graph and squares (ul div).
CSS is used to style the graph. Javascript does all of the logic of this program.

Javascript Function:

1. A 1D array of 400 cells is initialized and seeded. A 1D array of all 160000 cells is also created.

2. 400 generations are processed according to rule 45 then stored in the 1D array "cells".

3. Squares are created, colored, and added to the graph based on value in "cells".
