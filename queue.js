class Queue {
  elements
  constructor(){
    this.elements = []
  }
  size(){
    return this.elements.length
  }
  add(item){
    return this.elements.push(item)
  }
  peek(){
    return this.elements[0]
  }
  dequeue(){
    let tamanho = this.elements.length
    return this.elements = this.elements.slice(1,tamanho)
  }
}

module.exports = Queue