import { Heading } from '@/components/components'
import { Counter } from '@/components/client-components'

export default function Home(){
  console.log('hey')
  return(
    <div>
      <Heading>Hello World</Heading>
      <Counter/>
    </div>
  )
}