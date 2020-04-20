const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
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
    text: 'You wake up feeling hungry, you decide you need to buy milk.',
    options: [
      {
        text: "Go to Joe's milk store",
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: "Go to Mo's milk store",
        nextText: 3
      },
      {
        text: "Buy milk later",
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: "You are at Joe's milk store.",
    options: [
      {
        text: 'Buy milk',
        // requiredState: (currentState) => currentState.blueGoo,
        setState: { milk: true },
        nextText: 5
      },
      {
        text: 'Buy orange juice',
        // requiredState: (currentState) => currentState.blueGoo,
        setState: { oj: true },
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: "At Mo's Store. You see a lunatic running through the aisles. ",
    options: [
      {
        text: 'Walk away from store',
        nextText: 13
      },
      {
        text: 'Throw a can of soup at the lunatic',
        nextText: 13
      },
      {
        text: 'Try to reason with the lunatic',
        nextText: 14
      },
      {
        text: 'Call the police',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You become to weak to continue and starve to DEATH!',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'The cashier asks if you would like to buy cigarettes but you are underage. ',
    options: [
      {
        text: 'Buy Cigarettes',
        nextText: 6
      },
      {
        text: 'Say, "No Way Man"',
        nextText: 9
      } 
    ]
  },
  {
    id: 6,
    text: 'The police burst into the shop and start yelling. Then they transform into ALIENS!!',
    options: [
      {
        text: 'Run!!',
        nextText: 8
      },
      {
        text: 'Cry!!',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'The aliens grab you and take you back to their ship where they eat you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'You are too slow for the advanced life forms. The aliens grab you and take you back to their ship where they eat you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'In anger, he grabs a lighter from the shelf and burns down his shop. Blaming it all on you. He sues you for $14.00.',
    options: [
      {
        text: 'Accept the Lawsuit and pay $14.00',
        nextText: 10
      },
      {
        text: 'Be petty and only pay $13.00',
        nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'You continue on with your life, well nurished and ready to attack this day. ',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'He screems at you with bitter anger for the remainder until the police show up and take you to jail.',
    options: [
      {
        text: 'Go to Jail.',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text: 'As they are driving you to jail, the cops turn into aliens and take you to their ship where they devour you.',
    options: [
      {
        text: 'You dead. Restart.',
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: 'He charges at you with wild eyes. You try to get away but he is too crazy and starts biting you. He continues biting you until you are DEAD.',
    options: [
      {
        text: 'Restart.',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: 'The lunatic calms down long enough to tell you that he is upset because they are all out of milk.',
    options: [
      {
        text: 'Become friends.',
        nextText: 15
      },
      {
        text: 'Decide to be selfish and leave the lunatic to find milk alone.',
        nextText: 16
      }
    ]
  },
  {
    id: 15,
    text: 'You go on an epic quest with the "not so" lunatic to find milk.',
    options: [
      {
        text: 'You live happily ever after. Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 16,
    text: 'As you walk away, you realize that you are too weak to continue and DIE!',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  }
]

startGame()