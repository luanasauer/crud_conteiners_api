import { Router } from 'express';
import * as ConteinerController from '../controllers/conteiner.controller';
import * as MovimentacaoController from '../controllers/movimentacoes.controller';

const router = Router();

router.get('/conteiner', ConteinerController.getConteiners);
router.get('/conteiner/:id', ConteinerController.getConteiner);
router.post('/conteiner', ConteinerController.addConteiner);
router.put('/conteiner/:id', ConteinerController.updateConteiner);
router.delete('/conteiner', ConteinerController.removeConteiner);

router.get('/movimentacao',MovimentacaoController.getMovimentacoes);
router.get('/movimentacao/:id', MovimentacaoController.getMovimentacao);
router.post('/movimentacao', MovimentacaoController.addMovimentacao);
router.put('/movimentacao/:id', MovimentacaoController.updateMovimentacao);
router.delete('/movimentacao', MovimentacaoController.removeMovimentacao);

export default router;