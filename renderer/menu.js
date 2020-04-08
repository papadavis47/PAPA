const {remote, shell} = require('electron')

// Menu template
const template = [
    {
        label: "Actions",
        submenu: [ {
            label: "Make Journal Entry",
            click: window.newEntry,
            accelerator: 'CmdOrCtrl+J'
        }, {
            type: 'separator'
        },
        {
            label: "Create Section",
            click: window.newSection,
            accelerator: "CmdOrCtrl+S"
        }

        ]
    },
    {
        role: 'editMenu'
    },
    {
        role: 'viewMenu'
    },
    {
        role: 'windowMenu',
    },
    {
        label: 'Learn More',
        submenu: [ {
            label: "Electron JS",
            click: () => {shell.openExternal('https://www.electronjs.org/')}
        },
        {
            label: "Github",
            click: () => {shell.openExternal('https://github.com/papadavis47/PAPA')}
        }
        ]
    }
]



// Build menu
const menu = remote.Menu.buildFromTemplate(template)

// Set as main app menu
remote.Menu.setApplicationMenu(menu)