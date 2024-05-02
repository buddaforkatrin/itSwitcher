class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
  }
  onСlick() {
    console.log(
      `width: ${this.width}, height: ${this.height}, type: ${this.type}, color: ${this.color}`
    );
  }
}

const width = 5;
const height = 5;
const type = "button";
const color = "green";

let newButton = new Button(width, height, type, color);
newButton.onСlick();

function testButton(button) {
  if (
    typeof button.height === "number" &&
    typeof button.width === "number" &&
    typeof button.type === "string" &&
    typeof button.color === "string"
  ) {
    console.log("Your button is correct!");
    return;
  }
  if (typeof button.height !== "number") {
    console.log(
      `Your button has invalid type of height. Correct it to the number`
    );
  }
  if (typeof button.width !== "number") {
    console.log(
      `Your button has invalid type of width. Correct it to the number`
    );
  }
  if (typeof button.type !== "string") {
    console.log(`Your button has invalid type. Correct it to the string`);
  }
  if (typeof button.color !== "string") {
    console.log(
      `Your button has invalid type of color. Correct it to the string`
    );
  }
}

testButton(newButton);
