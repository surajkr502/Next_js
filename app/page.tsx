// export default function HomePage(){
//   return(
//     <div>
//       <h1>HomePage</h1>
//     </div>
//   )
// }


import Link from "next/link";
export default function HomePage(){
  return(
    <div style={{padding:'20px'}}>
      <h1>App Rounter Next.js 16</h1>
      <nav style={{
        display:'flex', 
        gap:'20px',
        marginTop:'20px',
      }}>
        <Link href="/services">Services</Link>
        <Link href="/About">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      
    </div>
  )
}
