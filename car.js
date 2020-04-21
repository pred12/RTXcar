let command = document.getElementById("mainInput");
let oldCommand = document.getElementById("oldinput");
command.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        zoom();
    }
    return;
});
function zoom() {
    let started = false;
    console.log("Zoom Zoom Started")
    let command = document.getElementById("mainInput");
    let oldCommand = document.getElementById("oldinput");
    if (command.value === ">") {
        console.warn("value not given");
        oldCommand.innerHTML = "Information invaild ";
        return;
    } else if (command.value === ">Start" || command.value === ">start") {
      if(started){
        oldCommand.innerHTML = "Aready started!";
      } else{
        started = true;
        oldCommand.innerHTML = "Car started!";
      }
    } else if(command.value === ">Stop" || command.value === ">stop"){
      oldCommand.innerHTML = "Car stoped";
    } else if(command.value === ">Help" || command.value === ">help"){
      oldCommand.innerHTML = `
      Here is a list!
      - Start = starts da car
      - Stop = stops da car
      `
    }else{
      oldCommand.innerHTML = "I don't understand! Type >Help"
    }
    command.innerHTML = ">";
    return;
}
