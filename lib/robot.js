'use strict';

// function Robot() {
//   this.bearing = "";
//   this.orient = function(currentDirection){
//     if (currentDirection)
//     this.bearing = currentDirection
//   }
// }

class Robot{
  constructor(){
    this.bearing = ""
    this.coordinates = []
  }
  orient(currentDirection){
    if (currentDirection === 'north' || currentDirection === 'south' || currentDirection === 'east' || currentDirection === 'west'){
    this.bearing = currentDirection
    } else{
    throw new Error('Invalid Robot Bearing')
    }
  }
  turnRight() {
    switch(this.bearing) {
    case 'north':
        this.bearing = 'east'
        break;
    case 'east':
        this.bearing = 'south'
        break;
    case 'south':
        this.bearing = 'west'
        break;
    case 'west':
        this.bearing = 'north'
        break;
    default:
        throw new Error('Invalid Robot Turn')
    }
  }
  turnLeft() {
    switch(this.bearing) {
    case 'north':
        this.bearing = 'west'
        break;
    case 'east':
        this.bearing = 'north'
        break;
    case 'south':
        this.bearing = 'east'
        break;
    case 'west':
        this.bearing = 'south'
        break;
    default:
        throw new Error('Invalid Robot Turn')
    }
  }
  at (x, y) {
    this.coordinates[0] = x
    this.coordinates[1] = y
  }
  advance(){
    switch(this.bearing) {
    case 'north':
        this.coordinates[1] += 1
        break;
    case 'east':
    this.coordinates[0] += 1
        break;
    case 'south':
    this.coordinates[1] -= 1
        break;
    case 'west':
    this.coordinates[0] -= 1
        break;
    default:
        throw new Error('Invalid Robot Move')
    }
  }
  instructions(command){
    let letters = command.split('')
    return letters.map((letter) => {
    switch(letter){
      case "L":
        this.turnLeft()
        return "turnLeft"
        break;
      case "R":
        this.turnRight()
        return "turnRight"
        break;
      case "A":
        this.advance()
        return "advance"
        break;
      default:
        throw new Error('Invalid Robot Command')
    }})

  }
  place(robDetails){
    this.at(robDetails.x, robDetails.y)
    this.orient(robDetails.direction)
  }

  evaluate(command){
    this.instructions(command)
  }
}
