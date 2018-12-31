import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';

import productAnalysis from '../../static/port-pad.jpg';
import gpWeb from '../../static/port-gpws.jpg';
import careers from '../../static/port-careers.jpg';

const PortfolioItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 5rem;
`;

const PortfolioList = () => {
	return (
		<PortfolioItems>
			<PortfolioItem
				image={productAnalysis}
				name="Product Analysis Dashboard"
				tags={['React', 'Redux', 'Styled Components', 'Jest']}
			/>

			<PortfolioItem image={gpWeb} name="GP Web Solutions" tags={['Angular JS', 'HTML5', 'CSS3', 'Jasmine']} />

			<PortfolioItem image={careers} name="Hermes Careers" tags={['Angular 2', 'ES6', 'CSS3', 'Web Development']} />
		</PortfolioItems>
	);
};

export default PortfolioList;
