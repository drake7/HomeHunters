const express = require('express');
const app = express();
const PORT = 5000;

const process = require('../processing');

app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await process.getUsers();
    res.json(users)
});

app.get('/properties', async (req, res) => {
    const properties = await process.getProperties();
    res.json(properties)
});

app.get('/user/:id', async (req, res) => {
    try {
        const user = await process.getSingleUser(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found." });
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/property/:id', async (req, res) => {
    try {
        const user = await process.getSingleProperty(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "Property not found." });
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
function checkIfAnyIsNull(arr){
    return arr.includes(null) || arr.includes(undefined);
}

app.post('/user', async (req, res) => {
     
    try {
        let errMsg = "Error saving"
        const {firstname, lastname, email, mobile, password} = req.body
        const required = [firstname, lastname, email, mobile, password];
        const missingData = required.includes(undefined)
        if(missingData) errMsg = "Missing data";
        if (req.body && !missingData ) {
            const newUser = await process.createUser(req.body);
            res.status(201).json(newUser);
        } else {
            res.status(400).json({ error: errMsg});
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/property', async (req, res) => {
     
    try {
        let errMsg = "Error saving"
        const {category, address, landlord_user_id, feature_img } = req.body
        const required = [category, address, landlord_user_id, feature_img];
        const missingData = required.includes(undefined)
        if(missingData) errMsg = "Missing data";
        if (req.body && !missingData) {
            const properties = await process.createProperty(req.body);
            res.status(201).json(properties);
        } else {
            res.status(400).json({ error: errMsg});
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// app.put('/user/:username', async (req, res) => {
//     try {
//         const user = await process.getSingleUser(req.params.username);
//         if (user) {

//             await process.updateUser(req.body);
//             res.status(204).end();
//         } else {
//             res.status(404).json({ message: "User not found" });
//         }

//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// app.delete("/user/:username", async (req, res, next) => {
//     try {
//         const user = await process.deleteUser(req.params.username);
//         await process.deleteUser(req.params.username);
//         res.status(204).end();
//     } catch (err) {
//         next(err);
//     }
// });

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
});
app.listen(PORT, () => console.log(`Home Hunter API listening on port ${PORT}!`));

