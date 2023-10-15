import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EngineActor from '../components/EngineActor';

describe('EngineActor', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<EngineActor id="testActor" />);
    expect(getByTestId('engine-actor')).toBeInTheDocument();
  });

  it('tests addMainInnerRect method', () => {
    const addMainInnerRect = jest.spyOn(EngineActor.prototype, 'addMainInnerRect');
    const wrapper = shallow(<EngineActor id="testActor" />);
    wrapper.instance().addMainInnerRect();
    expect(addMainInnerRect).toHaveBeenCalled();
  });

  it('tests addInnerRects method', () => {
    const addInnerRects = jest.spyOn(EngineActor.prototype, 'addInnerRects');
    const wrapper = shallow(<EngineActor id="testActor" />);
    wrapper.instance().addInnerRects();
    expect(addInnerRects).toHaveBeenCalled();
  });

  it('tests getRect method', () => {
    const getRect = jest.spyOn(EngineActor.prototype, 'getRect');
    const wrapper = shallow(<EngineActor id="testActor" />);
    wrapper.instance().getRect();
    expect(getRect).toHaveBeenCalled();
  });

  it('tests setRender method', () => {
    const setRender = jest.spyOn(EngineActor.prototype, 'setRender');
    const wrapper = shallow(<EngineActor id="testActor" />);
    wrapper.instance().setRender();
    expect(setRender).toHaveBeenCalled();
  });

  it('tests setState method', () => {
    const setState = jest.spyOn(EngineActor.prototype, 'setState');
    const wrapper = shallow(<EngineActor id="testActor" />);
    wrapper.instance().setState();
    expect(setState).toHaveBeenCalled();
  });

  it('tests setVisible method', () => {
    const setVisible = jest.spyOn(EngineActor.prototype, 'setVisible');
    const wrapper = shallow(<EngineActor id="testActor" />);
    wrapper.instance().setVisible();
    expect(setVisible).toHaveBeenCalled();
  });
});


