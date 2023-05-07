function getFullYear () {
    const d = new Date()
    return d.getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}

export {getFullYear, getFooterCopy}