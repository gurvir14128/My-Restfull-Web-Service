# My-Restfull-Web-Service
I used node and express to create my restfull web service. I also used MongoDB to create and use my database. 
My database was based on videogames that I think are the best of the decade. My database included the name,
genre, console, and the main character of the videogame. I will explain later exactly how I created my database,
since the entire data file was too big to upload to github. 

To use my program I had to download node.js. Then I created a folder named node. Move to this path in the terminal
and enter "C:\node>npm install -g express-generator". After this I entered "C:\node>express nodetest2" to make
an express project. The package-lock.json file belongs in the node folder. Navigate to the nodetest2 path in the terminal and enter 
"npm install" to install the dependencies. Also, install MongoDB community server on your computer. 

The rest of my files in my repository belong in the nodetest2 folder. Navigate to this folder in the terminal and enter "mkdir data". Next navigate to your MongoDB bin path in the terminal and enter "mongod --dbpath c:\node\nodetest2\data". Leave this terminal open and open a new terminal and navigate to your MongoDB bin path again. Enter "mongo". Then enter "use nodetest2". Now you can enter in the data for the database. This is what I entered for my database. I entered 
"db.videogames.insert({'videogame' : 'Uncharted', 'MainCharacter' : 'Nathan Drake', 'console' : 'PS4', 'numberofGames' : '4', 'genre' : 'Adventure'})" 
"db.videogames.insert({'videogame' : 'Zelda', 'MainCharacter' : 'Link', 'console' : 'Nintendo', 'numberofGames' : '14', 'genre' : 'Adventure'})"
"db.videogames.insert({'videogame' : 'Red Dead', 'MainCharacter' : 'John Marston', 'console' : 'PS4', 'numberofGames' : '2', 'genre' : 'Shooter'})"
"db.videogames.insert({'videogame' : 'Assassins Creed', 'MainCharacter' : 'Ezio Auditore', 'console' : 'PS4 and Xbox', 'numberofGames' : '10', 'genre' : 'Adventure/Stealth'})"
"db.videogames.insert({'videogame' : 'Prince of Persia', 'MainCharacter' : 'Prince', 'console' : 'PS4, Xbox and Nintendo', 'numberofGames' : '6', 'genre' : 'Action-Adventure'})".

Don't use the double quotes when entering. 

Now open up another terminal and navigate to the nodetest2 folder and then enter "npm start"
Go to your localhost3000 and you should see my restfull web service now. You can click on the individual videogames 
in the table to list all their information in the block to the right. This is done by using the the id generated by mongo to retrieve the information of the videogame and then using another function tht stores all the videogame ids in an area. Once you click that specfic videogames information is retrieved and displayed in the block. 
You can also type in your localhost and then use the extension /users/videogames to see all the videogames and all their information on one page. 

