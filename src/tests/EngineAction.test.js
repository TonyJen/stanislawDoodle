import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EngineAction from '../components/EngineAction';

describe('EngineAction', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<EngineAction startTime={0} endTime={1000} onAction={() => {}} />);
    expect(getByTestId('engine-action')).toBeInTheDocument();
  });

  it('tests tick method', () => {
    const onAction = jest.fn();
    const wrapper = shallow(<EngineAction startTime={0} endTime={1000} onAction={onAction} />);
    wrapper.instance().tick();
    expect(onAction).toHaveBeenCalled();
  });
});