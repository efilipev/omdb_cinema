export const movieTitleFilter = (title) => {
    const blackList = /[!@]/gi
    const titleArray = title.split(" ")
    const result = titleArray.reduce((accumulator, item) => {
        const chars = item.replace(blackList, "").split("")
        for (const [charIndex, char] of chars.entries()) {
            if (char === char.toUpperCase() && charIndex > 0) {
                chars[charIndex] = char.toLowerCase()
            }
        }
        accumulator.push(chars.join(" "))
        return accumulator
    }, [])
    return result.join(" ").trim()
}

export const normalizeMovieTitle = (title) => {
    return title.split(":")[0]
}
