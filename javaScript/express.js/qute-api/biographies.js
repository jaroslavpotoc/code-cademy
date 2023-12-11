const express = require('express');
const router = express.Router();

// Sample biographical blurbs data
const biographies = [
  { id: 1, name: 'Person A', description: 'Description for Person A' },
  { id: 2, name: 'Person B', description: 'Description for Person B' },
  // Add more biographical blurbs as needed
];

// Route to get all biographies
router.get('/', (req, res) => {
  res.json({
    biographies: biographies.map((bio) => ({
      id: bio.id,
      name: bio.name,
      description: bio.description,
    })),
  });
});

// Route to get a specific biography by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundBio = biographies.find((bio) => bio.id === parseInt(id));

  if (foundBio) {
    res.json({
      biography: {
        id: foundBio.id,
        name: foundBio.name,
        description: foundBio.description,
      },
    });
  } else {
    res.status(404).json({ error: 'Biography not found.' });
  }
});

// Add more routes as needed (e.g., for adding, updating, or deleting biographies)

module.exports = router;
