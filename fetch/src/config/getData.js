import fetch from '@/config/fetch'
console.log(2)
export const cityGuess = () => fetch('/v1/cities', {
  type: 'guess'
})
