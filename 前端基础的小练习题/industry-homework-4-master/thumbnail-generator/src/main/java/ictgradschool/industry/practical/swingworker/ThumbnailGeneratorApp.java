package ictgradschool.industry.practical.swingworker;

import ictgradschool.industry.practical.swingworker.model.Thumbnail;
import ictgradschool.industry.practical.swingworker.model.ThumbnailList;
import ictgradschool.industry.practical.swingworker.model.ThumbnailTableModelAdapter;
import ictgradschool.industry.practical.swingworker.util.SmartScroller;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

/**
 * Swing program that allows users to generate thumbnail images from full-size
 * images. The program presents a simple GUI. Using the GUI users can select a
 * directory on disk that contains jpeg (.jpg) files. The program creates a
 * subdirectory named "thumbnails", and generates and stores the thumbnail
 * images in the new subdirectory.
 */
public class ThumbnailGeneratorApp extends JPanel {
    private JButton startBtn;  // Button to start the thumbnail generation process.
    private JButton cancelBtn; // Button to cancel thumbnail generation.
    private JTable table;      // Table displaying generated thumbnails

    private List<File> imageFiles; // List of image files for which thumbnails should be generated.
    private File outputDirectory;  // Output directory for storing thumbnails.

    private ThumbnailList thumbnailList; // Model to which generated thumbnails should be added.

    public ThumbnailGeneratorApp() {
        startBtn = new JButton("Process");
        cancelBtn = new JButton("Cancel");

        table = new JTable();
        table.setRowHeight(100);

        thumbnailList = new ThumbnailList();

        // Create instance of ThumbnailTableModelAdapter and set the model appropriately.
        ThumbnailTableModelAdapter adapter = new ThumbnailTableModelAdapter(thumbnailList);
        table.setModel(adapter);

        // Register a handler for Process buttons clicks.
        startBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent event) {
                // Use a FileChooser Swing component to allow the user to
                // select a directory where images are stored.
                final JFileChooser fc = new JFileChooser();
                fc.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
                fc.setCurrentDirectory(new File("./src/main/resources/"));
                int returnVal = fc.showDialog(ThumbnailGeneratorApp.this, "Select");

                // Whenever the user selects a particular directory ...
                if (returnVal == JFileChooser.APPROVE_OPTION) {
                    File directory = fc.getSelectedFile();

                    // Created a subdirectory named "thumbnails" to store the
                    // generated thumbnails. If the subdirectory already exists
                    // no action is taken.
                    try {
                        String pathname = directory.getCanonicalPath() + File.separator + "thumbnails";
                        outputDirectory = new File(pathname);
                        outputDirectory.mkdir();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }

                    // Scan the selected directory for all files with a "jpg"
                    // extension. Store these files in a List.
                    imageFiles = new ArrayList<>();
                    File[] contents = directory.listFiles();
                    for (int i = 0; i < contents.length; i++) {
                        File file = contents[i];
                        String filename = file.getName();
                        String extension = filename.substring(filename.lastIndexOf(".") + 1);
                        if (file.isFile() && extension.equals("jpg")) {
                            imageFiles.add(file);
                        }

                    }

                    // Set enabled state for buttons.
                    startBtn.setEnabled(false);
                    cancelBtn.setEnabled(true);

                    // clear the list
                    thumbnailList.clear();

                    // Set cursor to busy.
                    setCursor(Cursor.getPredefinedCursor(Cursor.WAIT_CURSOR));

                    // TODO This code should execute in the background...
                    // **********************************************************************************
                    // Generate thumbnails.
                    for (File image : imageFiles) {

                        try {
                            Thumbnail thumbnail = createThumbnail(image, outputDirectory);

                            thumbnailList.add(thumbnail); // This line should NOT execute in the background...
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    // **********************************************************************************

                    // TODO This code should execute on the ED thread, after all images have been processed...
                    // **********************************************************************************
                    // Set enabled state for buttons and restore cursor.
                    startBtn.setEnabled(true);
                    cancelBtn.setEnabled(false);
                    setCursor(Cursor.getDefaultCursor());

                    // Display success / failure message
                    JOptionPane.showMessageDialog(null, "Done!");
                    // **********************************************************************************
                }

                // Register a handler for Cancel button clicks.
                cancelBtn.addActionListener(new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        // TODO Implement this.
                    }
                });
            }
        });

        // Construct the GUI.
        JPanel controlPanel = new JPanel();
        controlPanel.add(startBtn);
        controlPanel.add(cancelBtn);
        cancelBtn.setEnabled(false);

        JScrollPane scrollPaneForOutput = new JScrollPane(table);
        new SmartScroller(scrollPaneForOutput);

        setLayout(new BorderLayout());
        add(controlPanel, BorderLayout.NORTH);
        add(scrollPaneForOutput, BorderLayout.CENTER);
        setPreferredSize(new Dimension(400, 300));
    }

    /**
     * Helper method to display the GUI.
     */
    private static void createAndShowGUI() {
        // Create and set up the window.
        JFrame frame = new JFrame("Thumbnail Image Creator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Create and set up the content pane.
        JComponent newContentPane = new ThumbnailGeneratorApp();
        frame.add(newContentPane);

        // Display the window.
        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    /**
     * Helper method to generate a thumbnail image for a particular image file.
     *
     * @param imageFile       the source image file.
     * @param outputDirectory the directory in which to store the generated thumbnail.
     * @throws IOException if there is an error with loading images files or saving thumbnails.
     */
    private static Thumbnail createThumbnail(File imageFile, File outputDirectory) throws IOException {
        BufferedImage img = new BufferedImage(100, 100, BufferedImage.TYPE_INT_RGB);
        img.createGraphics().drawImage(ImageIO.read(imageFile).getScaledInstance(100, 100, Image.SCALE_SMOOTH), 0, 0, null);

        File thumbnailFile = new File(outputDirectory.getCanonicalPath() + File.separator + imageFile.getName());
        ImageIO.write(img, "jpg", thumbnailFile);

        ImageIcon displayableImage = new ImageIcon();
        displayableImage.setImage(img);
        return new Thumbnail(imageFile.getName(), displayableImage);
    }

    public static void main(String[] args) {
        // Schedule a job for the event-dispatching thread:
        // creating and showing this application's GUI.
        SwingUtilities.invokeLater(ThumbnailGeneratorApp::createAndShowGUI);
    }
}
