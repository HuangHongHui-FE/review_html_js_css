
public class Producer {
    public static void main(String[] args) {
        BlockingQueue<String> queue = new ArrayBlockingQueue<String>(5);
            
        Consumer consumer = new Consumer(queue);
        consumer.doInBackground();
        
        Thread producer = new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i= 0; i < 100; i++) {
                    queue.add("" + i);
                }

                consumer.stop(true);
            }
        });

        producer.start();
    }
}

public class Consumer extends SwingWorker<Void, String> {
    protected BlockingQueue<String> queue = null;
    
    public Consumer(BlockingQueue<String> queue) {
        this.queue = queue;
    }

    @Override
    public Void doInBackground() {
        while (!isCancelled()) {
            // TODO
            this.queue--
        }

        return null;
    }

    @Override
    public void process(List<String> chunks) {
        for (String s : chunks) {
            System.out.println(s);
        }
    }
}