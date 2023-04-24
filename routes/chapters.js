import { Router } from "express";
import read from '../controlers/chapters/read.js'
let router= Router()

router.get('/',read)


export default router 