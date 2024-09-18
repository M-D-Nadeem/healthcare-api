 import Services from "../model/servicesSchema.js"

 const addService=async (req,res)=>{
    const { name:serviceName, description:serviceDescription, price:servicePrice } = req.body
    if (!serviceName || !servicePrice) {
      return res.status(500).json({ error: 'Service name and price are required.' })
    }
    if(servicePrice<0){
        return res.status(500).json({ error: 'Service price can not be less than 0' })
    }
    
    try{
        const service =await Services.create({
            serviceName,
            serviceDescription,
            servicePrice,
          });
        if(!service){
            return res.status(500).json({ error: 'Failed to add service!' })
        }
        return res.status(200).json({
            success:true,
            message:"Service added successfully.",
            data:service
        }) 
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:`Error in adding the service! ${error}`,
        });
    }
 } 
 export default addService