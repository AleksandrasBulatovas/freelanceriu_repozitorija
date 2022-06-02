import jsonwebtoken from 'jsonwebtoken'
import { loadJsonFile } from 'load-json-file'

const config = await loadJsonFile('./config.json')


export default (req, res, next) =>{
    if(!req.cookies?.token) {
        res.json({message: 'Neautintifikuotaas vartotojas', status: 'danger'})
        return
    }
    
    jsonwebtoken.verify(req.cookies.token, config.secret, (err, decoded)=>{
        if(err) {
            res.json({message: 'Blogas tokenas', status: 'danger'})
            return
        }
        req.authData = {
            email: decoded.email,
            id: decoded.id
        }
        next()
    })
}

