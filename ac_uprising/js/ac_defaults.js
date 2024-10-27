export default class RelacementSleeve {
    constructor(sleeve_value) {
        if (sleeve_value == 0) {
            this.sleeve_type = "natal";
            this.sleeve_data = {
                "strength": {
                    "athletics": [1, "d8"], 
                    "brawl": [1, "d8"], 
                    "endurance": [1, "d8"], 
                    "melee_combat": [1, "d8"], 
                    "toughness": [1, "d8"]
                }, 
                "perception": {
                    "detection": [1, "d8"], 
                    "d_energy_weapons": [1, "d8"], 
                    "firearms": [1, "d8"], 
                    "search": [1, "d8"], 
                    "stealth": [1, "d8"], 
                    "throw": [1, "d8"]
                }
            };
        } else if (sleeve_value == 1) {
            this.sleeve_type = "synth_low";
            this.sleeve_data = {
                "strength": {
                    "athletics": [1, "d8"], 
                    "brawl": [1, "d8"], 
                    "endurance": [1, "d8"], 
                    "melee_combat": [1, "d8"], 
                    "toughness": [1, "d8"]
                }, 
                "perception": {
                    "detection": [1, "d8"], 
                    "d_energy_weapons": [1, "d8"], 
                    "firearms": [1, "d8"], 
                    "search": [1, "d8"], 
                    "stealth": [1, "d8"], 
                    "throw": [1, "d8"]
                }
            };
        } else if (sleeve_value == 2) {
            this.sleeve_type = "synth_med";
            this.sleeve_data = {
                "strength": {
                    "athletics": [1, "d8"], 
                    "brawl": [1, "d8"], 
                    "endurance": [1, "d8"], 
                    "melee_combat": [1, "d8"], 
                    "toughness": [1, "d8"]
                }, 
                "perception": {
                    "detection": [1, "d8"], 
                    "d_energy_weapons": [1, "d8"], 
                    "firearms": [1, "d8"], 
                    "search": [1, "d8"], 
                    "stealth": [1, "d8"], 
                    "throw": [1, "d8"]
                }
            };
        } else if (sleeve_value == 3) {
            this.sleeve_type = "synth_high";
            this.sleeve_data = {
                "strength": {
                    "athletics": [1, "d8"], 
                    "brawl": [1, "d8"], 
                    "endurance": [1, "d8"], 
                    "melee_combat": [1, "d8"], 
                    "toughness": [1, "d8"]
                }, 
                "perception": {
                    "detection": [1, "d8"], 
                    "d_energy_weapons": [1, "d8"], 
                    "firearms": [1, "d8"], 
                    "search": [1, "d8"], 
                    "stealth": [1, "d8"], 
                    "throw": [1, "d8"]
                }
            };
        };
    };
};