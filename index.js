function scuberGreetingForFeet(val){
  if(val <= 400){
    return 'This one is on me!'
  } else if (val < 2000){
    return "That will be twenty bucks."
  } else if (val <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(descriptor){
  switch (descriptor) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you."
    default: 
      return 'Bye.'
  }
}