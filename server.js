const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 5005;

function portString(port) {
    const text = `Server running on port ${ port }`;
    const wrap = '='.repeat(text.length + 2);
    return `\n${ wrap }\n ${ text }\n${ wrap }\n`;
}

app.use('/js', express.static(path.resolve(__dirname, 'js')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/node_modules', express.static(path.resolve(__dirname, 'node_modules')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, _ => console.log(portString(port)));
