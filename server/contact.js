import express from 'express';
import Contact from './models/Contact.js'; // Assuming you have a Contact model

const contactRouter = express.Router();

// Middleware to set date to the start of the day
const setDateToStartOfDay = (req, res, next) => {
  if (req.body.date) {
    const date = new Date(req.body.date);
    date.setHours(0, 0, 0, 0);
    req.body.date = date;
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    req.body.date = today;
  }
  next();
};

// POST request to add a new contact
contactRouter.post('/contact', setDateToStartOfDay, async (req, res) => {
  try {
    const { name, email, message, date } = req.body;
    const newContact = new Contact({
      name,
      email,
      message,
      date
    });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Function to format date to YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

// GET request to fetch all contacts for the authenticated user
contactRouter.get('/getcontacts', async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user });
    // Transform the date field to remove the time component
    const transformedContacts = contacts.map(contact => {
      const transformedContact = contact.toObject();
      transformedContact.date = formatDate(transformedContact.date);
      return transformedContact;
    });
    res.json(transformedContacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

// DELETE request to delete a contact by name
// DELETE request to delete a contact by email
contactRouter.delete('/delete/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const deletedContact = await Contact.findOneAndDelete({ email });
    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});



export default contactRouter;
