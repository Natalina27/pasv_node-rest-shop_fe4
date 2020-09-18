const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: 'Order was created'
  });
});
router.get('/:orderId', (req, res) => {
  res.status(200).json({
    message: 'Order details',
    orderId: req.params.orderId
  });
});

router.delete('/:orderId', (req, res) => {
  res.status(200).json({
    message: 'Order deleted',
    orderId: req.params.orderId
  });
});
module.exports = router;
