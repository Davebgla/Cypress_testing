import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add numbers', () => {
    const number1 = container.find("#number1");
    number1.simulate("click");

    const add = container.find("#operator_add");
    add.simulate("click");

    const number4 = container.find("#number4");
    number4.simulate("click");

    const operatorEquals = container.find("#operator-equals");
    operatorEquals.simulate("click");

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("5");
  })

  it('should be able to subtract numbers', () => {
    const number7 = container.find("#number7");
    number7.simulate("click");

    const subtract = container.find("#operator-subtract");
    subtract.simulate("click");

    const number4 = container.find("#number4");
    number4.simulate("click");

    const operatorEquals = container.find("#operator-equals");
    operatorEquals.simulate("click");

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("3");
  })

  it('should be able to multiply numbers', () => {
    const number3 = container.find("#number3");
    number3.simulate("click");

    const multiply = container.find("#operator-multiply");
    multiply.simulate("click");

    const number5 = container.find("#number5");
    number5.simulate("click");

    const operatorEquals = container.find("#operator-equals");
    operatorEquals.simulate("click");

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("15");
  })

  it('should be able to divide numbers', () => {
    const number2 = container.find("#number2");
    number2.simulate("click");

    const number1 = container.find("#number1");
    number1.simulate("click");

    const divide = container.find("#operator-divide");
    divide.simulate("click");

    const number7 = container.find("#number7");
    number7.simulate("click");

    const operatorEquals = container.find("#operator-equals");
    operatorEquals.simulate("click");

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("3");
  })

  it('should concatinate numbers', () => {
    const number1 = container.find("#number1");
    number1.simulate("click");

    number1.simulate("click");

    number1.simulate("click");

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("111");
  })

  it('should chain operators together', () => {
    const number1 = container.find("#number1");
    number1.simulate("click");

    const add = container.find("#operator_add");
    add.simulate("click");

    const number9 = container.find("#number9");
    number9.simulate("click");

    const divide = container.find("#operator-divide");
    divide.simulate("click");

    const number2 = container.find("#number2");
    number2.simulate("click");

    const operatorEquals = container.find("#operator-equals");
    operatorEquals.simulate("click");

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("5");
  })

  it('clear the running total without affecting the calculation', () => {
    const number8 = container.find("#number8");
    number8.simulate("click");

    const add = container.find("#operator_add");
    add.simulate("click");

    const number2 = container.find("#number2");
    number2.simulate("click");

    const clear = container.find('#clear');
    clear.simulate("click");

    add.simulate("click");

    const number3 = container.find("#number3");
    number3.simulate("click");

    const operatorEquals = container.find("#operator-equals");
    operatorEquals.simulate("click");

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("11");

  })

})

