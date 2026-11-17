const router = require('express').Router();
const c = require('../controllers/productController');
const validateObjectId = require('../middleware/validateObjectId');
const { requireBody, validateStockChange } = require('../middleware/validateBody');

router.get('/low-stock', c.getLowStock);
router.get('/summary', c.getSummary);

router.post('/', requireBody, c.createProduct);
router.get('/', c.getProducts);

router.get('/:id', validateObjectId, c.getProductById);
router.put('/:id', validateObjectId, requireBody, c.updateProduct);
router.delete('/:id', validateObjectId, c.deleteProduct);
router.patch('/:id/stock', validateObjectId, validateStockChange, c.adjustStock);

module.exports = router;