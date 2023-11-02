const { Router } = require('express');
const ContactControler = require('./app/controllers/ContactController');
const CategorieController = require('./app/controllers/CategorieController');

const router = Router();

router.get('/contacts', ContactControler.index);
router.get('/contacts/:id', ContactControler.show);
router.delete('/contacts/:id', ContactControler.delete);
router.post('/contacts/', ContactControler.store);
router.put('/contacts/:id', ContactControler.update);

router.get('/categories', CategorieController.index);
router.post('/categories', CategorieController.store);
router.put('/categories/:id', CategorieController.update);
router.delete('/categories/:id', CategorieController.delete);

module.exports = router;
