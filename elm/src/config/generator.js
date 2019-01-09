(function () {
  let iterato = (items) => {
    console.log(1245)
    console.log(items)
    let num = 0
    let iter = {
      index: 0,
      max: items.length,
      next: function () { // 返回调用结果
        num++
        console.log('num:' + num)
        return this.index === this.max ? {value: undefined, done: true} : {value: items[this.index++], done: false}
      }
    }
    console.log(num)
    return iter
  }
  let iter = iterato([1, 2, 3, 4])
  console.log('iter:')
  console.log(iter)
  let result = null
  console.log('``````iterator````````')
  do {
    result = iter.next()
    console.log('结果：')
    console.log(result)
  } while (!result.done)

  // generator
  function *generator (items) {
    let index = 0
    let max = items.length

    while (index < max) {
      yield items[index++]
    }
  }

  let gene = generator([1, 2, 3, 4])
  result = null
  console.log('``````````generator`````````')
  do {
    result = gene.next()
    console.log(result)
  } while (!result.done)

  let tick = (duration) => {
    return new Promise((resolve) => {
      setTimeout(function () {
        console.log(duration, new Date())
        resolve(duration)
      }, duration)
    })
  }

  function *generator1 () {
    var result = yield tick(2000)
    console.log('result = ', result)
    result = yield tick(4000)
    console.log('result = ', result)
    result = yield tick(3000)
    console.log('result = ', result)
  }

  let run = (generator, res) => {
    console.log(154465)
    console.log(res)
    var result = generator.next(res)
    if (result.done) return
    result.value.then((res) => {
      run(generator, res)
    })
  }

  run(generator1())
})()
