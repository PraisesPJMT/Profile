import React from 'react';
import GithubIcon from '../assets/github.png';
import SlackIcon from '../assets/slack.png';
import '../styles/Social.css';

const Social = () => (
  <section className="social">
    <a
      className="social-icon"
      href="https://app.slack.com/client/T03DKS8MEH3/C03DNP7NZCJ/rimeto_profile/U03EK5Z4NLQ"
      rel="noreferrer"
      target="_blank"
    >
      <img src={SlackIcon} alt="Slack Icon" />
    </a>
    <a
      className="social-icon"
      href="https://github.com/PraisesPJMT"
      rel="noreferrer"
      target="_blank"
    >
      <img src={GithubIcon} alt="Github Icon" />
    </a>
  </section>
);

export default Social;
