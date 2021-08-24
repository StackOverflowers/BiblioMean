const Role = require("../models/role");

const registerRole = async(req,res) => {
    if (!req.body.name || !req.body.description) return res.status(400).send("Sorry please check all the camps");


    existingName = await Role.findOne({name: req.body.name});

    if(existingName) return res.status(400).send("Sorry that role already exists");

    let role = new Role({
        name: req.body.name,
        description: req.body.description,
        Status:true,
    }
    )

    let result = await role.save();

    if(!result) return res.status(400).send("Sorry cant save the role");

    return res.status(200).send({role});
}


const updateRole = async(req,res)=>{

    if(!req.body._id || !req.body.description) return res.status(400).send("Sorry please check all the camps");

    const role = await Role.findByIdAndUpdate(req.body._id,{
        description: req.body.description,
        userId:req.user.userId,
    });

    if(!role) return res.status(400).send("Sorry cant save the role"); 

    return res.status(200).send({role});

}

const listRole = async(req,res) => {
    const role = await Role.find({ name: new RegExp(req.params["name"], "i") });

    if(!role) return res.status(400).send("Sorry no roles created");

    return res.status(200).send({role});
}

module.exports = {registerRole,updateRole,listRole}