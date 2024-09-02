import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.js'

const autenticar = async(req,res,next)=>{
    const token = req.headers.authorization
    if(!token) return res.status(404).json({msg: "Lo sentimos debe proporcionar un token"})
    
    const {authorization} = req.headers

    try{
        const {id, rol} = jwt.verify(authorization.split(" ")[1], process.env.JWT_SECRET)
        req.usuario = await Admin.findById(id).lean().select("-password")
        next()
    }catch(err){
        const e = new Error("Formato de token no valido")
        return res.status(404).json({msg: e.message})
    }

}

export default autenticar