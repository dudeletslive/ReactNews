
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import testRenderer from '../test-renderer';

// Create Test React Component
class TestComponent extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

let component = testRenderer(<TestComponent />);

describe('Test Renderer', function() {

  it('provides the "Test Renderer" Shallow Rendered Component with type of "div"', () => {
    // Expect it to exist
    expect(component.type);
  });

});
