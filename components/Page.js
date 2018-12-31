import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import Hero from './Hero';

const theme = {
	red: '#FF0000',
	black: '#393939',
	grey: '#3A3A3A',
	lightgrey: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
	background: white;
`;

const Inner = styled.div`
	margin: 0 auto;
	padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-family: 'Source Sans Pro', sans-serif;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Poppins', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					{this.props.children}
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
