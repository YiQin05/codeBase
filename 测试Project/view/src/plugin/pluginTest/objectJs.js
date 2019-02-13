var Vehicle = function () {
  this.price = 1000
  this.count = function () {
    console.log(this.price * 2)
  }
}

export {Vehicle}
