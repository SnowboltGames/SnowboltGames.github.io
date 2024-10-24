const DHF = class {
    constructor() {

    }
};

const Sleeve = class {
    constructor() {
        
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
    }
};
