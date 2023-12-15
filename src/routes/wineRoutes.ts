import express from 'express';
import * as wineController from '../controller/wineController';

const router = express.Router();

router.get('/', wineController.getAllWines);
router.get('/:id', wineController.getWineById);
router.get('/country/:country', wineController.getWinesByCountry);
router.post('/', wineController.addWine);
router.put('/:id', wineController.updateWineById);
router.delete('/', wineController.deleteWine);

export default router;
