const testController = (req, res)=>{
    res.status(200).send({
        message:"Welecome in Blood Bank",
        success:true,
    });

};
 module.exports = {testController};