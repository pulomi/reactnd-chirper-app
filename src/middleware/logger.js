
const logger = (store) => (next) => (action)=>{

    console.group(action.type)
    console.log("action:", action)
    const result = next(action)
    console.log("changed state:",store.getState())
    console.groupEnd()

    return result
}

export default logger