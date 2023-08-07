export const SubmissionList = async () => {
    // Get the submissions from your API
   const Response = await fetch('http://localhost:8088/submissions')
   const convertDataToJson = await Response.json()
        
    // Iterate the submissions and create some <section> representations
    let html = ""
    for (const submission of convertDataToJson) {
        html +=  `<section class= surveySections>Owns Jeans? ${submission.ownsBlueJeans} <br> Area type foreign key? ${submission.socioLocationsIds}</section>`
    }
    return html
    // Return the HTML string
}