const AC_RPG = class {
    constructor() {
        this.player = null;
        this.map = null;
        this.load_map("earth_bay_city")
        console.log(this);
    };
    load_map(map_name) {
        this.map = map_name;
    };
};