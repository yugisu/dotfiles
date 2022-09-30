# VSCode configuration

## Extensions

[`extensions.json`](./extensions.json) file includes the list of common extensions I use.

If you want to install them automatically, just run the following command (you have to have nodejs@^14.0.0 installed):

```bash
$ ./install-extensions.mjs
```

## Config

[`settings.json`](./settings.json) contains settings I use in VSCode.

To use it, just copy-paste the contents to your VSCode config file, or create a symlink to this file:

#### Windows WSL

```cmd
mklink <VSCode installation directory>\User\settings.json <path to this repository>\vscode\settings.json

:: For example,
mklink C:\Users\yugisu\AppData\Roaming\Code\User\settings.json \\wsl.localhost\Ubuntu\home\yugisu\Projects\dotfiles\vscode\settings.json
```
