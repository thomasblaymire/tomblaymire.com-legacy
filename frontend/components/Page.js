import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';

const theme = {
	red: '#FF0000',
	black: '#000000',
	grey: '#494949',
	greyDark: '#2a363b',
	greyLight: '#DADADA',
	white: '#FFFFFF',
	lightgrey: '#E1E1E1',
	green: '#3eaca8',
	seaGreen: '#e5eec1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
	fontPrimary: 'Poppins',
	fontSecondary: 'Source Sans Pro',
};

const StyledPage = styled.div`
	background: white;
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
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: ${theme.green};
    font-weight: bold;
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
