//ARRAYS
const BunchOfArrays = (props) => {

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
    console.log(props)
 
return (
    <div>
      <p>
        {t.map((num => (
            <li key={num}>{num}</li>
        
        )))}
        {t2.map((num => (
            <li key={num}>{num}</li>
        
        )))}
        {c.map((num => (
            <li key={num}>{num}</li>
        
        )))}
        {m1.map((num => (
            <li key={num}>{num}</li>
        
        )))}
        {d.map((num => (
            <li key={num}>{num}</li>
        
        )))}
      </p>
    </div>
)
}

export default BunchOfArrays