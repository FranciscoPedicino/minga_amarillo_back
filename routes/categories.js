import { Router } from "express";
import read from '../controlers/categories/read.js'
let router= Router()

router.get('/',read)


export default router 
