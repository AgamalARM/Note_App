const express = require('express');
const router = express.Router();
const noteCtrl = require('../controller/noteController');

router.get(('/notes'), noteCtrl.getAllNotes );
router.post(('/save'), noteCtrl.saveNote );
router.put(('/update'), noteCtrl.updateNote );
router.delete(('/delete'), noteCtrl.deleteNote );

module.exports = router;