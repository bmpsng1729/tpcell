  import nitlogo from "./images/nit logo.png";
  import { FaGripLines } from "react-icons/fa";
 const Navbar=()=>{
 return(
    <>
       <nav class="flex items-center justify-between  bg-blue-950 text-white shadow-lg">
    {/* <!-- Left Section --> */}
    <div class="flex items-center space-x-4 ">
        {/* <div class="text-2xl font-bold" ><FaGripLines/></div>  */}
        <div class="flex items-center space-x-2 gap-3">
            <img src={nitlogo} alt="Logo" class="h-20 w-20  rounded-xl"/>
            <div class="text-lg font-semibold">PLACEMENT CELL, NIT JAMSHEDPUR</div>
        </div>
    </div>
    
    {/* <!-- Right Section --> */}
    <div class="flex space-x-6 text-lg font-medium mx-2">
        <button class="hover:text-yellow-400 hover:cursor-pointer bg-transparent border-none focus:outline-none">Home</button>
        <button class="hover:text-yellow-400 hover:cursor-pointer bg-transparent border-none focus:outline-none">Why Recruit</button>
        <button class="hover:text-yellow-400 hover:cursor-pointer bg-transparent border-none focus:outline-none">Director's Message</button>
        <button class="hover:text-yellow-400 hover:cursor-pointer bg-transparent border-none focus:outline-none">Contact Us</button>
    </div>
</nav>

    </>
 )
 }
 export default Navbar;