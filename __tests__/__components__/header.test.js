import { shallow } from 'enzyme';
import * as React from 'react';
import Header from '../../components/Header';

const renderComponent = (props) => shallow(<Header {...props} />);

describe('The Header Component', () => {

    it('Renders the Header component', () => {
        const renderedComponent = renderComponent({});
        expect(renderedComponent).toMatchSnapshot();
    });

});