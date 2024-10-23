import express from "express"
const router = express.Router()

router.get('/',(req, res) => {
    res.send('welcome to noteRoutes')
})

router.get('/notes',(req, res) => {
    
})

router.post('/new',(req, res) => {
    
})

router.get('/edit/:id',(req, res) => {
    
})

router.get('/delete/:id',(req, res) => {
    
})

export default router;