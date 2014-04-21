//Rescue Tharin
/*
move down x2
move right
move up x2
move right x2
move down
attack
*/
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the mushroom
/*
move up
right
left
up
attack
*/
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink me 
/*
right
attack
right
down
up
right
attack*/
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the guards
/*
right
say hello
move left x2
say attack
right
say follow
right x2
up
say attack
attack
say follow
move right x2
*/
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Attack!");
this.attackNearbyEnemy();
this.attackNearbyEnemy();
this.attackNearbyEnemy();
this.say("Follow me"); 
this.moveRight();
this.moveRight();
this.moveRight();

//It's a trap
/*
down x2
say hello
up x2
say attack
*/
this.moveDown();
this.moveDown();
this.say("Hello");
this.moveUp();
this.moveUp();
this.say("Attack!");

//Taunt
/*
say something x4
*/
this.say("Hey ogre");
this.say("Hello");
this.say("dummy");
this.say("over here");

//Cowardly taunt
/*
move to 70, 45
say something
move to 70, 10
*/
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
this.moveXY(70, 45);
this.say("Hello");
this.moveXY(70, 10); 

//Commanding followers
/*
move to 75, 63
say follow me
move to 60, 43
say attack
*/
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow me");
this.moveXY(60,43);
this.say("Attack!");

//Mobile Artillery

/*
move to 51, 36
attack 68, 54
attack 62, 47
move to 48, 42
attack 49, 64
attack 7, 54
*/
this.moveXY(51, 36);
this.attackXY(68, 54);
this.attackXY(62, 47);
this.moveXY(48, 42);
this.attackXY(49, 64);
this.attackXY(47, 54);