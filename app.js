let mouseCursor = document.querySelector(".cursor");
let telescopeElement = document.querySelector(".telescope");
let telescopeWidth = 150 + "px";


window.addEventListener("mousemove", cursor);

function cursor(e)
{
    let x = e.pageX + "px";
    let y = e.pageY + "px";
    mouseCursor.style.cssText = "clip-path: circle(" + telescopeWidth + " at " + x + " " + y + ");";
    telescopeElement.style.top = y;
    telescopeElement.style.left = x;
};

let letters = ["H", "E", "L", "L", "O"];
let counterL = 0;
let letterLeft, letterTop, letterDelay;

function lettersDisplay()
{
    for (letter of letters)
    {
        do
        {
            letterLeft = Math.floor(Math.random()*window.innerWidth);
            letterTop = Math.floor(Math.random()*window.innerHeight);
        }
        while (letterLeft >= (window.innerWidth - 10) || letterLeft <= 0 || letterTop >= (window.innerHeight/2) || letterTop <= 0)
        
        let newLetter = document.createElement("div");
        newLetter.setAttribute("class", "letter");
        newLetter.innerHTML = letters[counterL];
        counterL++;
        newLetter.innerHTML += counterL;

        letterDelay = Math.floor(Math.random()*3);
        newLetter.style.cssText = "animation-delay: " + letterDelay + "s";

        newLetter.style.top = letterTop + "px";
        newLetter.style.left = letterLeft + "px";

        mouseCursor.appendChild(newLetter);
    }

};

let starLeft, starTop;
let starWidth;

function starsDisplay()
{
    for (i = 0; i < 20; i++)
    {
        starLeft = Math.floor(Math.random()*window.innerWidth);
        starTop = Math.floor(Math.random()*window.innerHeight);
        do
        {
            starWidth = Math.floor(Math.random()*4);
        } 
        while (starWidth <= 0)

        let newstar = document.createElement("div");
        newstar.setAttribute("class", "star");

        newstar.style.top = starTop + "px";
        newstar.style.left = starLeft + "px";
        newstar.style.animationDelay = starWidth + "s";

        newstar.style.width = starWidth + "px";
        newstar.style.height = starWidth + "px";

        mouseCursor.appendChild(newstar);
    }

};

lettersDisplay();
starsDisplay();
