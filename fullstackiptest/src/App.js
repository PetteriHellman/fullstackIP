
import Hello from "./components/stringstuff"

//ARRAYS
const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

const c = [1, 2, 3]

const m1 = c.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

const d = [1, 2, 3, 4, 5]

const [first, second, ...rest] = d

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App