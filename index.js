let educationCounter = 0;
let experienceCounter = 0;



function addExperience() {
    let clone = getTemplateClone("ExperienceTemplate");

    clone.content.getElementById("s").id = "s" + experienceCounter;
    experienceCounter = experienceCounter + 1;

    document.getElementById("Work_Experience").appendChild(clone.content);
}

function addEducation(){

    let clone = getTemplateClone("EducationTemplate");

    clone.content.getElementById("section").id = "section" + educationCounter;
    educationCounter = educationCounter + 1;

    document.getElementById("Education").appendChild(clone.content);
}
function removeEducation(){

    educationCounter = educationCounter - 1;
    var id = 'section'+educationCounter;
    document.getElementById(id).remove();

}
function removeExperience(){

    experienceCounter = experienceCounter - 1;
    var id = 's'+experienceCounter;
    document.getElementById(id).remove();
}

function getTemplateClone(name) {
    return document.getElementById(name).cloneNode(true);
}
