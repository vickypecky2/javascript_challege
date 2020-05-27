// alert('hello');
// console.log('hello');  
// Challenge 1: Your Age in Days
function ageInDays() {
    let birthYear = prompt('What year were you born, dear friend?');
    let ageInManyDays = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInManyDays + ' days old.');
    h1.setAttribute('id', 'ageInDAys');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    // console.log(ageInManyDays);
}
function reset() {
    document.getElementById('flex-box-result').remove();
}