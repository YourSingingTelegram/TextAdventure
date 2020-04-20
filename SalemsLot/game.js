const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
  
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
  // setInterval(function(){
  //     const button = document.createElement('button')
  //     button.innerText = "Run Away";
  //     button.classList.add('btn');
  //     optionButtonsElement.appendChild(button)
  // },1000);
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You get a call from your best friend Robert that you need to come back to your childhood town, Salems Lot. He tells you something bad is going on there and he needs help. You hop in your car with nothing but a bag of rasins, a bottle of water, a leather pouch, and a gold locket your wife gave you. Once you arrive in Salem Lot, you decide to look around before heading to the place Robert said to meet him, Ruxby Park.',
    options: [
      {
        text: 'Go to the Jameston Bar.',
        nextText: 2
      },
    
      {
        text: 'Go to the bookstore.',
        nextText: 3
      },
      
      {
        text: 'Go to the pawnshop.',
        nextText: 4
      },
      
      {
        text: 'Go to the Salems Lot Memorial fountain.',
        nextText: 5
      },
      
      {
        text: 'Go to Ruxby Park.',
        nextText: 6
      }
    ]
  },{
    id: 2,
    text: 'The bar appears to be closed down. You enter and have nostalgic feelings. Salems Lot was always a small town, but now its a shell of a ghost town.',
    options: [
      {
        text: 'Go to the Jameston Bar.',
        nextText: 2
      },
    
      {
        text: 'Go to the bookstore.',
        nextText: 3
      },
      
      {
        text: 'Go to the pawnshop.',
        nextText: 4
  
      }
    ]
  }












];

startGame();