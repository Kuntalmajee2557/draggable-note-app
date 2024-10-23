import express from "express"
const router = express.Router()

router.get('/',(req, res) => {
    res.send('welcome to userRoutes')
})

router.get('/profile',(req, res) => {
    
})

export default router;