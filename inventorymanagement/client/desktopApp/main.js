//const server = require('../../server/index');
const electron = require('electron'),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow,
  protocol = electron.protocol;
   
const path = require('path');
const url = require('url'); 
const isDev = true;

let mainWindow;
   
const createWindow = () => {
  mainWindow = new BrowserWindow({ 
      width: 480,
      height: 320,
      webPreferences: {
        nodeIntegration: true,
      }
  });
  
  //const appUrl = 'http://localhost:3000'
  const appUrl = `${path.join(__dirname, '../../build/index.html')}`;
  
  console.log(appUrl);
  mainWindow.loadURL(appUrl);
  mainWindow.maximize()
  mainWindow.setFullScreen(true)
  mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', () => {
    // protocol.interceptFileProtocol('file', (request, callback) => {
    //     console.log("File protocol handler");
    //     if(request.url.indexOf('index') === -1){
    //         const url = request.url.substr(7);
    //         const finalPath = path.normalize(`${__dirname}/${url}`);
    //         console.log(finalPath);
    //         callback(finalPath);    
    //     }
    //     callback(request.url);  
    // })
      createWindow();
  })

app.on('window-all-closed', () => {
  // Follow OS convention on whether to quit app when
  // all windows are closed.
  if (process.platform !== 'darwin') { app.quit() }
})
app.on('activate', () => {
  // If the app is still open, but no windows are open,
  // create one when the app comes into focus.
  if (mainWindow === null) { createWindow() }
})