let name='categories'
import category from '../../models/Category.js'
let read= async(req,res,next)=>{  
    try{
        let all = await category.find()
        return res.status(200).json({categories:all})
    }catch(error){
        return res.status(400).json({
            error:'error'
        })
    }

}
export default read