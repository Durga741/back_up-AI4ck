const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./database");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes to store the data of registrations in database
app.post("/register", async (req, res) => {
  const { name, emailOrMobile, age, password,confirmPassword } = req.body;
  try {
    await pool.query(
      "INSERT INTO AI (name, email_or_mobile, age, password, confirm_password) VALUES ($1, $2, $3, $4, $5)",
      [name, emailOrMobile, age, password, confirmPassword]
    );
    res.status(201).send("User registered successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user.");
  }
});

// Login route to authenticate user from database
app.get('/login', async (req, res) => {
    const { emailOrMobile, password } = req.query;
  
    try {
      // Query to find user by email or mobile
      const query = `
        SELECT * FROM AI
        WHERE email_or_mobile = $1;
      `;
      const result = await pool.query(query, [emailOrMobile]);
  
      // Check if user exists
      if (result.rows.length > 0) {
        const user = result.rows[0];
        
        // Here, you would compare the password (make sure to hash passwords in production)
        if (user.password === password) {
          // Send user data if login is successful
          res.json({ success: true, user: { id: user.id, name: user.full_name, email: user.email } });
        } else {
          res.status(400).json({ success: false, message: 'Invalid password' });
        }
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ success: false, message: 'An error occurred' });
    }
  });

// API endpoint to handle form submissions of Contact Us page
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Insert data into the database
    const result = await pool.query(
      "INSERT INTO contact_us (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, subject, message]
    );
    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: result.rows[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});


//   // API Route to store the Questions or concerns in data base
// app.post("/submit-question", async (req, res) => {
//   const { name, mobile, question } = req.body;

//   try {
//     const query = `
//       INSERT INTO support_ticket (name, mobile, question)
//       VALUES ($1, $2, $3)
//     `;
//     await pool.query(query, [name, mobile, question]);
//     res.status(200).send("Submitted successfully");
//   } catch (error) {
//     console.error("Error submitting the data:", error);
//     res.status(500).send("Server error");
//   }
// });


// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
