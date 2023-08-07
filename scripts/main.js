import { SubmissionList } from "./Submissions.js"
import { ownJeans } from "./jeanSurvey.js"
import { SaveSubmission } from "./saveSubmission.js"
import { locationChoice } from "./urbanSurvey.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = ownJeans()
    const locationHTML = await locationChoice()
    const buttonHTML = SaveSubmission()
    const submissionsHTML = await SubmissionList()
    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationHTML}
    ${buttonHTML}
    ${submissionsHTML}
    `
}

document.addEventListener("newSubmissionCreated",render)

render()