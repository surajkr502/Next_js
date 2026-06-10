// Routing 
// export default function HomePage(){
//   return(
//     <div>
//       <h1>HomePage</h1>
//     </div>
//   )
// }

import Card from "@/componets/card";
import DashboardLayout from "./dashboard/layout";
import { recvTaskMessageInWorker } from "next/dist/build/swc/generated-native";
import TaskList from "@/componets/TaskList";
import { title } from "process";
import Features from "@/componets/features";
import Form from "@/componets/form";
import Hero from "@/componets/hero";
import Navbar from "./componets/Navbar";
import Nav from "@/componets/nav";


// (removed import of missing component - using native buttons below)



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
  const tasks = [
    {
      id:1,
      title:'Learn Next.js',
      completed:true,
    },
    {
    id:2,
    title:"Learn Tailwind CSS",
    completed:true,
  },
  {
    id:3,
    title:"Build Task Manager App",
    completed:false,
  },
  ];
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
  <div className="flex gap-4">
    <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
    <button className="px-4 py-2 bg-green-500 text-white rounded">Register</button>
  </div>
</section>
<section>
  {/*dashboard layout  */}
  <DashboardLayout>
    <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
    <p>Welcome to my dashboard!</p>
  </DashboardLayout>
</section>

<section>
  {/* card component  */}
  <h2 className="text-3xl font-bold mb-4">Card Component</h2>
  <Card title="Next.js"
   description="React Framework." />
</section>
<section>
  {/* TaskList  */}
  <TaskList tasks={tasks} />

</section>
<section>
  {/* Features  */}
  <Features />
</section>
  <section className="p-6">
      {/* Form  */}
      <Form heading="Contact Us" buttonText="Submit" />
</section>
<section>
  <Hero title="Welcome to Our Website" subtitle="We are glad to have you here." />
</section>
<section>
  {/* Nav component */}
  <h2 className="text-3xl font-bold mb-4">Nav Component</h2>
  <Nav logo="MyLogo" />
</section>

    </div>

          );
        };

