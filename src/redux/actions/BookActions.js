export function addtoReadingList(payload) {
    return {
        type: "ADD_TO_READING_LIST",
        payload
    }
}
export function removeFromReadingList(payload) {
    return {
        type: "REMOVE_FROM_READING_LIST",
        payload
    }
}
export function addtoFinishedList(payload) {
    return {
        type: "ADD_TO_FINISHED_LIST",
        payload
    }
}