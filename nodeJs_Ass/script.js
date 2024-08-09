/* 
 In this coding challenge, your task is to create a package&json file for your project using the npm init
command& The package&json file is essential for managing dependencies, scripts, and other project"related
details& Below is the expected folder structure&
*/

/*
In the same project directory created in the above assignment, your task is to create a new file index&js and
using the fs module add information about Node&js architecture to a new file nodejs_architecture&txt& Below
are the expected files in the project folder&
*/
 // ans npm init



// Load the fs module
// const fs = require('fs');

// // Information about Node.js architecture
// const nodejsArchitecture = `
// Node.js Architecture:
// ----------------------
// 1. **Single-Threaded Event Loop**: Node.js operates on a single-threaded event loop that allows it to handle multiple operations concurrently by managing events and executing callbacks.

// 2. **Non-Blocking I/O**: Node.js uses non-blocking, asynchronous I/O operations, which means that operations like reading from a file or querying a database do not block the execution of other code.

// 3. **V8 JavaScript Engine**: Node.js uses Google's V8 JavaScript engine to execute JavaScript code. V8 compiles JavaScript into machine code for fast execution.

// 4. **Libuv Library**: Node.js relies on the Libuv library for handling asynchronous operations and providing a consistent API for file system and network operations across different platforms.

// 5. **Callback Functions**: Node.js relies heavily on callback functions to handle the results of asynchronous operations. This allows the event loop to remain responsive and handle multiple operations simultaneously.

// 6. **Modules**: Node.js uses a modular system where functionality is divided into modules. Each module is a separate file that can be imported and used in other modules, promoting code reusability and organization.
// `;

// // Write the information to nodejs_architecture.txt
// fs.writeFile('nodejs_architecture.txt', nodejsArchitecture, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log('Node.js architecture information has been written to nodejs_architecture.txt');
//     }
// });



/* 
Continuing assignment 2& Here, let’s create a new file named index&js and use the fs module to read the
content of nodejs_architecture&txt and print the content to the console&
*/

// Path to the file
//const filePath = 'nodejs_architecture.txt';

// Read the content of nodejs_architecture.txt
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//     } else {
//         // Print the content to the console
//         console.log('Content of nodejs_architecture.txt:\n');
//         console.log(data);
//     }
// });




/* 
In this coding challenge, you will continue working with the file created in the previous assignments& Here
your task is to access the existing nodejs_architecture&txt file and use the fs module to append additional
data to it& Specifically, add some advantages of Node&js to the file and print the file content to the console&
*/

// const additionalData = 'Advantages of Node.js:\n- Non-blocking I/O\n- Single-threaded model\n- Scalability\n- Large ecosystem of packages\n';

// fs.appendFile('nodejs_architecture.txt', additionalData, (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//     } else {
//         console.log('Additional data has been appended to nodejs_architecture.txt');

//         // Read and print the updated content
//         fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
//             if (err) {
//                 console.error('Error reading the file:', err);
//             } else {
//                 console.log('\nUpdated content of nodejs_architecture.txt:\n');
//                 console.log(data);
//             }
//         });
//     }
// });





/*
To wind up the fs module walk"through challenges, let’s delete the nodejs_architecture&txt file& On deletion
print "File Deleted SuccessFully" to the console
*/

// Delete the file

// fs.unlink('nodejs_architecture.txt', (err) => {
//     if (err) {
//         console.error('Error deleting the file:', err);
//     } else {
//         console.log('File Deleted Successfully');
//     }
// });


/*
Assume a situation where our server restricts access to its configuration via the user interface& The only way
to obtain the OS and release information is through a programmatic approach& In this challenge, you are
expected to use the os module and print the os name and the os"release version to the console
*/
const os = require('os'); // Import the os module

// Get the OS name
const osName = os.type(); // e.g., 'Linux', 'Darwin', 'Windows_NT'

// Get the OS release version
const osRelease = os.release(); // e.g., '5.4.0-42-generic', '20.3.0', '10.0.19041'

// Print the OS name and release version
//console.log(`Operating System: ${osName}`);
//console.log(`OS Release Version: ${osRelease}`);



/* 
In this challenge, you are required to use Node1js and the built-in HTTP module to create a server that
displays the text "I Am Happy To Learn Full Stack Web Development From PW Skills!" on the browser screen1
The goal is to utilize the HTTP module to create an HTTP server, set the port, appropriate content type, and
send the message as a response to the client's request, allowing it to display on the browser1
*/
const http = require('http'); // Import the http module

// Define the port number
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set the response header with content type as text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response text
    res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});


/* 
Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
event named "subscribe"1 When this event is triggered, it should display a message in the console indicating
that the user has subscribed1
*/
const EventEmitter = require('events'); // Import the events module

// Create an instance of EventEmitter
class SubscriptionEmitter extends EventEmitter {}

// Instantiate the SubscriptionEmitter class
const subscriptionEmitter = new SubscriptionEmitter();

// Define the event handler for the 'subscribe' event
subscriptionEmitter.on('subscribe', () => {
    console.log('A user has subscribed!');
});

// Trigger the 'subscribe' event
subscriptionEmitter.emit('subscribe');



/* 
While working with the events module, one interesting observation is that when an event is created and
called, the associated event handler is triggered1 However, what happens if we remove an event and then
try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event
handler and observe what happens when we call it0
*/

const eventEmitter = new EventEmitter();

// Define the event handler
const eventHandler = () => {
    console.log('Event handler executed.');
};

// Attach the event handler to the 'example' event
eventEmitter.on('example', eventHandler);

// Trigger the 'example' event
console.log('Triggering the event for the first time:');
eventEmitter.emit('example'); // Should print: Event handler executed.

// Remove the event handler
eventEmitter.off('example', eventHandler);

// Trigger the 'example' event again
console.log('Triggering the event for the second time:');
eventEmitter.emit('example'); 

/* 
In continuation of the 8th question, let's now explore the concept of the maximum number of listeners
allowed for event handlers1 For this coding challenge, your task is to determine the current maximum
number of event listeners associated with an event and then set the maximum number of event listeners to
51 Note that the default maximum number of listeners might vary1 Your task is to limit the number of listeners
to 5.
*/
const Emitter = new EventEmitter();
const currentMaxListeners = Emitter.getMaxListeners();
console.log(`Current maximum number of listeners: ${currentMaxListeners}`);

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);
console.log('Maximum number of listeners set to 5.');

// Verify the new maximum number of listeners
const newMaxListeners = Emitter.getMaxListeners();
console.log(`New maximum number of listeners: ${newMaxListeners}`);

// Add some event listeners to demonstrate
for (let i = 0; i < 5; i++) {
    Emitter.on('example', () => {
        console.log(`Listener ${i + 1} triggered.`);
    });
}

// Trigger the event to see the behavior
console.log('Triggering the event:');
eventEmitter.emit('example');