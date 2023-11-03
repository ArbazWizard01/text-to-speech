const textarea = document.querySelector("textarea");
const speechBtn = document.querySelector("button ");

function textToSpeech(text) {
  let utternance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utternance);
}

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textarea.value !== "") {
    textToSpeech(textarea.value);
  }
});


//if want all voice use below code
// var synth = window.speechSynthesis;
// var inputForm = document.querySelector('form');
// var inputTxt = document.querySelector('textarea');
// var voiceSelect = document.querySelector('select');
// var voices = [];
// function populateVoiceList() {
//   voices = synth.getVoices();
//   for (i = 0; i < voices.length; i++) {
//     var option = document.createElement('option');
//     option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
// if (voices[i].default) {
//       option.textContent += ' -- DEFAULT';
//     }
//     option.setAttribute('data-lang', voices[i].lang);
//     option.setAttribute('data-name', voices[i].name);
//     voiceSelect.appendChild(option);
// }}
// populateVoiceList();
// if (speechSynthesis.onvoiceschanged !== undefined) {
//   speechSynthesis.onvoiceschanged = populateVoiceList;
// }
// inputForm.onsubmit = function(event) {
//   event.preventDefault();
//  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
//   var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
//   for (i = 0; i < voices.length; i++) {
//     if (voices[i].name === selectedOption) {
//       utterThis.voice = voices[i];
//     }
//   }
//   synth.speak(utterThis);
//   inputTxt.blur();
// }
