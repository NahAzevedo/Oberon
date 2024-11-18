import React from 'react';
import './../style.css/style.css'; // Certifique-se de que há um arquivo CSS importado

const Team = () => {
  const teamMembers = [
    {
      name: 'Isabelle Hondo',
      role: 'Desenvolvedor Frontend',
      photo: 'https://via.placeholder.com/100',
      socials: [
        { name: 'LinkedIn', link: '#' },
        { name: 'GitHub', link: '#' },
        
      ],
    },
    {
      name: 'Mayara Karen',
      role: 'Gerente de Projetos',
      photo: 'https://via.placeholder.com/100',
      socials: [
        { name: 'LinkedIn', link: '#' },
        { name: 'GitHub', link: '#' },
      ],
    },
    {
      name: 'Nayara Azevedo',
      role: 'Desenvolvedor Frontend',
      photo: 'https://via.placeholder.com/100',
      socials: [
        { name: 'LinkedIn', link: '#' },
        { name: 'GitHub', link: '#' },
      ],
    },
    {
      name: 'Rebeca Baruch',
      role: 'UI/UX Designer', 
      photo: 'https://via.placeholder.com/100',
      socials: [
        { name: 'LinkedIn', link: '#' },
        { name: 'GitHub', link: '#' },
      ],
    },
  ];

  return (
    <div className="team">
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
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
