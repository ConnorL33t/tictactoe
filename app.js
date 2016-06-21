function play(x){
  var choices = ['rock', 'paper', 'scissors','lizard','spock']
  var randI = Math.floor(Math.random() * choices.length)
  var compChoice = choices[randI]
  document.getElementById('rpsls').innerHTML = compChoice;
  if(x!=compChoice){console.log(x); console.log(compChoice)
    if(compChoice===choices[2]|| compChoice===choices[3] && x===choices[0]) {
      alert('you won')
    } else if((compChoice===choices[0] || compChoice===choices[4])&& x===choices[1]) {
      alert('you won')
    } else if((compChoice===choices[1] || compChoice===choices[3])&& x===choices[2]) {
      alert('you won')
    } else if((compChoice===choices[4] || compChoice===choices[1])&& x===choices[3]) {
      alert('you won')
    }else if((compChoice===choices[0] || compChoice===choices[2])&& x===choices[4]) {
      alert('you won')
    }else{alert('you lost')}
    
}else{
  alert('you tied');
}   
}