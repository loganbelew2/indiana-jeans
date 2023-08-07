// Set up the transient state data structure and provide initial valuess
    const transientState = {
        "ownsBlueJeans": false,
        "socioLocationsIds": 0
    }


// Functions to modify each property of transient state
    export const setOwnsBlueJeans = (chooseBlue) => {
        transientState.ownsBlueJeans = chooseBlue    
    }

    export const setSocioLocationId = (chooseLocation) => {
        transientState.socioLocationsIds = chooseLocation     
    }


// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/Json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/submissions", postOptions)
    
    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}
