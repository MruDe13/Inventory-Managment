const server = require('../../server/index');
const electron = require('electron'),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow,
  protocol = electron.protocol,
  menu = electron.Menu;
   
const path = require('path');
const url = require('url'); 
const isDev = !app.isPackaged;  // are we in development mode or production.

let mainBrowserWindow;

function sleep(inteval){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Success");
    }, inteval);
  });
}
const createWindow = (splashWindow) => {
  mainBrowserWindow = new BrowserWindow({ 
      width: 480,
      height: 320,
      titleBarStyle: 'hidden',
      show: false,
      webPreferences: {
        nodeIntegration: true,
      }
  });

  const appUrl = `${path.join(__dirname, '../../build/index.html')}`;
  mainBrowserWindow.loadURL(appUrl);
  mainBrowserWindow.once('ready-to-show', () => {
    splashWindow.destroy();
    mainBrowserWindow.maximize();
    mainBrowserWindow.show();
  });

  if (isDev){
    mainBrowserWindow.webContents.openDevTools();
  }else{
    menu.setApplicationMenu(null);
  }
  
  mainBrowserWindow.on('closed', () => mainBrowserWindow = null)
}

const createSplashWindow = () => {
  splashWindow = new BrowserWindow({
    width: 480, 
    height: 320,
    transparent: false,
    frame: false,
    alwaysOnTop: true
  });
  const splashUrl = `${path.join(__dirname, '../public/splash/splash.html')}`;
  splashWindow.loadURL(splashUrl);
  return splashWindow;
}

app.on('ready', () => {
  const splashWindow = createSplashWindow(); 
  sleep(5000).then(()=>{
    createWindow(splashWindow);
  });
  
});

app.on('window-all-closed', () => {
  // Follow OS convention on whether to quit app when
  // all windows are closed.
  if (process.platform !== 'darwin') { app.quit() }
})
app.on('activate', () => {
  // If the app is still open, but no windows are open,
  // create one when the app comes into focus.
  if (mainBrowserWindow === null) { createWindow() }
})