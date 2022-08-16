// add test suite here
const QnA = require("../Client/src/components/QnA.jsx");
const TestRenderer = require('react-test-renderer');

describe("QnA", function(){
  test("Initial Hello World", function(){

    const testRenderer = TestRenderer.create(<QnA></QnA>);
    console.log(testRenderer);

    // It's possible to have multiple expects in a single test like this. However, it is often unhelpful.
    // Just write two tests referring to the "Example Suites" example above for reference.
    expect(testRenderer).toBe('<p>Hello world!</p>');
  });
});
