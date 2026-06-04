// Routing 
// export default function HomePage(){
//   return(
//     <div>
//       <h1>HomePage</h1>
//     </div>
//   )
// }


// import Link from "next/link";
// export default function HomePage(){
//   return(
//     <div style={{padding:'20px'}}>
//       <h1>App Rounter Next.js 16</h1>
//       <nav style={{
//         display:'flex', 
//         gap:'20px',
//         marginTop:'20px',
//       }}>
//         <Link href="/services">Services</Link>
//         <Link href="/About">About</Link>
//         <Link href="/contact">Contact</Link>
//       </nav>
      
//     </div>
//   )
// }


export default function HomePage(){
  return(
    <> 
    {/* this is fragment */}
    <div>
      <h1 className="text-7xl">Home Page</h1>
       <div>
      <h1 className="text-5xl">Home Page2</h1>
    </div>

    </div>
    <div className="bg-red-500 w-md">
      <h1 className="text-7xl">Home Page</h1>
    </div>
    
    <div className="bg-green-500 w-md">
      <h1 className="text-7xl">Home Page</h1>
    </div>
    <div className="bg-yellow-500 w-auto flex">
      <h1 className="text-7xl">HOme Page</h1>
      </div>

    <div className="bg-yellow-500 w-auto flex">
      <h1 className="text-7xt">Home Page</h1>

    </div>
    <div className="bg-yellow-500 w-auto flex">

    </div>
    <div className="bg-yellow-500 w-auto flex">
      <div className="h-10 w-10 bg-red-500">1</div>
      <div className="h-10 w-10 bg-green-500">2</div>
       <div className="h-10 w-10 bg-blue-500">3</div>

    </div>
     <div className="bg-yellow-500 w-auto flex justify-center">
      <div className="h-10 w-10 bg-red-500">1</div>
      <div className="h-10 w-10 bg-green-500">2</div>
       <div className="h-10 w-10 bg-blue-500">3</div>

    </div>
     <div className="bg-yellow-500 w-auto flex justify-center gap-2">
      <div className="h-10 w-10 bg-red-500">1</div>
      <div className="h-10 w-10 bg-green-500">2</div>
       <div className="h-10 w-10 bg-blue-500">3</div>

    </div>
    <div className="bg-green-500 w-auto flex flex-row-reverse">
      <div className="h-10 w-10 bg-red-500">1</div>
       <div className="h-10 w-10 bg-blue-500">2</div>
        <div className="h-10 w-10 bg-green-500">3</div>
         <div className="h-10 w-10 bg-black-500">4</div>

    </div>
    <div className="bg-yellow-500 w-500 w-auto flex flex-col">
      <div className="h-10 w-10 bg-red-600">1</div>
       <div className="h-10 w-10 bg-green-500">2</div>
        <div className="h-10 w-10 bg-yellow-300">3</div>

    </div>
    <div className="bg-green-500 w-500">
      
    </div>
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
      <div className="h-10 w-10 bg-red-500">01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>




    </div>

   </>
    
  )
}