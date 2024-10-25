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
    constructor(dataset) {
        this.attributes = new Attributes("sleeve", dataset);
    }
};

const Archetype = class {
    constructor(archetype_name) {
        this.name = archetype_name;
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
        this.dhf = new DHF({"empathy": 0, "willpower": 0, "acuity": 0, "intelligence": 0});
        this.sleeve = new Sleeve({"strength": 0, "perception": 0});
        this.bank_account = new BankAccount(100, 0);
    }
};
