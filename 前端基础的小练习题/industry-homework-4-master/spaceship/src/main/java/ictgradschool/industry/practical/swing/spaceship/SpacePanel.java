package ictgradschool.industry.practical.swing.spaceship;

import javax.swing.*;
import java.awt.*;

/**
 * Originally created by Andrew Meads on 9/01/2018.
 */
public class SpacePanel extends JPanel { // TODO: Steps 4 and 5
    public static final int PREFERRED_WIDTH = 500;
    public static final int PREFERRED_HEIGHT = 500;

    private Starfield stars;
    private Spaceship ship;
    private Direction moveDirection = Direction.None;
    private Timer timer;

    public SpacePanel() {
        setPreferredSize(new Dimension(PREFERRED_WIDTH, PREFERRED_HEIGHT));

        this.stars = new Starfield(PREFERRED_WIDTH, PREFERRED_HEIGHT);

        this.ship = new Spaceship(PREFERRED_WIDTH / 2, PREFERRED_HEIGHT / 2, 10);

        // TODO: Step 4b
    }

    public void start() {
        // TODO: Step 4c
    }

    public void stop() {
        // TODO: Step 4c
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        g.setColor(Color.black);
        g.fillRect(0, 0, getWidth(), getHeight());

        // TODO: Step 3
    }
}
