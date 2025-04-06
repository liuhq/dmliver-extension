chrome.runtime.onMessage.addListener(async (message) => {
    if (message.action != 'dmlive:clipboard:read') { return }

    const clipboardContent = await navigator.clipboard.readText()
    const dmliveLink = genDMLiveLink(clipboardContent)

    if (dmliveLink == '') {
        console.warn('uncorrect video link, dmlive can\'t open')
    } else {
        console.log(dmliveLink)
        window.open(dmliveLink, '_self')
    }
})

function genDMLiveLink(arg) {
    if (!URL.canParse(arg)) { return '' }

    const url = arg.includes('bilibili.com/s/video')
        ? arg.replace('bilibili.com/s/video', 'bilibili.com/video')
        : arg

    const dmliveLink = parseUrl(url)

    if (url.includes('bilibili.com/video')
        || url.includes('bilibili.com/bangumi/play')
        || url.includes('live.bilibili.com/')
        || url.includes('twitch.tv/')
        || url.includes('douyu.com/')
        || url.includes('huya.com/')
        || url.includes('youtube.com/watch')
        || url.includes('youtube.com/@')
    ) {
        return dmliveLink
    } else {
        return ''
    }
}

function parseUrl(raw) {
    const dmliveParsed = new URL(raw)
    const dmliveProtocol = 'dmlive://' + dmliveParsed.hostname + dmliveParsed.pathname

    switch (true) {
        case url.includes('bilibili.com'):
            return dmliveProtocol
                + (dmliveParsed.searchParams.get('p')
                    ? '?p=' + dmliveParsed.searchParams.get('p')
                    : '')
        case url.includes('youtube.com/watch'):
            return dmliveProtocol
                + (dmliveParsed.searchParams.get('v')
                    ? '?v=' + dmliveParsed.searchParams.get('v')
                    : '')
        default:
            return dmliveProtocol
    }
}
