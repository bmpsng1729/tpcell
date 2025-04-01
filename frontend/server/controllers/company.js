const company = require("../models/Company");


exports.registerCompany = async (req, res) => {
    try {
        const email = req.user.email;
        //take all the data from the company
        const { name, baseSalary, logo, ctc,visitingSince } = req.body;

        // treat company name as a primary key
        // validate the data
        if (!name || !baseSalary || !logo || !ctc) {
            return res.status(400).json({
                sucess: false,
                message: "Please fill the all required details",

            });
        }

        // check if the accountType is either rectruiter or admin/coordinator-done using middleware

        // check if company already exist
        const compDetails =await company.findOne({name:name});
            // validate the data
            if(compDetails){
                return res.status(400).json({
                    sucesss:false,
                    message:"company is already registered or visited in previous years",
                })
            }// upload the image to the cloudinary
            
            // now create the entry into the db
            const regCompany= await company.create(
                {
                    name:name,
                    visitingSince:visitingSince,
                    logo:"cloudinary uploaded company logo string",
                    ctc:ctc,
                    baseSalary:baseSalary
                }
            )

// send a sucessfull mail

      // return sucessfull message
        return res.status(200).json({
            message:"Dear customer,company Registration Successfull",
            sucess:true,
        })
    }
    catch (error) {
        return res.status(400).json({
            message:"company registration is unsucessfull",
            sucess:false,
        });
    }
}
// handler to delete a company
exports.deleteCompany=async(req,res)=>{
     try{
         //authenticate  the user-user must be an admin or coordinator
         //try to implement are you sure want to delete the company
         // also delete the reviews of this company
         //
     }
     catch(err){
        console.log("there is an error in deleting the company");
        return res.status(400).json({
            message:"there is problem in deleting the company ",
            success:false,
        });
     }
};

exports.showAllVisitedCompany=async(req,res)=>{
    try{
   // take data from the req body
//    const {year}=req.body;
//    if(!year){
//     console.log("there is an erro while finding all the companies o a particular year");
//     return res.status(400).json({
//         message:"user has not provided the year ",
//         success:false,

//     });

   //}
    const allCompany=await company.find({});
    if(!allCompany){
        // yaha se start karna hai-register the company
        console.log("there is an error in db error while finding all the companies");
        
    }
    // validate 
    console.log(allCompany);

    // now show the all company 
    // send a successull result
    return res.status(200).json({
        message:"we have successfully got the data of the company",
        success:true,
        allCompany:allCompany,
    });
    } catch(err){
      console.log("there is an error in finding all companies");
      return res.status(200).json({
        message:"there is an server error while finding the companies",
        success:false,
      });
    }
 
}