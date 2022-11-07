export function helloWorld() {
  const message = 'Hello World from my example modern npm package!'
  return message
}

export function goodBye() {
  const message = 'Goodbye from my example modern npm package!'
  return message
}

export function greeting() {
  console.log('hello world')
}

export default {
  helloWorld,
  goodBye,
  greeting,
}
