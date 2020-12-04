var Input = format('upper').getElementsByTagName('input')[0];//button;
    var Span = format('main').getElementsByTagName('span')[0];//Block:span;
    var Alien = format('main').getElementsByTagName('img')[0];//The falling image;
    var Content = format('main').getElementsByTagName('div')[1];
    var Image = ['alien1.png', 'alien2.png', 'alien3.png'];
    var Width = parseInt(getStyle(Content, 'width'));
    var Height = parseInt(getStyle(Content, 'height')) - 50;
    var Speed = 1;
    var Ground = true;
    Span.num = 0;
    function auto () {
            var random = Math.round(Math.random() * (Image.length - 1));
            var position = Math.round(Math.random() * (Width - 50));
            Alien.src = Image[random];
            Alien.style.left = position + 'px';
            doMove(Alien, 'top', Speed, Height, function() {
                if (Ground == true) {
                    Alien.style.top = '0px';
                    Span.num--;
                    Span.innerHTML = Span.num;
                    if (Span.num < 0) {
                        Input.value = 'Start';
                        Input.disabled = false;
                        alert('Game is over');
                        Span.num = 0;
                        Span.innerHTML = Span.num;
                        Alien.style.display = "none";
                    } else if (Span.num > 10){
                        Input.value = 'Start';
                        Input.disabled = false;
                        alert('You win');
                        Span.num = 0;
                        Span.innerHTML = Span.num;
                        Alien.style.display = "none";
                    }
                    else {
                        auto();
                    }
                }
            });
        }
    function run() {
        Input.value = '.....';
        Input.disabled = true;
        Alien.style.display = 'block';
        auto();
    }
    Alien.onclick = function() {
        Span.num++;
        Span.innerHTML = Span.num;
        Speed = Speed+0.2*Math.LOG10E;
        Alien.style.top = '0px';
        auto();
    }