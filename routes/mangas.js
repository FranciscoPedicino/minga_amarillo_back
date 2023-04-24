import { Router } from "express";
import read from '../controlers/mangas/read.js'
let router= Router()

router.get('/',read)


export default router 