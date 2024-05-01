class Button {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.type = "Button";
    this.color = "green";
  }
  onclick() {
    console.log(
      `width: ${this.width}, height: ${this.height}, type: ${this.type}, color: ${this.color}`
    );
  }
}

const width = 5;
const height = 5;

let newButton = new Button(width, height);
newButton.onclick();

function testButton(button) {
  if (button.height === height && button.width === width) {
    console.log("the button is correct button");
    return;
  }
  console.log("ERROR: the button in NOT correct");
}

testButton(newButton);
