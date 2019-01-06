import styled from 'styled-components';

const ContactWrapper = styled.div`
	width: 1170px;
	margin-right: auto;
	margin-left: auto;
	padding: 0px 15px;
	display: flex;
`;

const ContactRow = styled.div`
	margin-bottom: 2rem;
	label {
	}

	input,
	textarea {
		font-size: 2rem;
	}
`;

const ContactForm = () => {
	return (
		<ContactWrapper>
			<form name="contact" netlify>
				<ContactRow>
					<label>Name:</label>
					<input type="text" name="name" placeholder="Enter name" />
				</ContactRow>

				<ContactRow>
					<label>Email:</label>
					<input type="text" name="email" placeholder="Enter email" />
				</ContactRow>

				<ContactRow>
					<label>Project Requirements:</label>
					<textarea name="message" placeholder="Project requirements" />
				</ContactRow>

				<button type="submit">Send</button>
			</form>
		</ContactWrapper>
	);
};

export default ContactForm;
