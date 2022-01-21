package ictgradschool.industry.practical.swing.spaceship;

import java.awt.*;

/**
 * Originally created by Andrew Meads on 9/01/2018.
 */
public class Star {
    private int x;
    private int y;
    private int size;
    private int speed;

    public Star(int x, int y, int size, int speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public int getSize() {
        return size;
    }

    public int getSpeed() {
        return speed;
    }

    public void move(int windowWidth, int windowHeight) {
        // TODO: Step 1a
    }

    public void paint(Graphics g) {
        // TODO: Step 1b
    }
}
