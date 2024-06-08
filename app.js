function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms ));
}

function age_calculator(){
    let current_year = new Date().getFullYear();
    return current_year - 2000;
}

async function insert_words(){

    let words_list = [String(age_calculator()),"a developer","a designer","a problem-solver"];
    let html_line = document.getElementById("dynamic-words");

    for(let i=0; i<4; i++){
        html_line.textContent = words_list[i];
        await sleep(1500)
        if(i == 3){
            //reset i back to -1. i++ will set it to 0 when checking the loop condition
            i=-1;
        }
    }

}

insert_words(); //TO DO loop the function call
