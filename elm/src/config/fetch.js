export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase()
  if (type === 'GET') {
    console.log('get方法')
    setTimeout(function () {
      console.log(200, new Date())
      resolve(200)
    }, 200)
  }
  console.log('运行到async')
  try {
    const response = await fetch(url)
    return response
  } catch (err) {
    console.log(err)
  }
}
