const {Router} = require('express');
const router = Router();
const {getGrocery, saveGrocery,updateGrocery,deleteGrocery} = require('../controllers/GroceryController');

router.get('/', getGrocery);
router.post('/save',saveGrocery);
router.post('/update',updateGrocery);
router.post('/delete',deleteGrocery);
// router.post('/test',testing);

module.exports = router;