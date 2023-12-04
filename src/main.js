"use strict";
const HexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const limitedColor = ["CD5C5C", "40E0D0", "DE3163", "6495ED"];
const HexElement = document.getElementById("Hex");
const limitedElement = document.getElementById("limited");
const backgroundName = document.getElementById("backgroundName");
const backgroundColor = document.getElementById("backgroundColor");
function HandlerClick(ColorType, repeatValue) {
    const ClickButton = document.getElementById("clickButton");
    ClickButton.onclick = () => {
        function ColorLetters() {
            let result = "";
            if (repeatValue === 6) {
                for (let i = 1; i <= repeatValue; i++) {
                    result += `${ColorType[Math.floor(Math.random() * ColorType.length)]}`;
                }
            }
            else {
                result = `${ColorType[Math.floor(Math.random() * ColorType.length)]}`;
            }
            return result;
        }
        const newBackgroundColor = ColorLetters();
        backgroundName.innerHTML = (`<p>Background Color :</p><p>#${newBackgroundColor}</p>`);
        backgroundColor.style.cssText = (`background-color:#${newBackgroundColor}`);
    };
}
HexElement.onclick = () => HandlerClick(HexColor, 6);
limitedElement.onclick = () => HandlerClick(limitedColor, 0);
