var Head = document.getElementById('head');
var Main = document.getElementById('main');
var Input = Head.getElementsByTagName('input')[0];//button;
var Span = Main.getElementsByTagName('span')[0];//Block:span;
var Alien = Main.getElementsByTagName('img')[0];//The falling image;
var Content = Main.getElementsByTagName('div')[1];
var Image = ['alien1.png', 'alien2.png', 'alien3.png'];
var Speed = 1;
Span.num = 0;
function run() {
    Input.value = 'In Progress';
    Input.disabled = false;
    var Width = ParseInt(getStyle(Content, 'width'));
    var Height = ParseInt(getStyle(Content, 'height'));
}