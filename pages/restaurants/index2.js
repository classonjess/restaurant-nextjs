import Head from "next/head"
import styles from "../../styles/Home.module.css"
import Link from "next/Link"


export default function Home() {
  const restaurants = [
    {name:'Shelter'},
    {name: 'Reds'},
    {name:'Tavern'}
  ]
  return (
  <div>
  <h1> Restaurant List</h1>
   {restaurants.map( item => {
     return <div>
       <Link as={"/restaurants/"+item.name} href='restaurants/[restaurant]'>
       <a>{item.name}</a>
       </Link>
     </div>
   })}
   </div>
  )
}