"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('¡Hola desde el API en Azure App Service!');
});
app.listen(port, () => {
    console.log(`El API está escuchando en el puerto ${port}`);
});
