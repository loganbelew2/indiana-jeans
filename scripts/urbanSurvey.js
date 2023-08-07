import { setSocioLocationId } from "./TransientState.js"



export const locationChoice = async () => {
    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()
    
    document.addEventListener("change", handleAreaChange)
    let html = "<h2> What area do you live in?</h2>"

    for (const location of locations) {
        html += `<input type='radio' name= 'location' value='${location.id}' /> ${location.label}`
    }
    return html
}

const handleAreaChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = parseInt(changeEvent.target.value)
       setSocioLocationId(convertedToInteger)
    }
}
