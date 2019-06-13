var ws = new WebSocket('ws://192.168.4.1:3000')

ws.onopen = () => console.log('💻️: Connected')
ws.onclose = () => console.log('💻️: Disconnected')
ws.onmessage = msg => updateTwoVariables(msg.data)

var line_coordinates = []

const updateTwoVariables = val => {
  let dot = document.getElementById('my_dot').style
  let inputs = val.split(' ')
  let calc = num => Number((num / 1020) * 100).toFixed(2)
  let pin_0 = inputs[0]
  let pin_1 = inputs[1]
  dot.left = `${calc(pin_0)}%`
  dot.top = `${calc(pin_1)}%`

  let new_coordinate = { x: calc(pin_0), y: calc(pin_1) }

  let previous_coordinate = line_coordinates.length ? line_coordinates[line_coordinates.length - 1] : null

  if (previous_coordinate !== null) {
    if (previous_coordinate.x !== new_coordinate.x || previous_coordinate.y !== new_coordinate.y) {
      line_coordinates.push(new_coordinate)
    }
  } else if (previous_coordinate === null) {
    line_coordinates.push(new_coordinate)
  }
}
let stroke_color = '#000'
function setup() {
  createCanvas(windowWidth, windowHeight)
}
function draw() {
  if (line_coordinates.length >= 2) {
    line_coordinates.forEach((coordinate, index) => {
      if (coordinate.x && coordinate.y) {
        let previous = index === 0 ? line_coordinates[index] : line_coordinates[index - 1]
        line(
          width * (previous.x / 100),
          height * (previous.y / 100),
          width * (coordinate.x / 100),
          height * (coordinate.y / 100)
        )
        stroke(stroke_color)
        strokeWeight(4)
      }
    })
  }
}
const changeColor = color => (stroke_color = color)
const clearCanvas = () => {
  console.log('Canvas Cleared! ✏️')
  line_coordinates = []
  clear()
}
