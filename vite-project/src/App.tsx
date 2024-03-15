import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardHeader } from './components/ui/card'

function App() {
  const [count, setCount] = useState(0)
  const [img, setImg] = useState('')
  const secret = 124124


  const url = 'https://picsum.photos/200/300'

  useEffect(() => {
    fetch(url).then((data) => setImg(data.url))
  }, [count])




  const priv = () => {
    const a = 'This is some blabla ';
    const b = ' private code ';
    const c = ' that should not be in the bundle';
    const combined = a + b + c;
    return <span>{combined}</span>;
  }


  return (
    <>
      <h1>{priv()}</h1>
      <div className="p-10 text-xl"><h2 onClick={() => { setCount(count + secret) }} className='cursor-pointer'>{count}</h2></div>
      <div className="grid place-content-center w-full "><img src={img}></img></div>
      <h1 className="text-2xl font-bold underline pt-3">
        Hello world!
      </h1>

      <Card className='m-10 p-10'>
        <CardHeader>Header</CardHeader>
        <Button>Test</Button></Card>
    </>
  )
}

export default App
