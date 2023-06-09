const {Router} = require('express');
const router = Router();

const path = require('path')
const multer = require('multer');

//Configurar o multer
const storage = multer.diskStorage({
    
    destination:function (req, file, cb){
        cb(null, `${path.join(__dirname, 'upload')}`)
    },

    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, 'video-' + uniqueSuffix + ext);
    },
});

const upload = multer({storage:storage})

router.get('/', (req,res)=>{
    res.status(200).render('index')
})

router.post('/upload', upload.single('file'), (req,res)=>{
    if(!req.file){
        return res.status(400).send('Nenhum arquivo de video enviado')
    }

    const videoPath = req.file.path
    res.send('Tudo ok')

});

module.exports = router