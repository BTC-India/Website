import express from 'express';
const router = express.Router();
import { submitPartnerForm } from '../controllers/partnerController';

// POST route for form submission
router.post('/', submitPartnerForm);

export default router;
