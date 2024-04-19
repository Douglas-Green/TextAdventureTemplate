export const game = {
  currentState: "start",
  states: {
    start: {
      description: "You find yourself lost in a mysterious dungeon. There appears to be two doors in front of you. Which door do you choose?",
      fearLevel: "low",
      options: [
        { buttonText: "Open Door 1", nextState: "door1"},
        { buttonText: "Open Door 2", nextState: "door2"}
      ]
    },
    door1: {
      description: "Upon opening the door on the left, you realize that this place is much more than just a dungeon. The smell of decaying flesh permeates the area of the filthy room you are in now. Now you can see that there is a latter and a trap door on the floor. Which do you choose?",
      fearLevel: "medium",
      options: [
        { buttonText: "Climb the Ladder", nextState: "ladder"},
        { buttonText: "Open the Trap Door", nextState: "trapDoor"}
      ]
    },
    door2: {
      description: "As the creeking of the door on the right stops, your eyes must be playing tricks on you. You see through the darkness of the room a human figure laid naked on the floor. a chain tightly gripping their neck and feet. So much so blood has began to drain from all 3 locations. Slight moans could be heard from the figure. what do you do?",
      fearLevel: "high",
      options: [
        { buttonText: "Assist the figure", nextState: "assist"},
        { buttonText: "Leave the figure", nextState: "leave"},
      ]
    },
    ladder: {
      description: "As you begin to climb the ladder you can hear a faint moaning sound close by. You reach the top of the ladder and find yourself in a vast room which overlooks not just the room you climbed out of but many more rooms. row after row for as far as you can see. You move towards the moaning sound but quickly realize that it isn't just one moaning sound. It's many. As the horror washes over your mind, you can hear another ladder being climbed. What do you do?",
      fearLevel: "high",
      options: [
        { buttonText: "Climb back down", nextState: "scaredLadder"},
        { buttonText: "Investigate the sound", nextState: "investigate"}
      ]
    },
    trapDoor: {
      description: "You fight to open the trap door but it's stuck. Looking around the room you see a crowbar. As you pick the crowbar up, you quickly realize that the crowbar must have recently been used to hit something as it is covered in blood. You pry the trap door open and scurrying sounds could be heard as the rats run for the hills. The stench is unbearable. You drop down into what appears to be a drainage system. Which way should you go?",
      fearLevel: "low",
      options: [
        { buttonText: "Go straight", nextState: "straight"},
        { buttonText: "Go backwards", nextState: "backwards"}
      ]
    },// PICKUP THE STORY TELLING HERE. TESTING PURPOSES
    scaredLadder: {
      description: "You quickly climb back down the ladder and find yourself back in the room with the ladder and trap door. You can hear the ladder being climbed again. What do you do?",
      fearLevel: "high",
      options: [
        { buttonText: "Climb the ladder", nextState: "ladder"},
        { buttonText: "Open the trap door", nextState: "trapDoor"}
      ]
    },
    investigate: {
      description: "You quickly climb back down the ladder and find yourself back in the room with the ladder and trap door. You can hear the ladder being climbed again. What do you do?",
      fearLevel: "medium",
      options: [
        { buttonText: "Climb the ladder", nextState: "ladder"},
        { buttonText: "Open the trap door", nextState: "trapDoor"}
      ]
    },
    assist: {
      description: "You quickly climb back down the ladder and find yourself back in the room with the ladder and trap door. You can hear the ladder being climbed again. What do you do?",
      fearLevel: "high",
      options: [
        { buttonText: "Climb the ladder", nextState: "ladder"},
        { buttonText: "Open the trap door", nextState: "trapDoor"}
      ]
    },
    leave: {
      description: "You quickly climb back down the ladder and find yourself back in the room with the ladder and trap door. You can hear the ladder being climbed again. What do you do?",
      fearLevel: "low",
      options: [
        { buttonText: "Climb the ladder", nextState: "ladder"},
        { buttonText: "Open the trap door", nextState: "trapDoor"}
      ]
    },
    straight: {
      description: "You quickly climb back down the ladder and find yourself back in the room with the ladder and trap door. You can hear the ladder being climbed again. What do you do?",
      fearLevel: "low",
      options: [
        { buttonText: "Climb the ladder", nextState: "ladder"},
        { buttonText: "Open the trap door", nextState: "trapDoor"}
      ]
    },
    backwards: {
      description: "You quickly climb back down the ladder and find yourself back in the room with the ladder and trap door. You can hear the ladder being climbed again. What do you do?",
      fearLevel: "high",
      options: [
        { buttonText: "Climb the ladder", nextState: "ladder"},
        { buttonText: "Open the trap door", nextState: "trapDoor"}
      ]
    },
  },
  moveToState: function (nextState) {
      this.currentState = nextState;
    }
};

