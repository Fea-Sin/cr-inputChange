import React from 'react';
import { mount, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Comp from '../src';


describe('cr-comp', () => {
  it('base test comp', () => {
    const wrapper = mount(
      <Comp />
    )
    expect(wrapper.find('.hello').text()).toBe('HELLO COMP')
  })
  it('snapshot to match', () => {
    const wrapper = render(
      <Comp />
    )
    expect( renderToJson(wrapper) ).toMatchSnapshot()
  })
})
