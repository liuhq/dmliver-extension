# dmliver-extension

>Play video/live streaming from Bilibili, Youtube, etc. to DMLive, use with dmlive and vimium-c (a vim-like chromium extension)

you can get the extension from [release](https://github.com/liuhq/dmliver-extension/releases), unpack and install to chrome.

## Usage

Go to `chrome://extensions/shortcuts`, bind a keyboard shortcut to dmliver, like `Ctrl-Shift-P` (will override "print page").

via vimium-c commands:

- `yy`: copy the current tab's url
- `yf`: copy the hint link

then trigger the shortcut key to run dmlive and play in mpv.

>Note: this extension will read the first item in your clipboard to get the video url.

## MIME Register

create `dmlive.desktop`

```ini
[Desktop Entry]
Version=1.0
Name=DMLive
Comment=Register dmlive mime (custom protocol)
Type=Application
NoDisplay=true
# only support absolute path
Exec=<your_path_to>/dmlive --quiet --url %u
MimeType=x-scheme-handler/dmlive;
```

move it to `~/.local/share/applications/`

run `update-desktop-database -v ~/.local/share/applications` to update mime cache.

## Thanks

- [dmlive](https://github.com/THMonster/dmlive)
- [vimium-c](https://github.com/gdh1995/vimium-c)

the extension icon from [revda.png](https://github.com/THMonster/Revda/blob/master/misc/browser-extension/icons/revda.png).

## License

[MIT](./LICENSE)
