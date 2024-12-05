//A Buffer is like a temporary holding area in memory for raw binary data (chunks of data in a stream).
//In Node.js, a buffer is a fixed-length chunk of memory that can store raw binary data, such as files, network packets, or image data.

//Ex: streaming a video online
//If your internet connection is fast enough, the speed of the stream will be fast enough to instantly fill up the buffer and send it out for processing
//That will repeat until the stream is finished
//If your connection is slow, after processing the first chunk of data that arrived, the video player will display a loading spinner which indicates it is waiting for more data to arrive
//Once the buffer is filled up and the data is processed, the video player shows the video.
//While the video is playing, more data will continue to arrive and wait in the buffer