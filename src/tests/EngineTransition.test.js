
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EngineTransition from '../components/EngineTransition';

describe('EngineTransition', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<EngineTransition id="testTransition" />);
    expect(getByTestId('engine-transition')).toBeInTheDocument();
  });

  it('tests prepare method', () => {
    const prepare = jest.spyOn(EngineTransition.prototype, 'prepare');
    const wrapper = shallow(<EngineTransition id="testTransition" />);
    wrapper.instance().prepare();
    expect(prepare).toHaveBeenCalled();
  });
  
  it('tests tick method', () => {
    const tick = jest.spyOn(EngineTransition.prototype, 'tick');
    const wrapper = shallow(<EngineTransition id="testTransition" />);
    wrapper.instance().tick();
    expect(tick).toHaveBeenCalled();
  });
  
  it('tests lastTick method', () => {
    const lastTick = jest.spyOn(EngineTransition.prototype, 'lastTick');
    const wrapper = shallow(<EngineTransition id="testTransition" />);
    wrapper.instance().lastTick();
    expect(lastTick).toHaveBeenCalled();
  });
});
