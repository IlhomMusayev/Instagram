const { Router } = require('express');

const router = Router();


router.get('/', (req, res) => {
    res.render('profil', {
        title: 'Profil',
    })
})

module.exports = router;