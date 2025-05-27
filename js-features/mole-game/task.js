

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let kills = 0;
let miss = 0;

function text(){
        kills = 0;
        miss = 0;
        dead.textContent = kills;
        lost.textContent = miss;
    }

getHole = index => document.getElementById(`hole${index}`);
    for ( i = 1; i < 10; i++ ) {
        let hole = getHole(i);
        hole.addEventListener('click', function() {
            if ( hole.classList.contains('hole_has-mole')){
                kills++;
                dead.textContent = kills;
            } else {
                miss++;
                lost.textContent = miss;
            }
            if (kills == 10) {
                alert('Победа!')
                text();
            } else if (miss == 5) {
                alert('Вы проиграли!')
                text();
            }
            
        });
    }