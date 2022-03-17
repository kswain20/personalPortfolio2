

export function getLastNumber(url) {

    
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

export function removeCHildren(containter) {
while (element.firstChild) {
    containter.removeChild(containter.firstChild)
}
}