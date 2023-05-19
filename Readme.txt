TO RUN THE WEB APPLICATION
npm i



UNDERSTANDING UNIT TESTS
In this example, we're using the Mocha testing framework along with the Chai assertion library. The describe block defines a test suite, and the it block defines an individual test case. Inside the test case, we provide an input dictionary input and the expected output expectedOutput. We then call the aggregateByDay function with the input and use assert.deepEqual to check if the actual result matches the expected output.

RUNNING MAIN CODE
node demo.js

RUNNING UNIT TESTS
npm install -g mocha
mocha demo_test.js
