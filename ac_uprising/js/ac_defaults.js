const RelacementSleeve = class {
    constructor(sleeve_value) {
        if (sleeve_value == 0) {
            this.sleeve_type = "natal";
        } else if (sleeve_value == 1) {
            this.sleeve_type = "synth_low";
        } else if (sleeve_value == 2) {
            this.sleeve_type = "synth_med";
        } else if (sleeve_value == 3) {
            this.sleeve_type = "synth_high";
        };
    };
};
