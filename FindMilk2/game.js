/*
* Find Milk 2
*
* Created by: Christian Ratliff, Mattliff
*/
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
        nextText: 17
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
    text: 'You leave the store and look around at the busy day.',
    options: [
      {
        text: 'Continue to search for milk.',
        nextText: 18
      },{
        text: 'Go home.',
        nextText: 19
      }
    ]
  },{
    id: 17,
    text: 'You leave the court and look around at the busy day.',
    options: [
      {
        text: 'Continue to search for milk.',
        nextText: 18
      },{
        text: 'Go home.',
        nextText: 19
      }
    ]
  },{
    id: 18,
    text: 'You pass by two stores that grab your attention, Wizards Edu. and The Pet Store',
    options: [
      {
        text: 'Go to the Wizards Edu. University.',
        nextText: 23
      },{
        text: 'Go to The Pet Store',
        nextText: 29
      }
    ]
  },{
    id: 19,
    text: 'You enter your house, but before you can find something to drink, the printer begins to rapidly shoot out papers and make loud noises.',
    options: [
      {
        text: 'Walk over.',
        nextText: 20
      },{
        text: 'Arm yourself with a fork',
        nextText: 21
      },{
        text: 'Arm yourself with a wooden stake',
        nextText: 21
      },{
        text: 'Arm yourself with a volleyball',
        nextText: 21
      },
    ]
  },{
    id: 20,
    text: 'The printer tells you that it came to life for revenge, because of all the times you took it for granted. It says that it wil take over all mankind, and then laughs.',
    options: [
      {
        text: 'Unplug Printer',
        nextText: 22
      }
    ]
  },{
    id: 21,
    text: 'The printer tells you that it came to life for revenge, because of all the times you took it for granted. It says that it wil take over all mankind, and then laughs. You try to use your weapon to beat it to death, but it barely makes a dent. In anger, the printer explodes itself and you in the process.',
    options: [
      {
        text: 'You have died. Restart.',
        nextText: -1
      },
    ]
  },{
    id: 22,
    text: 'The printer was surprised by your outside the box thinking, and you have succsessfully beat it.',
    options: [
      {
        text: 'Congratulations, you win! Play Again!',
        nextText: -1
      },
    ]
  },{
    id: 23,
    text: 'You enter the Wizards Edu. building and see a very large, bearded, old man reciting spells in front of a small crowd. He sees you and welcomes you in, telling you his name is Mr. Waldo, before handing you a wand.',
    options: [
      {
        text: 'Follow the instructions for spell casting.',
        nextText: 24
      },{
        text: 'Disobey and wave wand randomly while yelling gibberish.',
        nextText: 24
      }
    ]
  },{
    id: 24,
    text: 'Nothing happens, no magic has occured. In disappointment you continue to listen to Mr. Waldo. He puts a rat in front of each of the students, and tells you the spell to shrink things. He instucts you to try and shrink the rat.',
    options: [
      {
        text: 'Try to shrink rat.',
        nextText: 25
      },{
        text: 'Try to shrink the Mr. Waldo, and take over the class.',
        nextText: 26
      }
    ]
  },{
    id: 25,
    text: 'You successfully cause a magic beam to shoot out of the wand, but it misses the rat and hits into a mirror, which reflects it into an oven. This shrinks the oven and causes a gas leak, which starts a fire. As people rush out, the exit becomes blocked with fire.',
    options: [
      {
        text: 'Call 911',
        nextText: 27
      },{
        text: 'Try and use magic to clear the fire.',
        nextText: 28
      }
    ]
  },{
    id: 26,
    text: 'You shrink Mr. Waldo to the size of an ant, and then announce that you are the new teacher. The crowd silently obeys.',
    options: [
      {
        text: 'Congratulations! You win! Play again.',
        nextText: -1
      
      }
    ]
  },{
    id: 27,
    text: 'Firemen arrive and look like they are about to save you, but then they realize you are the person who spent a whole day unsuccessfully trying to find milk, and walk away.',
    options: [
      {
        text: 'You dead. Restart.',
        nextText: -1
      
      }
    ]
  },{
    id: 28,
    text: "You try to shrink the fire, but instead make the fire grow by accedent. How could you think you could stop a fire with magic if you can't even find milk.",
    options: [
      {
        text: 'You dead. Restart.',
        nextText: -1
      
      }
    ]
  },{
    id: 29,
    text: 'The Pet Store owner greets you before giving you three options for pets.',
    options: [
      {
        text: 'Purchase a Cat',
        nextText: 30
      
      },{
        text: 'Purchase a Dog',
        nextText: 37
      },{
        text: 'Purchase a Parrot',
        nextText: 40
      }
    ]
  },{
    id: 30,
    text: 'You take the cat home, and realize you need to feed it. All the more reason to buy milk.',
    options: [
      {
        text: "Give the cat yarn so it isn't restless.",
        nextText: 31
      
      },{
        text: 'Buy milk as quickly as you can; start shopping for it online.',
        nextText: 32
  
        
      }
    ]
  },{
    id: 31,
    text: 'You watch as the cat plays with the yarn, and it is adorable. But suddenly the door bursts open right as the cat bumps over a vase. The neighbor lady who is always complaining about noise, is hit on the head and falls to the floor dead.',
    options: [
      {
        text: 'Report it to the police.',
        nextText: 33
      
      },{
        text: 'Try to cover it up.',
        nextText: 34
      }
    ]
  },{
    id: 32,
    text: 'You watch as the cat rolls around having fun, and it is adorable. But suddenly the door bursts open right as the cat bumps over a vase. The neighbor lady who is always complaining about noise, is hit on the head and falls to the floor dead.',
    options: [
      {
        text: 'Report it to the police.',
        nextText: 33
      
      },{
        text: 'Try to cover it up.',
        nextText: 34
      }
    ]
  },{
    id: 33,
    text: 'After an hour or two, the police burst in the house and start yelling. Suddenly they begin to transform into ALIENS!! Just as they are about to grab you, they see the cat and run away screaming. You look back at your cat and pet her. You live the rest of your days with her and happily ever after.',
    options: [
      {
        text: 'Congratulations! You win! Play again.',
        nextText: -1
      }
    ]
  },{
    id: 34,
    text: 'You wrap the body with a few old towels, as the cat rolls around ignorant to the murder. You ponder where to hide the body.',
    options: [
      {
        text: 'Hide it in the dumpster.',
        nextText: 35
      },{
        text: 'Hide it in a hole in the ground.',
        nextText: 36
      }
    ]
  },{
    id: 35,
    text: 'You hide it in the dumpster, and cover the body up with trash, which mostly covers up the smell. Once you are sure the police will never find it, you return to your cat. You live the rest of your days with her and happily ever after.',
    options: [
      {
        text: 'Congratulations! You win! Play again.',
        nextText: -1
      }
  
    ]
  },{
    id: 36,
    text: "You hide it in the ground, and cover the body with dirt, which mostly hides the body, leaving only a small mound of dirt. Even though it doesn't cover up the smell, you feel confident that the police won't find it. Two days later, the police burst in the house and start yelling. Then the begin to transform into ALIENS!! They take you to their ship where they eat you.",
    options: [
      {
        text: 'You dead. Restart.',
        nextText: -1
      }
  
    ]
  },{
    id: 37,
    text: 'You are walking home with your dog when you are confronted by a man asking for you to buy healing crystals.',
    options: [
      {
        text: 'Buy healing crystal for $100',
        nextText: 38
      },{
        text: 'Walk away.',
        nextText: 39
      }
  
    ]
  },{
    id: 38,
    text: 'As you pull out your wallet, the man grabs it from you and runs off. With no money, keys, or ID, you become homeless. You and your dog spend the rest of your days sitting on the side of the rode as you beg for money.',
    options: [
      {
        text: "You lose. Restart.",
        nextText: -1
      }
    ]
  },{
    id: 39,
    text: "In anger the man beats you to the ground and grabs your wallet. Your dog bites him, but it doesn't stop him from running off with your wallet. With no money, keys, or ID, you become homeless. You and your dog spend the rest of your days sitting on the side of the rode as you beg for money.",
    options: [
      {
        text: "You lose. Restart.",
        nextText: -1
      }
    ]
  },{
    id: 40,
    text: 'You take the parrot home and immediatley call your friend to let them know of the adoption. She is very excited and asks if you would like to have a dinner party at your house with all your friends to celebrate. You agree, and its only until later that you realize you are not prepared in the slightest.',
    options: [
      {
        text: "Clean up the clothes littered around the house.",
        nextText: 41
      },{
        text: "Put flowers in the vase and put up decorations.",
        nextText: 42
      }
    ]
  },{
    id: 41,
    text: 'While you are cleaning up the dirty laundry, the parrot knocks over the vase, shattering it.',
    options: [
      {
        text: "Continue to clean up the clothes littered around the house.",
        nextText: 43
      },{
        text: "Clean up the broken vase.",
        nextText: 43
      }
    ]
  },{
    id: 42,
    text: 'While you are tending to the vase, the parrot poops on the dirty laundry, ruining it, and covering the floor in poop.',
    options: [
      {
        text: "Continue to put up decor.",
        nextText: 43
      },{
        text: "Clean the poop and laundry.",
        nextText: 43
      }
    ]
  },{
    id: 43,
    text: 'As you are cleaning the mess, your friend walks in and remarks that the place could use some cleaning, but mostly ignores it. You still have time to set up dinner before everyone else arrives.',
    options: [
      {
        text: "Make sushi.",
        nextText: 44
      },{
        text: "Make Banana Foster.",
        nextText: 45
      }
    ]
  },{
    id: 44,
    text: "As everyone arrives, the party seems lively and enjoyable. Chit-chat happens, and when its time for dinner everyone seems exited. But suddenly, as everyone is eating, you notice a lady choking. Someone yells: She's allergic to fish! As everyone causes a commotion, the parrot flies out the window, likely to find a new home.",
    options: [
      {
        text: "You lose. Restart.",
        nextText: -1
      }
    ]
  },{
    id: 45,
    text: 'As everyone arrives, the party seems lively and enjoyable. Chit-chat happens, and when its time for dinner everyone seems exited. But suddenly, as everyone is eating, a candle falls on someones food and lights it on fire. The table cloth catches fire, and as everyone causes a commotion, the parrot flies out the window, likely to find a new home.',
    options: [
      {
        text: "You lose. Restart.",
        nextText: -1
      }
    ]
  }
  
 
]
startGame()