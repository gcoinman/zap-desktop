<h1 align="center">
  <img src='http://zap.jackmallers.com/assets/desktop-f9a57ed49fc09119e2c9d3ba7337a5a7b42123b992b2eae14c356fc8a5ea25a3.png' alt="screenshot" />
  <br />
  <center>
    <a href='https://zap.jackmallers.com'>Zap</a>
  </center>
</h1>

Zap is a free Lightning Network wallet focused on user experience and ease of use, with the overall goal of helping the cryptocurrency community scale Bitcoin and other cryptocurrencies.

The UI for Zap is created using
[Electron](https://electron.atom.io/) + [React](https://facebook.github.io/react/) + [Redux](https://github.com/reactjs/redux/tree/master/docs).

We have an active [slack](https://join.slack.com/t/zaphq/shared_invite/enQtMjkyNTAxNDA3MjE2LWE3NGZjZGE5ZmI1NGQ5YTk3MGQzMTdmNDAwYjNhZTJkMWU0ZWZlNzA0MjJiNDBjMzcxYjcyMDMxNWY3OGNhYWQ) channel where you can join the discussion on development, design and product.

## Installing

***Note:*** *If you would like to use a full bitcoin node, please see the [advanced usage](https://github.com/LN-Zap/zap-desktop/blob/master/ADVANCED.md) page.*

Download the [latest release](https://github.com/LN-Zap/zap-desktop/releases) for your appropriate OS and follow the instructions below. 

### macOS 

Once you have the .dmg file downloaded, double click on the file the mount the image.

Then drag-and-drop the `Zap.app` to `Applications`.

Finally, open `Zap.app`

### Windows

Once you have the .exe file downloaded, simply double click on the file.

### Linux (.deb)

Once you have the .deb file downloaded, you will need to install the package with `dpkg`:

```bash
dpkg -i zap-desktop_0.0.1_amd64.deb
```

If this is your first time installing zap, you may have some unmet dependencies. This can be resolved with the following command:

```bash
apt-get update && apt-get -f install
```

To run Zap you can either navigate through the GUI or run the following command:

```bash
zap-desktop
```

### Linux (AppImage)

Once you have downloaded the .AppImage file, you will need to navigate to the download directory and make it executable:

```bash
chmod +x zap-desktop_0.0.1_amd64.AppImage
```

Then you can simply run the file:

```bash
./zap-desktop_0.0.1_amd64.AppImage
```

## Contributing
Please see the [contributing guide](https://github.com/LN-Zap/zap-desktop/blob/master/CONTRIBUTING.md).

## Q & A (Quality and Assurance)

A good product not only has good software tests but also checks the quality of the UX/UI. Putting ourselves in the shoes of a user is a very important design principle of Zap.

If you are having problems with Zap, please report the issue with screenshots and/or how to reproduce the bug/error.

### Supported Operating Systems
- Mac
- Windows
- Linux

### Example User Stories
`User wants to connect to a peer`

`User wants to open a channel`

`User wants to create a payment request`

`User wants to make a payment`
