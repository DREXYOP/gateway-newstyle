import React from "react";
import logo from '../assets/img/logo.svg'
import {
	Box,
	Row,
	Column,
	FooterLink,
	Heading
} from "./FooterStyles";
import { Container, Col } from "react-bootstrap";

const Footer = () => {
	return (

			<footer className="footer">
				
				<Container>

					<Row>
						<Column>
							<Heading>Website</Heading>
							<FooterLink href="/home">Home</FooterLink>
							<FooterLink href="https://github.com/IndieHQ/gateway/blob/main/PrivacyPolicy.md">Privacy Policy</FooterLink>
							<FooterLink href="https://github.com/IndieHQ/gateway/blob/main/TermsOfService.md">Terms Of Service</FooterLink>
						</Column>

						<Column>
							<Heading>Social Media</Heading>
							<FooterLink href="https://discord.gg/gatewaybot">
								
									<span style={{ marginLeft: "10px" }}>
										Discord
									</span>
								
							</FooterLink>
							<FooterLink href="https://github.com/indiehq/gateway">
								
									<span style={{ marginLeft: "10px" }}>
										Github
									</span>
							</FooterLink>

						</Column>

					</Row>
					<Box>
						<p>Copyright <a href="https://www.indiehq.xyz/">IndieHQ</a> 2023-2024. All Rights Reserved. Not affiliated with Discord Inc..</p>
					</Box>
				</Container>
				
			</footer>
	
	);
};
export default Footer;
