import React from 'react';
import './../style.css/style.css'; // Certifique-se de que há um arquivo CSS importado
import May from './../image/May.jpeg';
import Isa from './../image/Isa.jpeg';
import Nay from './../image/Nay.jpg';
import Rebe from './../image/Rebe.png';
import LinkedIn from './../image/linkedin.svg'; // Ícone do LinkedIn
import Instagram from './../image/instagram.svg'; // Ícone do GitHub

const Team = () => {
  const teamMembers = [
    {
      name: 'Isabelle Hondo',
      role: 'Desenvolvedora Full Stack',
      photo: Isa,
      socials: [
        { icon: LinkedIn, link: '#' },
        { icon: Instagram, link: '#' },
      ],
    },
    {
      name: 'Mayara Karen',
      role: 'Gerente de Projetos e Analista de Dados',
      photo: May,
      socials: [
        { icon: LinkedIn, link: '#' },
        { icon: Instagram, link: '#' },
      ],
    },
    {
      name: 'Nayara Azevedo',
      role: 'Desenvolvedora Front-end',
      photo: Nay,
      socials: [
        { icon: LinkedIn, link: '#' },
        { icon: Instagram, link: '#' },
      ],
    },
    {
      name: 'Rebeca Baruch',
      role: 'UI/UX Designer e Desenvolvedora Full Stack',
      photo: Rebe,
      socials: [
        { icon: LinkedIn, link: '#' },
        { icon: Instagram, link: '#' },
      ],
    },
  ];

  return (
    <section className="team" id='team'>
      <div className="team-header">
        <h2 className="team-title">TEAM</h2>
        <p className="team-description">Conheça os membros da nossa equipe</p>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="member-photo">
              <img src={member.photo} alt={`Foto de ${member.name}`} />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-socials">
                {member.socials.map((social, idx) => (
                  <a key={idx} href={social.link} className="social-link">
                    <img
                      src={social.icon}
                      alt={`${member.name} no ${social.link}`}
                      className="social-icon"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Team;
