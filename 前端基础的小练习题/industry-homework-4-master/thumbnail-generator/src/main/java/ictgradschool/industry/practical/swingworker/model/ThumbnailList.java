package ictgradschool.industry.practical.swingworker.model;

import java.util.ArrayList;
import java.util.List;

public class ThumbnailList {
    private final List<Thumbnail> thumbnails = new ArrayList<>();
    private final List<ThumbnailListener> listeners = new ArrayList<>();

    public void add(Thumbnail thumbnail) {
        thumbnails.add(thumbnail);

        for (ThumbnailListener l : listeners) {
            l.thumbnailAdded(this);
        }
    }

    public void clear() {
        thumbnails.clear();

        for (ThumbnailListener l : listeners) {
            l.thumbnailListCleared(this);
        }
    }

    public void addListener(ThumbnailListener listener) {
        listeners.add(listener);
    }

    public void removeListener(ThumbnailListener listener) {
        listeners.remove(listener);
    }

    public int size() {
        return thumbnails.size();
    }

    public Thumbnail get(int index) {
        return thumbnails.get(index);
    }
}
