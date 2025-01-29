require('dotenv').config()
const fs = require('fs');
const {checkEmail, checkPassword, authToken} = require('./middleware/auth');
const db = require('./config/db');
const cors = require('cors');
const express = require("express");
const Roads = require('./routes/auth/auth')
const mysql = require('mysql2');
const upload = require('./multer');
const cloudinary = require('./cloudinary');
const app = express();
const port = process.env.PORT;
const body = require('body-parser');

app.use(cors());

app.use(body.urlencoded({extended: false}));
app.use(body.json());


app.post('/info', (req, res) => {
    res.send("Hello World");
});

app.post('/upload-images', upload.array('image'), async (req, res) => {
    let uploadedImages = [];
    try {

        // Télécharger chaque fichier vers Cloudinary
        for (const file of req.files) {
            const result = await cloudinary.v2.uploader.upload(file.path, {
                folder: "images",
                public_id: file.path
            });
            console.log(result)
            uploadedImages.push(result.secure_url);
        }

        res.json(uploadedImages);
    } catch (error) {
        console.error(error);
        res.json({ message: 'Une erreur est survenue.' });
    }
});

app.delete('/delete-images', async(req, res) => {
    try {
        const {public_id} = req.params;

        const result = await cloudinary.uploader.destroy(public_id);

        if (result.result === 'ok') {
            res.json({message: "Image supprimée avec succès"});
        } else {
            res.status(500).json({message: "Erreur lors de la suppression de l\'image"});
        }
    } catch (err) {
        console.error(err);
        res.json({message: "Erreur serveur"});
    }
});

app.post('/Menu',  authToken, (req, res) => {
    const { name, description, price, imageUrl } = req.body;
        // console.log(req.body);
        db.query('INSERT INTO menus (name, description, Prix, restaurant_id, URL) VALUES (?, ?, ?, ?, ?)', [name, description, price, req.id, imageUrl], (error, result) => {
            if (error) {
                console.log(error);
                res.status(500).json({message: 'Erreur pour ajouter cet élément au menu'});
            } else {
                res.status(200).json({ message: 'Element du menu ajouté avec succès'});
            }
        });
});

app.get('/Menu', authToken, (req, res) => {
    const info = `SELECT * FROM menus WHERE restaurant_id = '${req.id}'`;
    db.query(info, (err, result) => {
        if (err) {
            console.log(err);
           res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

app.delete('/Menu', authToken, (req, res) => {
    const data = `DELETE  FROM menus WHERE id = '${req.id}'`;
    db.query(data, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

app.use(Roads);

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});
