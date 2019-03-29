// List of features to build:
        // 1) Have JS draw our world
        // 2)Move PacMan up and down

        var world = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,1,2],
            [2,1,2,3,1,1,2,1,1,1,1,1,1,2,1,1,3,2,1,2],
            [2,1,2,1,2,1,1,1,1,2,2,1,1,1,1,2,1,2,1,2],
            [2,1,2,1,2,2,2,2,1,2,2,1,2,2,2,2,1,2,1,2],
            [2,1,2,1,2,2,3,1,1,2,2,1,1,3,2,2,1,2,1,2],
            [2,1,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,1,2],
            [2,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,2],
            [2,1,2,2,1,2,1,1,1,1,1,1,1,1,2,1,2,2,1,2],
            [2,1,2,2,1,2,1,1,1,1,1,1,1,1,2,1,2,2,1,2],
            [2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2],
            [2,1,2,2,1,2,1,2,2,2,2,2,2,1,2,1,2,2,1,2],
            [2,1,2,2,1,2,1,2,2,2,2,2,2,1,2,1,2,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,1,2,1,2,1,2,2,2,2,1,2,1,2,1,2,2,2],
            [2,3,2,1,2,1,2,3,1,1,1,1,3,2,1,2,1,2,3,2],
            [2,1,2,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,1,2],
            [2,1,2,2,1,2,2,1,2,2,2,2,1,2,2,1,2,2,1,2],
            [2,1,1,1,1,2,2,1,1,1,1,1,1,2,2,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        ]
        var worldDict = {
            0: "blank",
            1: "coin",
            2: "brick",
            3: "cherry"
        }



        function drawWorld(){
            var output = '';
            for(var i=0;i<world.length;i++){
                output += "<div class='row'>"
                for(var j=0;j<world[i].length;j++){
                    output += "<div class='" + worldDict[world[i][j]] + "'></div>";
                }
                output += "</div>"
            }
            document.getElementById('world').innerHTML = output;
            
        }

        var pacman = {
            x: 1,
            y: 1
        } 
        var mrsPacman = {
            x: 1,
            y: world.length - 2
        }

        var ghost = {
            x: world[world.length-2].length - 2,
            y: world.length-2
        }

        var score = 0;
        var life = 3;

        var orient = 0;

        // console.log(pacman);

        function drawPacMan(orient){
            document.getElementById('pacman').style.top = pacman.y * 20 + 'px';
            document.getElementById('pacman').style.left = pacman.x * 20 + 'px';
            document.getElementById('pacman').style.transform = "rotate(" + orient + "deg)"; 

            document.getElementById('mrspacman').style.top = mrsPacman.y * 20 + 'px';
            document.getElementById('mrspacman').style.left = mrsPacman.x * 20 + 'px';
            document.getElementById('mrspacman').style.transform = "rotate(" + orient + "deg)"; 
            // var transform = document.getElementById('pacman');
            // console.log(transform); 
            // console.log(orient); 
        }

        function drawGhost(){
            document.getElementById('ghost').style.top = ghost.y * 20 + 'px';
            document.getElementById('ghost').style.left = ghost.x * 20 + 'px';
            var ghostElem = document.getElementById('ghost');
            // console.log(ghostElem);
            // console.log(ghost.x);
            // console.log(ghost.y);
        }

        function drawScore(score,life){
            if(life < 0){
                life = 'NONE'
            }
            document.getElementById('scorebox').innerHTML = '<h2>SCORE</h2>' + score + ' points <h2>LIVES</h2>' + life + ' remaining';
        }

        function moveGhost(){
            var deltaY = Math.random() * 1;
            var deltaX = Math.random() * 1;
            var dir = Math.random() * 1; //randomly choose which direction to move
            if(dir > 0.5){
                if(deltaY > 0.5 && world[ghost.y+1][ghost.x] != 2){
                    ghost.y++;
                }
                else if(deltaY <= 0.5 && world[ghost.y-1][ghost.x] != 2){
                    ghost.y--;
                }
            }
            else if(dir <= 0.5){
                if(deltaX > 0.5 && world[ghost.y][ghost.x+1] != 2){
                    ghost.x++;
                }
                else if(deltaX <= 0.5 && world[ghost.y][ghost.x-1] != 2){
                    ghost.x--;
                }
            }
            console.log(deltaY,deltaX);
        }

        document.onkeydown = function(e){
            if(pacman.x > 0){            
                if(e.keyCode == 37){ //left
                    if (world[pacman.y][pacman.x - 1] != 2){
                        pacman.x--;
                    }
                    if (world[mrsPacman.y][mrsPacman.x - 1] != 2){
                        mrsPacman.x--;
                    }
                }
            }
            if(pacman.x < world[pacman.y].length - 1){
                if(e.keyCode == 39){ //right
                    if(world[pacman.y][pacman.x + 1] != 2){
                        pacman.x++;
                    }
                    if (world[mrsPacman.y][mrsPacman.x + 1] != 2){
                        mrsPacman.x++;
                    }
                        orient = 0;
                }
            }
            if(pacman.y < world.length - 1){
                if(e.keyCode == 40){ //down
                    if(world[pacman.y + 1][pacman.x] != 2){
                        pacman.y++;
                    }
                    if (world[mrsPacman.y + 1][mrsPacman.x] != 2){
                        mrsPacman.y++;
                    }
                        orient = 90;
                }
            }
            if(pacman.y > 0){
                if(e.keyCode == 38){ //up
                    if(world[pacman.y - 1][pacman.x] != 2){
                        pacman.y--;
                    }
                    if (world[mrsPacman.y - 1][mrsPacman.x] != 2){
                        mrsPacman.y--;
                    }
                        orient = 270;
                }
            }
        
            if(world[pacman.y][pacman.x] == 1){
                score += 1;
            }
            if(world[pacman.y][pacman.x] == 3){
                score += 10;
            }
            if(world[mrsPacman.y][mrsPacman.x] == 1){
                score += 1;
            }
            if(world[mrsPacman.y][mrsPacman.x] == 3){
                score += 10;
            }


            if(pacman.x == ghost.x && pacman.y == ghost.y){
                life--;
            }
            else if(mrsPacman.x == ghost.x && mrsPacman.y == ghost.y){
                life--;
            }

            if(life < 0){
                alert("YOU RAN OUT OF LIVES");
                document.location.reload;
            }
            // console.log(score);
            // console.log(orient);

            world[pacman.y][pacman.x] = 0;
            world[mrsPacman.y][mrsPacman.x] = 0;
            drawPacMan(orient);
            drawWorld(); //redraw world on keydown
            drawScore(score,life);
        }

        function gameLoop(){
            console.log('looped');

            drawPacMan(orient);
            moveGhost();
            drawGhost();
            drawWorld();
            drawScore(score,life);

            setTimeout(gameLoop, 250);
        }
        gameLoop();