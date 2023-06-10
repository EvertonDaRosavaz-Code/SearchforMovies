const {Router}  = require('express');
const router    = Router();

const path      = require('path')
const multer    = require('multer');

//Configurar o multer
const storage = multer.diskStorage({
    
    destination:function (req, file, cb){
        cb(null, `${path.join(__dirname, 'movie')}`)
    },

    filename: function(req, file, cb){
        const ext = path.extname(file.originalname);
        const fileMovie = req.body.nameMovie
        const nameMovie = fileMovie + ext
        cb(null, nameMovie );
    }
});

const upload = multer({storage:storage})

router.get('/', (req,res)=>{
    res.status(200).render('index')
})


router.post('/upload', upload.single('file'), (req,res)=>{
    if(!req.file){
        return res.status(400).send('Nenhum arquivo de video enviado')
    }

   
    res.send('Tudo ok')

});


module.exports = router