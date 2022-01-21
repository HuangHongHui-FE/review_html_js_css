package ictgradschool.industry.practical.swing.spaceship;

import javax.imageio.ImageIO;
import java.awt.*;
import java.io.File;
import java.io.IOException;

/**
 * Originally created by Andrew Meads on 9/01/2018.
 */
public class Spaceship {
    private static final int SPRITE_WIDTH = 100;
    private static final int SPRITE_HEIGHT = 100;

    private int x;
    private int y;
    private int width;
    private int height;
    private int speed;
    private Direction direction = Direction.Up;
    private Image image;

    public Spaceship(int x, int y, int speed) {
        try {
            this.image = ImageIO.read(Spaceship.class
                    .getClassLoader()
                    .getResourceAsStream("assets/spaceship.png"));
        } catch (IOException e) {
            e.printStackTrace();
        }

        this.x = x;
        this.y = y;
        this.width = SPRITE_WIDTH;
        this.height = SPRITE_HEIGHT;
        this.speed = speed;
    }

    public void move(Direction direction, int windowWidth, int windowHeight) {
        // TODO: Step 6
    }

    public void paint(Graphics g) {
        // TODO: Step 7
        g.drawImage(image, x, y, x + width, y + height, 0, 0, width, height, null);
    }
}
