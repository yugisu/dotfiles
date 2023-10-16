# MacOS Setup

## The Current MacOS Setup

The idea is to centralize all work within a couple applications and use Alt+Tab to switch between them. The Arc + VSCode setup plays along this idea very well: Arc is being used for browsing, development, communication etc., and VSCode is being used as a text editor with an integrated terminal.

Things that are used:

Dev

- [iTerm2](https://iterm2.com/) 🍺
- [zsh + omz](https://ohmyz.sh/)
- Git 🍺
- [VSCode](https://code.visualstudio.com/download) 🍺
- [n](https://github.com/tj/n) 🍺 - Node.js version manager
- [bat](https://github.com/sharkdp/bat) 🍺
- [eza](https://github.com/eza-community/eza) 🍺

Utils

- [Homebrew](https://brew.sh/)
- [Arc Browser](https://arc.net/) 🍺
- [Orbstack](https://orbstack.dev/) 🍺
- [Raycast](https://www.raycast.com/) 🍺 - nothing fancy, minimal setup; it seems to work much faster than Spotlight (big L for you, Apple)
- [Dozer](https://github.com/Mortennn/Dozer) 🍺 - Hiding icons from the topbar
- [Witch](https://manytricks.com/witch/) 🍺 - predictable `cmd+backtick` command
- [CommandQ](https://commandqapp.com/) 🍺 - I use the `cmd + W` shortcut quite often, so there have been accidents when I closed some app by missclicking `cmd + Q` instead.
- [MeetingBar](https://github.com/leits/MeetingBar) 🍺
- [Pandan](https://sindresorhus.com/pandan#non-app-store-version)
- [Scroll Reverser](https://pilotmoon.com/scrollreverser/) 🍺 - to fix broken wheel scroll on a non-Apple mouse
- [Obsidian](https://obsidian.md/) 🍺 - haven't used much, but so far pretty much like it
- \* [Balance Lock](https://www.tunabellysoftware.com/balance_lock/) 🍺 - optional, I have experienced headphone audio balance shift only once so far
- [Syncalicious](https://github.com/zenangst/Syncalicious) 🍺 - settings syncing

\* 🍺 - installable with Homebrew

Things to try out?

- [Plash](https://github.com/sindresorhus/Plash)
- [yabai](https://github.com/koekeishiya/yabai)
- [UTM](https://mac.getutm.app/) - setup Linux with i3 and stuff :)

### Setup steps

- Run the following commands one-by-one in the terminal:

```shell
xcode-select --install

sudo xcodebuild -license

softwareupdate --install-rosetta
```

- Install Homebrew & all deps from the [Brewfile](../Brewfile):

```shell
sh homebrew.sh
```

- Install required Ruby version

```shell
asdf plugin add ruby

asdf install ruby 3.2.2
asdf global ruby 3.2.2
gem update --system
```

### Program Settings

1. Open Syncalicious
2. "Sync" programs you need
3. Copy the folder that contains .plist and other files
4. Paste this folder's contents on the new MacBook into `~/Library/Preferences`
