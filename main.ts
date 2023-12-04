const HexColor: (number | string)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const limitedColor: (number | string)[] = ["CD5C5C", "40E0D0", "DE3163", "6495ED"]

const HexElement = document.getElementById("Hex") as HTMLHeadingElement
const limitedElement = document.getElementById("limited") as HTMLHeadingElement

const backgroundName = document.getElementById("backgroundName") as HTMLDivElement
const backgroundColor = document.getElementById("backgroundColor") as HTMLDivElement

function HandlerClick(ColorType: (number | string)[], repeatValue: number): void {
    const ClickButton = document.getElementById("clickButton") as HTMLButtonElement
    ClickButton.onclick = () => {
        function ColorLetters() {
            let result: string = ""
            if (repeatValue === 6) {
                for (let i = 1; i <= repeatValue; i++) {
                    result += `${ColorType[Math.floor(Math.random() * ColorType.length)]}`
                }
            }
            else {
                result = `${ColorType[Math.floor(Math.random() * ColorType.length)]}`
            }
            return result
        }
        const newBackgroundColor = ColorLetters()
        backgroundName.innerHTML = (`<p>Background Color :</p><p>#${newBackgroundColor}</p>`)
        backgroundColor.style.cssText = (`background-color:#${newBackgroundColor}`)
    }
}

HexElement.onclick = () => HandlerClick(HexColor, 6)
limitedElement.onclick = () => HandlerClick(limitedColor, 0)