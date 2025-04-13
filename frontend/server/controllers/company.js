const company = require("../models/Company");


exports.registerCompany = async (req, res) => {
    try {
        // const email = req.user.email;
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
      console.log("registered companies",regCompany);
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

exports.showAllVisitedCompanyYearwise=async(req,res)=>{
    try{// showing companies year wise
        const visitingYear = req.query.visitingYear || new Date().getFullYear();

     
    const allCompany=await company.find({visitingSince:visitingYear});
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
        companyCount:allCompany.length
    });
    } catch(err){
      console.log("there is an error in finding all companies");
      return res.status(200).json({
        message:"there is an server error while finding the companies",
        success:false,
      });
    }
 
}

exports.topRecruitingCompanies=async(req,res)=>{
    try{
        const companies = await company.find()
        .sort({ ctc: -1, name: 1 }) // Sort by ctc in descending order, then by name in ascending order
        .limit(20); // Get the highest package company
      if(companies.length===0){
        console.log("not able to find the companies");
        return res.status(400).json({
            message:"not able to find top companies",
            success:false
        });
    }
        console.log("top companies->",companies);

        // return a successfull response
        return res.status(200).json({
            message:"top companies fetched successfully",
           success:true,
           companies:companies
        })
      
    } catch(err){
        console.log("there is an error in top recruiting company handler");
        return res.status(400).json({
         message:"there is an issue in finding total student",
         success:false,
        })
    }
}