let name='companies'
let read= (req,res,next) => res.status(200).render('index',{
    title:'/companies',
    subtitle:'subtitle companies'
})
export default read