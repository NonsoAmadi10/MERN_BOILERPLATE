import { Router } from 'express';

import Items from '../models/items';

const router = Router();

router.get('/', async (req, res) => {
  const getAll = await Items.find().sort({ date: -1 });
  return res.status(200).send({
    data: getAll
  });
});

router.post('/', async (req, res) => {
  try {
    const newItem = new Items({
      name: req.body.name
    });
    await newItem.save();
    return res.status(201).send({
      data: newItem
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ success: false });
  }
});

router.delete('/:id', (req, res) => {
  Items.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

export default router;
