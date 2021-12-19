import { Commands, World } from 'mojang-minecraft'

export class commandError {
  constructor({ message, player, command }) {
    this.command = command
    this.message = message;
    this.player = player;
    return this.sendErrorMessage();
  }
  
  sendErrorMessage() {
    const name = this.player.nameTag;
    const command = `tellraw "${name}" ${JSON.stringify({ rawtext: [ { text: this.message } ] })}`
    Commands.run(command, World.getDimension('overworld'))
    
    return new Error(`this.message at command: ${this.command.name}`)
  }
}