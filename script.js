
//--------adding the cash and credit amounts to the button
function changeFinances() {
    const cash = document.getElementById("financesCash");
    document.getElementById("cashSpan").innerHTML = cash.value;
    const credit = document.getElementById("financesCredit");
    document.getElementById("creditSpan").innerHTML = credit.value;
}

//--------add weapon row from button
function addBlankWeaponRow() {
    const hideWeaponRows = document.querySelectorAll('.hideWeaponRow');
    for(let i = 0; i < hideWeaponRows.length; i++) {
        hideWeaponRows[0].classList.remove('hideWeaponRow')
    }
}

function addWeaponRow() {
    const weaponNames = document.querySelectorAll('.weaponName');
    const weaponRows = document.querySelectorAll('.weaponRow');
    for(let i = 0; i < weaponRows.length; i++) {
        if(weaponNames[i].value != '')
        weaponRows[i].classList.remove('hideWeaponRow')
    }
}

//--------add martial arts row from button
function addBlankMartialArtsRow() {
    const hideMartialArts = document.querySelectorAll('.hideMartialArts');
    for(let i = 0; i < hideMartialArts.length; i++) {
        hideMartialArts[0].classList.remove('hideMartialArts')
    }
}

function addMartialArtsRow() {
    const martialArtsNames = document.querySelectorAll('.martialArtsName');
    const martialArtsRows = document.querySelectorAll('.martialArtsRow');
    for(let i = 0; i < martialArtsRows.length; i++) {
        if(martialArtsNames[i].value != '')
        martialArtsRows[i].classList.remove('hideMartialArts')
    }
}

//--------add perks and traits row from button
function addBlankPerksRow() {
    const hidePerks = document.querySelectorAll('.hidePerksRow');
    for(let i = 0; i < hidePerks.length; i++) {
        hidePerks[0].classList.remove('hidePerksRow')
    }
}

function addPerksRow() {
    const perksNames = document.querySelectorAll('.perksName');
    const perksRows = document.querySelectorAll('.perksRow');
    for(let i = 0; i < perksRows.length; i++) {
        if(perksNames[i].value != '')
        perksRows[i].classList.remove('hidePerksRow')
    }
}

//--------add psychic row from button
function addBlankPsychRow() {
    const hidePsych = document.querySelectorAll('.hidePsychRow');
    for(let i = 0; i < hidePsych.length; i++) {
        hidePsych[0].classList.remove('hidePsychRow')
    }
}

function addPsychRow() {
    const psychNames = document.querySelectorAll('.psychName');
    const psychRows = document.querySelectorAll('.psychRow');
    for(let i = 0; i < psychRows.length; i++) {
        if(psychNames[i].value != '')
        psychRows[i].classList.remove('hidePsychRow')
    }
}

//--------ascending checkboxes for 'mortal' section
const ascendingChecks = document.querySelectorAll('.ascendingChecks');
ascendingChecks.forEach((check, index1) => {  //thing.forEach((element, index number) =>{do something})
    check.addEventListener('click', () => {
        ascendingChecks.forEach((check, index2) => {
            index1 >= index2 ? check.checked = true : check.checked = false
        })
    })
})

const noDamageBtn = document.getElementById('noDamageBtn');
noDamageBtn.addEventListener('click', () => {
    ascendingChecks.forEach((check) => {
        check.checked = false
    })
})


//--------print skills from IP modal in IP div
function updateIPdiv() {
    const skills = document.querySelectorAll('.grr');
    const addAbilitiesArea = document.getElementById('addAbilitiesArea')
    addAbilitiesArea.innerHTML = ''
    for(let i = 0; i < skills.length; i++) {
        let eachInput = skills[i].firstElementChild.value
        if(eachInput != '') {
            let parent = skills[i].parentElement
            let eachIP = parent.children[2].firstElementChild.value
            let eachTotal = parent.children[3].firstElementChild.value

            // for special abilities
            if(parent.firstElementChild.classList.contains('specialAbilityInput')) {
                let skillName = parent.firstElementChild.firstElementChild.firstElementChild.value;
                const div = document.createElement('div')
                div.style.marginBottom='8px';
                div.innerHTML = `
                    <div class="row">
                        <div class="col-4">
                            <small>${skillName}</small>
                        </div>
                        <div class="col-2">
                            <small>LVL:  ${eachInput}</small>
                        </div>
                        <div class="col-2">
                            <small>IP:  ${eachIP}</small>
                        </div>
                        <div class="smPlusBtn col-1 plusIP" style="padding: 0;">+</div>
                        <div class="col-3">
                            <small>Total:  ${eachTotal}</small>
                        </div>
                    </div>`
                addAbilitiesArea.appendChild(div)
            } 
            // for expert, play, ma...
            else if(parent.firstElementChild.firstElementChild.innerText != '' && parent.firstElementChild.firstElementChild.nextElementSibling) {
                let skillName = parent.firstElementChild.firstElementChild.innerText;
                let element = parent.firstElementChild.firstElementChild;
                let value = element.nextElementSibling.value
                const div = document.createElement('div')
                div.style.marginBottom='8px';
                div.innerHTML = `
                    <div class="row">
                        <div class="col-4">
                            <small>${skillName}: ${value}</small>
                        </div>
                        <div class="col-2">
                            <small>LVL:  ${eachInput}</small>
                        </div>
                        <div class="col-2">
                            <small>IP:  ${eachIP}</small>
                        </div>
                        <div class="smPlusBtn col-1 plusIP" style="padding: 0;">+</div>
                        <div class="col-3">
                            <small>Total:  ${eachTotal}</small>
                        </div>
                    </div>`
                addAbilitiesArea.appendChild(div)
            } 
            // for filled in skills
            else if(parent.firstElementChild.firstElementChild.innerText == '') {
                let skillName = parent.firstElementChild.firstElementChild.value;
                const div = document.createElement('div')
                div.style.marginBottom='8px';
                div.innerHTML = `
                    <div class="row">
                        <div class="col-4">
                            <small>${skillName}</small>
                        </div>
                        <div class="col-2">
                            <small>LVL:  ${eachInput}</small>
                        </div>
                        <div class="col-2">
                            <small>IP:  ${eachIP}</small>
                        </div>
                        <div class="smPlusBtn col-1 plusIP" style="align-content: center;">+</div>
                        <div class="col-3">
                            <small>Total:  ${eachTotal}</small>
                        </div>
                    </div>`
                addAbilitiesArea.appendChild(div)
            } 
            // for named skills
            else if (parent.firstElementChild.firstElementChild.innerText != '') {
                let skillName = parent.firstElementChild.firstElementChild.innerText;
                const div = document.createElement('div')
                div.style.marginBottom='8px';
                div.innerHTML = `
                    <div class="row">
                        <div class="col-4">
                            <small>${skillName}</small>
                        </div>
                        <div class="col-2">
                            <small>LVL:  ${eachInput}</small>
                        </div>
                        <div class="col-2" style="display: inline;">
                            <small>IP:  ${eachIP}</small>
                        </div>
                        <div class="smPlusBtn col-1 plusIP" style="align-content: center;">+</div>
                        <div class="col-3">
                            <small>Total:  ${eachTotal}</small>
                        </div>
                    </div>`
                addAbilitiesArea.appendChild(div)  
            }
            
        }        
    }   
}

const generalIPPoolModal = document.getElementById('generalIPPoolTableDiv');
generalIPPoolModal.addEventListener('change', updateIPdiv)
generalIPPoolModal.addEventListener('change', addSkillsTotals)

//--------changing and adding to the general IP pool
const modalGeneralIp = document.getElementById('inputIp');
const generalIPAddAbilitiesArea = document.getElementById('showGeneralIPNumber');

modalGeneralIp.addEventListener('change', () => {
    generalIPAddAbilitiesArea.value = modalGeneralIp.value
})
generalIPAddAbilitiesArea.addEventListener('change', () => {
    modalGeneralIp.value =generalIPAddAbilitiesArea.value
})

function generalIPOnStart() {
    generalIPAddAbilitiesArea.value = modalGeneralIp.value;
}

//-------- +button for generalIP
const generalIPPlusBtn = document.getElementById("generalIPPlusBtn");
function plusOneGeneral() {
    generalIPAddAbilitiesArea.value++;
    modalGeneralIp.value = generalIPAddAbilitiesArea.value
}
generalIPPlusBtn.addEventListener('click', () => {
    plusOneGeneral()
})

//--------+button for specific IP
function plusOneIPStart() {
    const plusIPBtns = document.querySelectorAll('.plusIP');
    const skills = document.getElementById('allSkills').getElementsByTagName('tr');

    plusIPBtns.forEach((ipBtn) => {
        ipBtn.addEventListener('click', () => {
            let thisSkill = ipBtn.previousElementSibling.previousElementSibling.previousElementSibling.innerText 
            for(let i = 0; i < skills.length; i++) {
                
                if (skills[i].firstElementChild.classList.contains('specialAbilityInput')) {
                    let answer = skills[i].firstElementChild.firstElementChild.firstElementChild.value
                    if(answer == thisSkill) {
                        let IPnumber = skills[i].firstElementChild.nextElementSibling.nextElementSibling.firstElementChild
                        IPnumber.value++
                        let theIP = ipBtn.previousElementSibling
                        theIP.innerHTML = `<small>IP: ${IPnumber.value}</small>`
                    }
                } else if (skills[i].firstElementChild.innerText == '*expert'||skills[i].firstElementChild.innerText == '*play'||skills[i].firstElementChild.innerText == '*language'||skills[i].firstElementChild.innerText == 'M.A.') {
                    let answer1 = skills[i].firstElementChild.firstElementChild
                    let answer2 = answer1.nextElementSibling
                    let answer = answer1.innerHTML + ': ' + answer2.value
                    if(answer == thisSkill) {
                        let IPnumber = skills[i].firstElementChild.nextElementSibling.nextElementSibling.firstElementChild
                        IPnumber.value++
                        let theIP = ipBtn.previousElementSibling
                        theIP.innerHTML = `<small>IP: ${IPnumber.value}</small>`
                    }
                } else if (skills[i].firstElementChild.innerText == '') {
                    let answer = skills[i].firstElementChild.firstElementChild.value
                    if(answer == thisSkill) {
                        let IPnumber = skills[i].firstElementChild.nextElementSibling.nextElementSibling.firstElementChild
                        IPnumber.value++
                        let theIP = ipBtn.previousElementSibling
                        theIP.innerHTML = `<small>IP: ${IPnumber.value}</small>`
                    }
                } else {
                    let answer = skills[i].firstElementChild.innerText
                    if(answer == thisSkill) {
                        let IPnumber = skills[i].firstElementChild.nextElementSibling.nextElementSibling.firstElementChild
                        IPnumber.value++
                        let theIP = ipBtn.previousElementSibling
                        theIP.innerHTML = `<small>IP: ${IPnumber.value}</small>`
                    }
                }  
                
            } 
        }
        
        )
    })
}

//--------choosing special ability class from drop down menu
const specialAbilityClassOptions = document.querySelectorAll('.dropdown-item')
specialAbilityClassOptions.forEach((specialAbilityClass, index) => {
    specialAbilityClass.addEventListener('click', () => {
        let levelInput = specialAbilityClass.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild
        let classes = ['attr', 'body', 'cool', 'emp', 'int', 'ref', 'tech', 'attr', 'body', 'cool', 'emp', 'int', 'ref', 'tech']
        levelInput.classList.remove('int', 'cool', 'emp', 'ref', 'attr', 'body', 'tech')
        let newClass = classes[index]
        levelInput.classList.add(`${newClass}`)
        addSkillsTotals()
    })
})


//--------adding totals for IP
function addSkillsTotals() {
    const intMain = document.getElementById('statsInt1');
    const coolMain = document.getElementById('statsCool1');
    const empMain = document.getElementById('statsEmp1');
    const refMain = document.getElementById('statsRef1');
    const attrMain = document.getElementById('statsAttr1');
    const bodyMain = document.getElementById('statsBody1');
    const techMain = document.getElementById('statsTech1');
    const intEach = document.querySelectorAll('.int');
    const coolEach = document.querySelectorAll('.cool');
    const empEach = document.querySelectorAll('.emp');
    const refEach = document.querySelectorAll('.ref');
    const attrEach = document.querySelectorAll('.attr');
    const bodyEach = document.querySelectorAll('.body');
    const techEach = document.querySelectorAll('.tech');

    for(let i = 0; i < intEach.length; i++) {
        if(intEach[i].value != ''){
        if(intMain.nextElementSibling.nextElementSibling.value != '') {
            let total1 = parseInt(intMain.nextElementSibling.nextElementSibling.value) + parseInt(intEach[i].value)
            intEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total1
        } else {
            let total1 = parseInt(intMain.value) + parseInt(intEach[i].value)
            intEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total1
        }
    }}
    for(let i = 0; i < coolEach.length; i++) {
        if(coolEach[i].value != ''){
        if(coolMain.nextElementSibling.nextElementSibling.value != '') {
            let total2 = parseInt(coolMain.nextElementSibling.nextElementSibling.value) + parseInt(coolEach[i].value)
            coolEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        } else {
            let total2 = parseInt(coolMain.value) + parseInt(coolEach[i].value)
            coolEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        }
    }}
    for(let i = 0; i < empEach.length; i++) {
        if(empEach[i].value != ''){
        if(empMain.nextElementSibling.nextElementSibling.value != '') {
            let total2 = parseInt(empMain.nextElementSibling.nextElementSibling.value) + parseInt(empEach[i].value)
            empEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        } else {
            let total2 = parseInt(empMain.value) + parseInt(empEach[i].value)
            empEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        }
    }}
    for(let i = 0; i < refEach.length; i++) {
        if(refEach[i].value != ''){
        if(refMain.nextElementSibling.nextElementSibling.value != '') {
            let total2 = parseInt(refMain.nextElementSibling.nextElementSibling.value) + parseInt(refEach[i].value)
            refEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        } else {
            let total2 = parseInt(refMain.value) + parseInt(refEach[i].value)
            refEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        }
    }}
    for(let i = 0; i < attrEach.length; i++) {
        if(attrEach[i].value != ''){
        if(attrMain.nextElementSibling.nextElementSibling.value != '') {
            let total2 = parseInt(attrMain.nextElementSibling.nextElementSibling.value) + parseInt(attrEach[i].value)
            attrEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        } else {
            let total2 = parseInt(attrMain.value) + parseInt(attrEach[i].value)
            attrEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        }
    }}
    for(let i = 0; i < bodyEach.length; i++) {
        if(bodyEach[i].value != ''){
        if(bodyMain.nextElementSibling.nextElementSibling.value != '') {
            let total2 = parseInt(bodyMain.nextElementSibling.nextElementSibling.value) + parseInt(bodyEach[i].value)
            bodyEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        } else {
            let total2 = parseInt(bodyMain.value) + parseInt(bodyEach[i].value)
            bodyEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        }
    }}
    for(let i = 0; i < techEach.length; i++) {
        if(techEach[i].value != ''){
        if(techMain.nextElementSibling.nextElementSibling.value != '') {
            let total2 = parseInt(techMain.nextElementSibling.nextElementSibling.value) + parseInt(techEach[i].value)
            techEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        } else {
            let total2 = parseInt(techMain.value) + parseInt(techEach[i].value)
            techEach[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild.value = total2
        }
    }}


    updateIPdiv()

}

//--------toggling the invisible class
const cyberDeckDiv = document.getElementById('cyberDeckDiv')
const cyberDeckTable = document.getElementById('cyberDeckTable')
cyberDeckDiv.addEventListener('click', (e) => {
    cyberDeckTable.classList.toggle('invisible')
})

const programLabelDiv = document.getElementById('programLabelDiv')
const programTableDiv = document.getElementById('programTableDiv')
programLabelDiv.addEventListener('click', (e) => {
    programTableDiv.classList.toggle('invisible')
})

//--------turn the data from the inputs into a blob in json format
function saveButton(e) {
    const form = document.getElementById("form")   
    const formEntries = new FormData(form).entries();
    const formData = Object.assign(...Array.from(formEntries, ([name, value]) => ({[name]: value})));    

    const makeFile = JSON.stringify(formData)    
    var a = document.createElement("a")
    a.href = URL.createObjectURL(
        new Blob([makeFile], {type:"application/json"})
    )
    let characterName = document.getElementById('character').value
    a.download = `${characterName}.json`
    a.click()
    console.log(formData);
}

//--------choosing the file and accessing the contents
const fileSelector = document.getElementById('selectedFile'); //get the element by id of the input

fileSelector.addEventListener('change', () => {
    const fr = new FileReader();
    fr.readAsText(selectedFile.files[0]);
    fr.addEventListener('load', () => {

        const json = fr.result;

        //putting the values in the DOM

        try {
            const thing = JSON.parse(json);
            for (const property in thing) {
            
                document.getElementById(property).value = `${thing[property]}`;
            }
            changeFinances()
            updateIPdiv()
            addWeaponRow()
            addMartialArtsRow()
            addPerksRow()
            addPsychRow()
            generalIPOnStart()
            addSkillsTotals()
            plusOneIPStart()
    
            //updating the checkboxes
            for (var key in thing) {
                if (thing[key] === "on") {
                  document.getElementById(key).checked = true;
                }
            }

        }catch(err) {
            alert('The file chosen is not the correct file, please try again');
        }
    })
})


//--------ask before leaving site
window.addEventListener('beforeunload', (event) => {
    event.returnValue = `Are you sure you want to leave?`;
  });
