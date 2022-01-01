import P5 from "p5";
import "p5/lib/addons/p5.dom";

const sketch = (p5: P5) => {
    p5.setup = () => {
        const canvas = p5.createCanvas(1000, 500);
        canvas.parent("app");

        p5.background("black");
    };

    p5.draw = () => {
        p5.rect(100, 100, 50, 50);
    };
};

new P5(sketch);
