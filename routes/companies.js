import { Router } from "express";
import read from '../controlers/companies/read.js'
let router= Router()

router.get('/',read)


export default router 