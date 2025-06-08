import React from 'react';

const TestErrorComponent = () => {
  console.log('TestErrorComponent rendering');
  
  // Test potential error scenarios
  const testData = {
    text: 'Hello World',
    array: ['item1', 'item2', 'item3'],
    object: { prop: 'value' }
  };
  
  try {
    return (
      <div className="p-4 bg-green-100 border border-green-400 rounded">
        <h3 className="text-lg font-bold text-green-800">Test Component Loaded Successfully</h3>
        <p className="text-green-700">Text: {testData.text}</p>
        <p className="text-green-700">Array length: {testData.array.length}</p>
        <p className="text-green-700">Object prop: {testData.object.prop}</p>
        <div className="mt-2">
          <h4 className="font-semibold">Array items:</h4>
          {testData.array.map((item, index) => (
            <span key={index} className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded mr-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in TestErrorComponent:', error);
    return (
      <div className="p-4 bg-red-100 border border-red-400 rounded">
        <h3 className="text-lg font-bold text-red-800">Test Component Error</h3>
        <p className="text-red-700">Error: {error.message}</p>
      </div>
    );
  }
};

export default TestErrorComponent;
