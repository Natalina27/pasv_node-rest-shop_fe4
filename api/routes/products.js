const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
        res.status(200).json({
          message: 'Handling GET request to /products'
        });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: 'Handling POST request to /products'
  });
});

router.get('/:productId', (req, res) => {
  const id = req.params.productId;
  if(id === 'special'){
    res.status(200).json({
      message: 'You descovered a special ID',
      id: id
    });
  }else{
    res.status(200).json({
      message: 'You passed an ID',
      id: id
    });
  }
});

router.patch("/:productId", (req, res) => {
  res.status(200).json({
    message: 'Updated product'
  });
});

router.delete("/:productId", (req, res) => {
  res.status(200).json({
    message: 'Deleted product'
  });
});

module.exports = router;
