const Attributes = class {
    constructor(attribute_type, attribute_data) {
        if (attribute_type == "sleeve") {
            this.strength = attribute_data["strength"]
            this.perception = attribute_data["perception"]
            console.log("Attributes Type:", attribute_type, "Loaded");
        } else if (attribute_type == "dhf") {
            this.empathy = attribute_data["empathy"]
            this.willpower = attribute_data["willpower"]
            this.acuity = attribute_data["acuity"]
            this.intelligence = attribute_data["intelligence"]
            console.log("Attributes Type:", attribute_type, "Loaded");
        } else {
            console.log();
        };
    }
};

const DHF = class {
    constructor(dataset) {
        this.attributes = new Attributes("dhf", dataset);
    }
};

const Sleeve = class {
    constructor(sleeve_type, dataset) {
        this.sleeve_type = sleeve_type
        this.attributes = new Attributes("sleeve", dataset);
    }
};

const Archetype = class {
    constructor(sleeve_type, archetype_name) {
        this.sleeve_type = sleeve_type
        this.name = archetype_name;
        this.dhf = null;
        this.sleeve = null;
        this.set_dhf_attributes = function() {
            if (sleeve_type != null) {
                this.sleeve_type = sleeve_type
            }
            if (this.name == "civilian") {
                if (sleeve_type == null) {
                    this.sleeve_type = "birth"
                }
                this.dhf = {
                    "empathy": {
                        "diplomacy": [1, "d8"], 
                        "expression": [1, "d8"], 
                        "read_person": [1, "d8"]
                    }, 
                    "willpower": {
                        "composure": [1, "d8"], 
                        "discipline": [1, "d8"], 
                        "intimidation": [1, "d8"]
                    }, 
                    "acuity": {
                        "data_analysis": [1, "d8"], 
                        "data_engineering": [1, "d8"], 
                        "digital_networking": [1, "d8"], 
                        "investigation": [1, "d8"], 
                        "mechanics": [1, "d8"], 
                        "navigation": [1, "d8"], 
                        "pilot": [1, "d8"], 
                        "survival": [1, "d8"]
                    }, 
                    "intelligence": {
                        "bureaucracy": [1, "d8"], 
                        "cultures": [1, "d8"], 
                        "engineering": [1, "d8"], 
                        "geography": [1, "d8"], 
                        "history": [1, "d8"], 
                        "science": [1, "d8"], 
                        "medicine": [1, "d8"]
                    }
                };
                this.sleeve = {
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

            } else if (this.name == "socialite") {
                if (sleeve_type == null) {
                    this.sleeve_type = "birth"
                }
                this.dhf = {
                    "empathy": {
                        "diplomacy": [1, "d8"], 
                        "expression": [1, "d8"], 
                        "read_person": [1, "d8"]
                    }, 
                    "willpower": {
                        "composure": [1, "d8"], 
                        "discipline": [1, "d8"], 
                        "intimidation": [1, "d8"]
                    }, 
                    "acuity": {
                        "data_analysis": [1, "d8"], 
                        "data_engineering": [1, "d8"], 
                        "digital_networking": [1, "d8"], 
                        "investigation": [1, "d8"], 
                        "mechanics": [1, "d8"], 
                        "navigation": [1, "d8"], 
                        "pilot": [1, "d8"], 
                        "survival": [1, "d8"]
                    }, 
                    "intelligence": {
                        "bureaucracy": [1, "d8"], 
                        "cultures": [1, "d8"], 
                        "engineering": [1, "d8"], 
                        "geography": [1, "d8"], 
                        "history": [1, "d8"], 
                        "science": [1, "d8"], 
                        "medicine": [1, "d8"]
                    }
                };
                this.sleeve = {
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

            } else if (this.name == "official") {
                if (sleeve_type == null) {
                    this.sleeve_type = "birth"
                }
                this.dhf = {
                    "empathy": {
                        "diplomacy": [1, "d8"], 
                        "expression": [1, "d8"], 
                        "read_person": [1, "d8"]
                    }, 
                    "willpower": {
                        "composure": [1, "d8"], 
                        "discipline": [1, "d8"], 
                        "intimidation": [1, "d8"]
                    }, 
                    "acuity": {
                        "data_analysis": [1, "d8"], 
                        "data_engineering": [1, "d8"], 
                        "digital_networking": [1, "d8"], 
                        "investigation": [1, "d8"], 
                        "mechanics": [1, "d8"], 
                        "navigation": [1, "d8"], 
                        "pilot": [1, "d8"], 
                        "survival": [1, "d8"]
                    }, 
                    "intelligence": {
                        "bureaucracy": [1, "d8"], 
                        "cultures": [1, "d8"], 
                        "engineering": [1, "d8"], 
                        "geography": [1, "d8"], 
                        "history": [1, "d8"], 
                        "science": [1, "d8"], 
                        "medicine": [1, "d8"]
                    }
                };
                this.sleeve = {
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

            } else if (this.name == "criminal") {
                if (sleeve_type == null) {
                    this.sleeve_type = "synth_low"
                }
                this.dhf = {
                    "empathy": {
                        "diplomacy": [1, "d8"], 
                        "expression": [1, "d8"], 
                        "read_person": [1, "d8"]
                    }, 
                    "willpower": {
                        "composure": [1, "d8"], 
                        "discipline": [1, "d8"], 
                        "intimidation": [1, "d8"]
                    }, 
                    "acuity": {
                        "data_analysis": [1, "d8"], 
                        "data_engineering": [1, "d8"], 
                        "digital_networking": [1, "d8"], 
                        "investigation": [1, "d8"], 
                        "mechanics": [1, "d8"], 
                        "navigation": [1, "d8"], 
                        "pilot": [1, "d8"], 
                        "survival": [1, "d8"]
                    }, 
                    "intelligence": {
                        "bureaucracy": [1, "d8"], 
                        "cultures": [1, "d8"], 
                        "engineering": [1, "d8"], 
                        "geography": [1, "d8"], 
                        "history": [1, "d8"], 
                        "science": [1, "d8"], 
                        "medicine": [1, "d8"]
                    }
                };
                this.sleeve = {
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

            } else if (this.name == "technician") {
                if (sleeve_type == null) {
                    this.sleeve_type = "birth"
                }
                this.dhf = {
                    "empathy": {
                        "diplomacy": [1, "d8"], 
                        "expression": [1, "d8"], 
                        "read_person": [1, "d8"]
                    }, 
                    "willpower": {
                        "composure": [1, "d8"], 
                        "discipline": [1, "d8"], 
                        "intimidation": [1, "d8"]
                    }, 
                    "acuity": {
                        "data_analysis": [1, "d8"], 
                        "data_engineering": [1, "d8"], 
                        "digital_networking": [1, "d8"], 
                        "investigation": [1, "d8"], 
                        "mechanics": [1, "d8"], 
                        "navigation": [1, "d8"], 
                        "pilot": [1, "d8"], 
                        "survival": [1, "d8"]
                    }, 
                    "intelligence": {
                        "bureaucracy": [1, "d8"], 
                        "cultures": [1, "d8"], 
                        "engineering": [1, "d8"], 
                        "geography": [1, "d8"], 
                        "history": [1, "d8"], 
                        "science": [1, "d8"], 
                        "medicine": [1, "d8"]
                    }
                };
                this.sleeve = {
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

            } else if (this.name == "soldier") {
                if (sleeve_type == null) {
                    this.sleeve_type = "synth_med"
                }
                this.dhf = {
                    "empathy": {
                        "diplomacy": [1, "d8"], 
                        "expression": [1, "d8"], 
                        "read_person": [1, "d8"]
                    }, 
                    "willpower": {
                        "composure": [1, "d8"], 
                        "discipline": [1, "d8"], 
                        "intimidation": [1, "d8"]
                    }, 
                    "acuity": {
                        "data_analysis": [1, "d8"], 
                        "data_engineering": [1, "d8"], 
                        "digital_networking": [1, "d8"], 
                        "investigation": [1, "d8"], 
                        "mechanics": [1, "d8"], 
                        "navigation": [1, "d8"], 
                        "pilot": [1, "d8"], 
                        "survival": [1, "d8"]
                    }, 
                    "intelligence": {
                        "bureaucracy": [1, "d8"], 
                        "cultures": [1, "d8"], 
                        "engineering": [1, "d8"], 
                        "geography": [1, "d8"], 
                        "history": [1, "d8"], 
                        "science": [1, "d8"], 
                        "medicine": [1, "d8"]
                    }
                };
                this.sleeve = {
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
        this.set_dhf_attributes();
    }
};

const BankAccount = class {
    constructor(start_balance, credit_limit) {
        this.balance = start_balance;
        this.credit_limit = credit_limit;
    }
};

const Player = class {
    constructor(name, archetype) {
        this.name = name;
        this.archetype = new Archetype(archetype);
        this.dhf = new DHF(this.archetype.dhf);
        this.sleeve = new Sleeve(this.archetype.sleeve_type, this.archetype.sleeve);
        this.bank_account = new BankAccount(100, 0);
    }
};
