import PageHero from '../components/PageHero';
import Header from '../components/Header';
import PageContent from '../components/styles/PageStyles';
import Button from '../components/Button';
import Footer from '../components/Footer';
import styled from 'styled-components';

const ContactWrapper = styled.div`
	margin-top: 5rem;
`;

const Contact = () => {
	return (
		<div>
			<PageHero image={portfolioHero} pageName="Contact" description="Get In Touch">
				<Header />
			</PageHero>
			<PageContent>
				<div className="container">
					<ContactWrapper>
						<p>Blah blah blah contact me information, email button link.</p>
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
