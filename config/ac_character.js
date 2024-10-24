const Attributes = class {
    constructor(attribute_type, attribute_data) {
        if (attribute_type == "sleeve") {
            console.log(attribute_type, "PRINTED");
        } else if (attribute_type == "dhf") {
            console.log(attribute_type, "PRINTED");
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
}

const Character = class {
    constructor() {
        
    }
};

const Player = class {
    constructor(name, archetype) {
        this.name = name;
        this.archetype = new Archetype(archetype);
        this.dhf = new DHF({});
        this.sleeve = new Sleeve({});
        this.character = new Character();
    }
};
