//displays the contact div
function open_popup(){

    let contact_div = document.getElementById("contact-popup");
    contact_div.style.display = "block"; //none to hide, block to show

}

function close_popup(){
    let contact_div = document.getElementById("contact-popup");
    contact_div.style.display = "none";
}

function alert_message(){
    alert(document.getElementById("message-field").value);
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms ));
}

function age_calculator(){
    let current_year = new Date().getFullYear();
    return current_year - 2000;
}

async function insert_words(){

    let words_list = [String(age_calculator()),"designer","developer","problem-solver"];
    let html_line = document.getElementById("dynamic-words");
    let html_age_line = document.getElementById("age-line");
    let html_age_sentence = document.getElementById("age_sentence");
    let html_dynamic_sentence = document.getElementById("dynamic-sentence");

    for(let i=0; i<4; i++){
        html_line.textContent = "";
        html_age_line.textContent = "";

        for(j=0; j<words_list[i].length; j++){

            if(words_list[i] == "24"){
                html_dynamic_sentence.style.display = "none";
                html_age_sentence.style.display = "block"; //none to hide, block to show
                html_age_line.innerHTML += words_list[i].charAt(j);
                await sleep(70);
            }
            else{
                html_age_sentence.style.display = "none";
                html_dynamic_sentence.style.display = "block";
                html_line.innerHTML += words_list[i].charAt(j);
                await sleep(70);
            }

        }
       // html_line.textContent = words_list[i];
        await sleep(1500)
        if(i == 3){
            //reset i back to -1. i++ will set it to 0 when checking the loop condition
            i=-1;
        }
    }

}

insert_words(); //TO DO loop the function call
