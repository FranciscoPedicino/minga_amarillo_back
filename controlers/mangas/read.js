let name='mangas'
let read= (req,res,next) => res.status(200).render('index',{
    title:'/mangas',
    subtitle:'subtitle mangas'
})
export default read