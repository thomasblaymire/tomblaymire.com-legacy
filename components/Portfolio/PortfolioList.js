import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';
import productAnalysis from '../../static/port-pad.jpg';
import gpWeb from '../../static/port-gpws.jpg';
import careers from '../../static/port-careers.jpg';

const PortfolioItems = styled.div``;

class PortfolioList extends Component {
	state = {
		portfolioItems: [
			{
				id: 1,
				image: gpWeb,
				name: 'GP Web Solutions',
				tags: ['Angular JS', 'HTML5', 'CSS3', 'Jasmine'],
				url: '/pages/portfolio-gpws'
			},
			{
				id: 2,
				image: productAnalysis,
				name: 'Product Analysis Dashboard',
				tags: ['React', 'Redux', 'Styled Components', 'Jest'],
				url: '/pages/portfolio-pad'
			},
			{
				id: 3,
				image: careers,
				name: 'Hermes Careers',
				tags: ['Angular 2', 'ES6', 'CSS3', 'Web Development'],
				url: '/pages/portfolio-skybet'
			},
			{
				id: 4,
				image: careers,
				name: 'Hermes Careers',
				tags: ['Angular 2', 'ES6', 'CSS3', 'Web Development'],
				url: '/pages/portfolio-careers'
			},
		],
	};

	componentDidMount() {
		console.log(this.props.amount);
	}

	render() {
		const portfolioItems = this.state.portfolioItems
			.slice(0, this.props.amount)
			.map(item => <PortfolioItem key={item.id} image={item.image} url={url} id={item.id} name={item.name} tags={item.tags} />);

		return <PortfolioItems>{portfolioItems}</PortfolioItems>;
	}
}

export default PortfolioList;
