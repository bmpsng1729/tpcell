const Csignin = () => {
   return (
      <>
         <div className="container flex flex-col align-middle justify-center ">
            <h1>Coordinator Signin</h1>
            <div>
               <label> coordinator Username</label>
               <input type="text" placeholder="eg-cse_roll" required />
            </div>

            <div>
               <label> college Email</label>
               <input type="email" placeholder="eg-cse_roll" required />
            </div>

            <div>
               <label> password</label>
               <input placeholder="enter Password" required />
            </div>

            <button> Singin</button>


         </div>

      </>
   );
}

export default Csignin;