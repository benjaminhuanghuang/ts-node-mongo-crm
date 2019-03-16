export default class Messager {
  port: number;

  constructor(port) {
    this.port = port;
  }

  messagePrint(){
    return `Node is running on port ${this.port}`;
  }
}