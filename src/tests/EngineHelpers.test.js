import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EngineHelpers from '../components/EngineHelpers';

describe('EngineHelpers', () => {
  let engineHelpers;

  beforeEach(() => {
    engineHelpers = render(<EngineHelpers />);
  });

  test('probability', () => {
    const result = engineHelpers.probability({ probability: 0.5 });
    expect(typeof result).toBe('boolean');
  });

  test('rangeRand', () => {
    const result = engineHelpers.rangeRand({ min: 1, max: 5 });
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(5);
  });

  // ... similar tests for the other methods ...

  test('addEventListener', () => {
    const mockElement = { addEventListener: jest.fn() };
    const mockHandler = jest.fn();
    engineHelpers.addEventListener({ el: mockElement, type: 'click', handler: mockHandler });
    expect(mockElement.addEventListener).toHaveBeenCalledWith('click', mockHandler, false);
  });

  test('removeEventListener', () => {
    const mockElement = { removeEventListener: jest.fn() };
    const mockHandler = jest.fn();
    engineHelpers.removeEventListener({ el: mockElement, type: 'click', handler: mockHandler });
    expect(mockElement.removeEventListener).toHaveBeenCalledWith('click', mockHandler, false);
  });

  test('removeAllEventListeners', () => {
    const mockElement = { removeEventListener: jest.fn() };
    const mockHandler = jest.fn();
    engineHelpers.listeners = [{ el: mockElement, type: 'click', handler: mockHandler }];
    engineHelpers.removeAllEventListeners();
    expect(mockElement.removeEventListener).toHaveBeenCalledWith('click', mockHandler, false);
    expect(engineHelpers.listeners).toEqual([]);
  });

  // ... similar tests for the other methods ...
});
+    // Test the intRangeRand method here
+  });
+
+  test('setRand', () => {
+    // Test the setRand method here
+  });
+
+  test('modulo', () => {
+    // Test the modulo method here
+  });
+
+  test('linear', () => {
+    // Test the linear method here
+  });
+
+  test('easeOut', () => {
+    // Test the easeOut method here
+  });
+
+  test('easeIn', () => {
+    // Test the easeIn method here
+  });
+
+  test('easeInOut', () => {
+    // Test the easeInOut method here
+  });
+
+  test('backHelper', () => {
+    // Test the backHelper method here
+  });
+
+  test('backEaseInOut', () => {
+    // Test the backEaseInOut method here
+  });
+
+  test('strongBackEaseOut', () => {
+    // Test the strongBackEaseOut method here
+  });
+
+  test('fall', () => {
+    // Test the fall method here
+  });
+
+  test('getElPagePos', () => {
+    // Test the getElPagePos method here
+  });
+
+  test('addEventListener', () => {
+    // Test the addEventListener method here
+  });
+
+  test('removeEventListener', () => {
+    // Test the removeEventListener method here
+  });
+
+  test('removeAllEventListeners', () => {
+    // Test the removeAllEventListeners method here
+  });
+
+  test('getDomEvent', () => {
+    // Test the getDomEvent method here
+  });
+
+  test('preventDefaultEvent', () => {
+    // Test the preventDefaultEvent method here
+  });
+
+  test('stopPropagationEvent', () => {
+    // Test the stopPropagationEvent method here
+  });
+
+  test('getDomElements', () => {
+    // Test the getDomElements method here
+  });
+
+  test('setEmptyCssCursor', () => {
+    // Test the setEmptyCssCursor method here
+  });
+
+  test('requestAnimFrame', () => {
+    // Test the requestAnimFrame method here
+  });
+});
