import { shallow } from 'enzyme';
import { Jest } from 'jest';
import * as React from 'react';
import toJson from 'enzyme-to-json';
import Hero from '../../components/Hero';

const renderComponent = (props) => shallow(<Hero {...props} />);

describe('The Hero Component', () => {

    it('Renders the Hero component', () => {
        const renderedComponent = renderComponent({});
        expect(renderedComponent).toMatchSnapshot();
    });

    expect(toJson(renderedComponent)).toMatchSnapshot();

});