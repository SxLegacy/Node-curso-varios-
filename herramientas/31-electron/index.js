// npm init -y
// npm i electron

const { app, BrowserWindow } = require('electron');

let mainWindow;

// como electron va a tardar un poco iniciando la app, le decimos que al hacer eso y este listo ejecute la funcion de crear ventana
app.on('ready', createMainWindow);

function createMainWindow(){
    mainWindow = new BrowserWindow ({
        width: 800,
        height: 600,
    });

    mainWindow.loadFile('index.html')
}