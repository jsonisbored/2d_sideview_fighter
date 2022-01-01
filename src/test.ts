import { World, ID, Component, getComponent } from "wecs";

// Create the world
const world = new World();


/**
 * Components
 */
class Position {
    constructor(
        public x: number,
        public y: number,
    ) {}
}
class Velocity {
    constructor(
        public x: number,
        public y: number,
    ) {}
}
class Input {
    constructor(
        public up: number,
        public down: number,
        public left: number,
        public right: number,
    ) {}
}


/**
 * Systems
 */
world.register(
    function movement(entities) {
        for (const e of entities) {
            if ()
        }
    }
);
world.register(
    function physics(entities) {
        for (const e of entities) {
            world.updateComponent(e, Position, c => {
                c.x += getComponent(e, Velocity).x;
                c.y += getComponent(e, Velocity).y;
            });
        }
    },
    [
        Position,
        Velocity
    ],
);
world.createEntity([
    [Position, 0, 0],
    [Velocity, 0, 0],
]);


// Run all systems
world.run();