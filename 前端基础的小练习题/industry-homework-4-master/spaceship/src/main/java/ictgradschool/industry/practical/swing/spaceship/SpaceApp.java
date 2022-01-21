package ictgradschool.industry.practical.swing.spaceship;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Originally created by Andrew Meads on 9/01/2018.
 */
public class SpaceApp extends JFrame {
    public SpaceApp() {
        setTitle("PGCert Space Simulator");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Container visibleArea = getContentPane();
        visibleArea.setLayout(new BorderLayout());

        SpacePanel mainPanel = new SpacePanel();
        visibleArea.add(mainPanel, BorderLayout.CENTER);

        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new FlowLayout());
        visibleArea.add(buttonPanel, BorderLayout.SOUTH);

        JButton startButton = new JButton("Start");
        buttonPanel.add(startButton);

        JButton stopButton = new JButton("Stop");
        stopButton.setEnabled(false);
        buttonPanel.add(stopButton);

        startButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                mainPanel.start();
                startButton.setEnabled(false);
                stopButton.setEnabled(true);
            }
        });

        stopButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                mainPanel.stop();
                startButton.setEnabled(true);
                stopButton.setEnabled(false);
            }
        });

        JLabel instructions = new JLabel(
                "<html>Instructions:" +
                        "<ul><li>Press the \"Start\" or \"Stop\" buttons to<br>" +
                        "start / stop the game.</li>" +
                        "<li>Once started, use the arrow keys on the<br>" +
                        "keyboard to move your ship.</li></ul></html>");
        instructions.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        visibleArea.add(instructions, BorderLayout.EAST);

        setResizable(false);
        pack();
        mainPanel.requestFocusInWindow();

        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        setLocation(screenSize.width / 2 - getWidth() / 2, screenSize.height / 2 - getHeight() / 2);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            SpaceApp frame = new SpaceApp();
            frame.setVisible(true);
        });
    }
}
