// Routing 
// export default function HomePage(){
//   return(
//     <div>
//       <h1>HomePage</h1>
//     </div>
//   )
// }

import Button from "@/components/button";



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


// export default function HomePage(){
//   return(
//     <> 
//     {/* this is fragment */}
//     <div>
//       <h1 className="text-7xl">Home Page</h1>
//        <div>
//       <h1 className="text-5xl">Home Page2</h1>
//     </div>

//     </div>
//     <div className="bg-red-500 w-md">
//       <h1 className="text-7xl">Home Page</h1>
//     </div>
    
//     <div className="bg-green-500 w-md">
//       <h1 className="text-7xl">Home Page</h1>
//     </div>
//     <div className="bg-yellow-500 w-auto flex">
//       <h1 className="text-7xl">HOme Page</h1>
//       </div>

//     <div className="bg-yellow-500 w-auto flex">
//       <h1 className="text-7xt">Home Page</h1>

//     </div>
//     <div className="bg-yellow-500 w-auto flex">

//     </div>
//     <div className="bg-yellow-500 w-auto flex">
//       <div className="h-10 w-10 bg-red-500">1</div>
//       <div className="h-10 w-10 bg-green-500">2</div>
//        <div className="h-10 w-10 bg-blue-500">3</div>

//     </div>
//      <div className="bg-yellow-500 w-auto flex justify-center">
//       <div className="h-10 w-10 bg-red-500">1</div>
//       <div className="h-10 w-10 bg-green-500">2</div>
//        <div className="h-10 w-10 bg-blue-500">3</div>

//     </div>
//      <div className="bg-yellow-500 w-auto flex justify-center gap-2">
//       <div className="h-10 w-10 bg-red-500">1</div>
//       <div className="h-10 w-10 bg-green-500">2</div>
//        <div className="h-10 w-10 bg-blue-500">3</div>

//     </div>
//     <div className="bg-green-500 w-auto flex flex-row-reverse">
//       <div className="h-10 w-10 bg-red-500">1</div>
//        <div className="h-10 w-10 bg-blue-500">2</div>
//         <div className="h-10 w-10 bg-green-500">3</div>
//          <div className="h-10 w-10 bg-black-500">4</div>

//     </div>
//     <div className="bg-yellow-500 w-500 w-auto flex flex-col">
//       <div className="h-10 w-10 bg-red-600">1</div>
//        <div className="h-10 w-10 bg-green-500">2</div>
//         <div className="h-10 w-10 bg-yellow-300">3</div>

//     </div>
//     <div className="bg-green-500 w-500">
      
//     </div>
//     <div className="grid grid-cols-2 gap-x-8 gap-y-4">
//       <div className="h-10 w-10 bg-red-500">01</div>
//       <div>02</div>
//       <div>03</div>
//       <div>04</div>




//     </div>

//    </>
    
//   )
// }

// justify-between 
export default function HomePage(){
  return (
    <div>
      <section>
<h2 className="text-3xl font-bold md-4">
  Justify-between
</h2>
    <div className="bg-yellow-200 flex justify-center gap-2 p-4">
      <div className="h-12 w-12 bg-red-500">1</div>
      <div className="h-12 w-12 bg-yellow-500">2</div>
      <div className="h-12 w-12 bg-blue-500">3</div>

    </div>
  

</section>

{/* Justify-evenly  */}
<section>
<h1 className="text-3xl font-bold mb-4">
  Justify-evenly
</h1>
<div>
  <div className="bg-yellow-200 flex justify-evenly gap-2 p-4">
      <div className="h-12 w-12 bg-red-500">1</div>
      <div className="h-12 w-12 bg-yellow-500">2</div>
      <div className="h-12 w-12 bg-blue-500">3</div>

    </div>
</div>
</section>

{/* items-start  */}
<section>
<h1 className="text-3xl font-bold mb-4">
  Items Start
</h1>
<div>
  <div className="bg-yellow-200 flex item-start h-40 gap-2 p-4">
      <div className="h-12 w-12 bg-red-500">1</div>
      <div className="h-12 w-12 bg-yellow-500">2</div>
      <div className="h-12 w-12 bg-blue-500">3</div>

    </div>
</div>
</section>

{/* items-end  */}
<section>
<h1 className="text-3xl font-bold mb-4">
  Items end
</h1>
<div>
  <div className="bg-yellow-200 flex items-end h-40 gap-2 p-4">
      <div className="h-12 w-12 bg-red-500">1</div>
      <div className="h-22 w-12 bg-yellow-500">2</div>
      <div className="h-35 w-12 bg-blue-500">3</div>

    </div>
</div>
</section>


{/* items-center  */}
<section>
<h1 className="text-3xl font-bold mb-4">
  Items center
</h1>
<div>
  <div className="bg-yellow-200 flex items-center h-40 gap-2 p-4">
      <div className="h-12 w-12 bg-red-500">1</div>
      <div className="h-20 w-12 bg-yellow-500">2</div>
      <div className="h-32 w-12 bg-blue-500">3</div>

    </div>
</div>
</section>


{/* Real Navbar complete  */}
<section>
<h1 className="text-3xl font-bold mb-4">
  Real Navbar complete
</h1>
<div className="flex justify-between items-centre bg-gray-900 text-white p-4">
  Logo
  

<div className="flex gap-6">
  <span>Home</span>
  <span>Contact</span>
  <span>Product</span>
  <span>Courses</span>
</div>
</div>

</section>

{/* Basic of 3 cols grid  */}
<section>
  <h2 className="text-3xl font-bold mb-4">
    Basic Grid
  </h2>
  <div className="grid grid-cols-3 gap-4">
    <div className="bg-red-500 p-6 text-white">1</div>
    <div className="bg-blue-500 p-6 text-white">2</div>
    <div className="bg-yellow-500 p-6 text-white">3</div>
  </div>
</section>


{/* Column Span  */}
<section>
  <h2 className="text-3xl font-bold mb-4">
    Column Span
  </h2>
  <div className="grid grid-cols-3 gap-4">
    <div className="bg-red-500 p-6 text-white col-span-2">col-span-2</div>
    <div className="bg-blue-500 p-6 text-green">Normal</div>
    <div className="bg-yellow-500 p-6 text-blue">Normal</div>
    <div className="bg-green-500 p-6 text-yellow">Normal</div>
  </div>
</section>
<section>
  row span
  <div className="grid grid-cols-3 gap-4">
    <div className="bg-red-500 p-6 text-white row-span-2">row-span-2</div>
    <div className="bg-blue-500 p-6 text-green">Normal</div>
    <div className="bg-yellow-500 p-6 text-blue">Normal</div>
    <div className="bg-green-500 p-6 text-yellow">Normal</div>
  </div>
</section>


<section>
  {/* button component  */}

  <h2 className="text-3xl font-bold mb-4">
    Button Component
  </h2>
  <div>
    <button><Button text="Login" />
    <Button text="Register" color="bg-green-500"></Button></button>
  </div>
</section>
    </div>
  )

}
  




