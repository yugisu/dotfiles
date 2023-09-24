# VSCode configuration

## Extensions (Outdated)

[`extensions.json`](./extensions.json) file includes the list of common extensions I use.

If you want to install them automatically, just run the following command (you have to have nodejs@^14.0.0 installed):

```bash
$ ./install-extensions.mjs
```

## Appearance

Font used: [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro)

On MacOS, it is installed via Homebrew.

## Config

[`settings.json`](./settings.json) contains VSCode settings I prefer.
[`keybindings.json`](./keybindings.json) contains VSCode settings I prefer.

To use these files, you can copy-paste the contents to VSCode config files, or create symlinks to these files. If you're creating a symlink, don't forget to make a backup of the existing files.

#### Creating a symlink in Windows WSL

```cmd
:: CMD with elevated permissions
mklink <VSCode installation directory>\User\settings.json <path to this repository>\vscode\settings.json

:: For example,
mklink C:\Users\yugisu\AppData\Roaming\Code\User\settings.json \\wsl.localhost\Ubuntu\home\yugisu\Projects\dotfiles\vscode\settings.json
```

#### Creating settings symlinks in MacOS

```bash
sh setup.sh
```
