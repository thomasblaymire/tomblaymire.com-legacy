import PageHero from '../components/PageHero';
import Header from '../components/Header';
import PageContent from '../components/styles/PageStyles';
import contactPortfolio from '../static/about-hero.jpg';
import Button from '../components/Button';
import Footer from '../components/Footer';
import styled from 'styled-components';

const ContactWrapper = styled.div`
	margin-top: 5rem;
`;

const Contact = () => {
	return (
		<div>
			<PageHero image={contactPortfolio} pageName="Contact" description="Please get in touch using the form below.">
				<Header />
			</PageHero>
			<PageContent>
				<div className="container">
					<ContactWrapper>
						<p>If you have a project you’d like to discuss you can use the form to the right or:</p>
						Email: support@tomblaymire.com
						<Button primaryColor="#05af43" bgColor="#05af43" hoverBg={'#05da53'}>
							Contact Me
						</Button>
					</ContactWrapper>
				</div>
				<Footer />
			</PageContent>
		</div>
	);
};

export default Contact;
