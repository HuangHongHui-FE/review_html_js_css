package ictgradschool.industry.practical.swingworker.model;

import javax.swing.*;
import javax.swing.table.AbstractTableModel;

public class ThumbnailTableModelAdapter extends AbstractTableModel {
    private static final String[] COLUMN_NAMES = {"Image", "Name"};


    public ThumbnailTableModelAdapter(ThumbnailList thumbnails) {
        // TODO Implement this
    }

    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {
        // TODO Implement this
        return null;
    }

    @Override
    public int getRowCount() {
        // TODO Implement this
        return 0;
    }

    @Override
    public int getColumnCount() {
        // TODO Implement this
        return 0;
    }

    /**
     * Sets the table up to display images in its first column, and Strings in its second column.
     */
    @Override
    public Class<?> getColumnClass(int columnIndex) {
        switch (columnIndex) {
            case 0:
                return ImageIcon.class;
            case 1:
                return String.class;
            default: throw new IllegalArgumentException();
        }
    }

    /**
     * Sets the table up with the correct column names.
     */
    @Override
    public String getColumnName(int column) {
        return COLUMN_NAMES[column];
    }
}
