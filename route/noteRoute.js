const express = require('express');
const router = express.Router();

router.get(('/notes'), (req,res) => {
    res.send('get all notes');
});

module.exports = router;