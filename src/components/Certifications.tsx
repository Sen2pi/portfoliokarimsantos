import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const Certifications: React.FC = () => {
  useEffect(() => {
    // Carrega o script do Credly
    if (!document.querySelector('script[src*="credly.com"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      document.head.appendChild(script);
    }
  }, []);

  const credlyBadges = [
    // ... todos os badges anteriores do Credly
    {
      id: '90d51ace-9db3-48e7-b2ab-183dcb837b1d',
      title: 'Java Object Oriented Programming Fundamentals',
      issuer: 'Rumos',
      date: 'November 09, 2021',
      url: 'https://www.credly.com/badges/90d51ace-9db3-48e7-b2ab-183dcb837b1d/public_url',
      type: 'credly'
    },
    {
      id: '90d51ace-9db3-48e7-b2ab-183dcb837b1d',
      title: 'Java Object Oriented Programming Fundamentals',
      issuer: 'Rumos',
      date: 'November 09, 2021',
      url: 'https://www.credly.com/badges/90d51ace-9db3-48e7-b2ab-183dcb837b1d/public_url',
      type: 'credly'
    },
    {
      id: '49b7e9bc-e95c-4c94-a1f3-1c6d5f149182',
      title: 'Algorithm Junior Challenge',
      issuer: 'Rumos',
      date: 'November 11, 2021',
      url: 'https://www.credly.com/badges/49b7e9bc-e95c-4c94-a1f3-1c6d5f149182/public_url',
      type: 'credly'
    },
    {
      id: 'f1037e60-b8ab-4c18-bbc5-f2678b858a38',
      title: 'Programming Experience',
      issuer: 'Rumos',
      date: 'November 18, 2021',
      url: 'https://www.credly.com/badges/f1037e60-b8ab-4c18-bbc5-f2678b858a38/public_url',
      type: 'credly'
    },
    {
      id: 'c55a8cad-8de3-4479-a49d-b32891dd9edb',
      title: 'Database and SQL Fundamentals with JDBC',
      issuer: 'Rumos',
      date: 'December 16, 2021',
      url: 'https://www.credly.com/badges/c55a8cad-8de3-4479-a49d-b32891dd9edb/public_url',
      type: 'credly'
    },
    {
      id: '86dda9ad-1e71-4073-b84c-4dcd15d209a3',
      title: 'Online Java Application Web API',
      issuer: 'Rumos',
      date: 'January 13, 2022',
      url: 'https://www.credly.com/badges/86dda9ad-1e71-4073-b84c-4dcd15d209a3/public_url',
      type: 'credly'
    },
    {
      id: '8ebdcb07-4d28-4055-b25d-ee449302264e',
      title: 'Java Programming',
      issuer: 'Rumos',
      date: 'March 08, 2022',
      url: 'https://www.credly.com/badges/8ebdcb07-4d28-4055-b25d-ee449302264e/public_url',
      type: 'credly'
    },
    {
      id: '4df09cc5-2044-4dc9-a61f-e884827715a7',
      title: 'Algorithm Senior Challenge',
      issuer: 'Rumos',
      date: 'March 12, 2022',
      url: 'https://www.credly.com/badges/4df09cc5-2044-4dc9-a61f-e884827715a7/public_url',
      type: 'credly'
    },
    {
      id: '2f4017ef-93e8-4212-a87b-eaada397b132',
      title: 'JAVA SE: Programming II',
      issuer: 'Rumos',
      date: 'April 06, 2022',
      url: 'https://www.credly.com/badges/2f4017ef-93e8-4212-a87b-eaada397b132/public_url',
      type: 'credly'
    },
    {
      id: 'b7f0fee7-0064-4a26-b3af-536270a62f09',
      title: 'Static Web with HTML5 and CSS3',
      issuer: 'Rumos',
      date: 'July 20, 2022',
      url: 'https://www.credly.com/badges/b7f0fee7-0064-4a26-b3af-536270a62f09/public_url',
      type: 'credly'
    },
    {
      id: '352636dc-154a-426d-83fb-9a29917dfd19',
      title: 'Java Application Development',
      issuer: 'Rumos',
      date: 'July 23, 2022',
      url: 'https://www.credly.com/badges/352636dc-154a-426d-83fb-9a29917dfd19/public_url',
      type: 'credly'
    },
    {
      id: '89c33ab7-c8bc-43d7-b9b9-1850787a800c',
      title: 'Dynamic Web with JavaScript/TypeScript',
      issuer: 'Rumos',
      date: 'August 05, 2022',
      url: 'https://www.credly.com/badges/89c33ab7-c8bc-43d7-b9b9-1850787a800c/public_url',
      type: 'credly'
    },
    {
      id: '78a543ce-252d-4778-8984-8381d6cc391d',
      title: 'Introduction to Packet Tracer',
      issuer: 'Cisco',
      date: 'November 01, 2023',
      url: 'https://www.credly.com/badges/78a543ce-252d-4778-8984-8381d6cc391d/public_url',
      type: 'credly'
    },
    {
      id: '74952baa-5003-4997-9552-8f6f35cd45fa',
      title: 'Networking Basics',
      issuer: 'Cisco',
      date: 'November 03, 2023',
      url: 'https://www.credly.com/badges/74952baa-5003-4997-9552-8f6f35cd45fa/public_url',
      type: 'credly'
    },
    {
      id: 'e941837c-832a-40c4-a48b-ad366d5cb92b',
      title: 'Google Cybersecurity Professional Certificate V2',
      issuer: 'Coursera',
      date: 'September 25, 2024',
      url: 'https://www.credly.com/badges/e941837c-832a-40c4-a48b-ad366d5cb92b/public_url',
      type: 'credly'
    }
    // ... resto dos badges Credly
  ];

  const courseraCredentials = [
    {
      id: 'MS3BS7GEQ45G',
      title: 'Certified Ethical Hacking (v12)',
      issuer: 'LearnKartS via Coursera',
      date: 'October 02, 2024',
      url: 'https://coursera.org/share/8471c95ee17aa41710676f12495b6b75',
      verifyUrl: 'https://coursera.org/verify/specialization/MS3BS7GEQ45G',
      type: 'coursera',
      description: 'Programa de cursos integrados em Ethical Hacking',
      courses: [
        'Ethical Hacking Fundamentals',
        'System and Network Security', 
        'Advanced Cybersecurity',
        'CEH (v12) Practice Projects and Exam Simulators'
      ]
    },
        {
      id: '0b8ce9363e4582741da051c37cbf6812',
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google via Coursera',
      date: 'September 15, 2024',
      url: 'https://coursera.org/share/0b8ce9363e4582741da051c37cbf6812',
      verifyUrl: 'https://coursera.org/verify/professional-cert/0b8ce9363e4582741da051c37cbf6812',
      type: 'coursera',
      description: 'Programa profissional de 8 cursos em Cybersecurity (6 meses, 7h/semana)',
      courses: [
        'Foundations of Cybersecurity',
        'Play It Safe: Manage Security Risks',
        'Connect and Protect: Networks and Network Security',
        'Tools of the Trade: Linux and SQL',
        'Assets, Threats, and Vulnerabilities',
        'Sound the Alarm: Detection and Response',
        'Automate Cybersecurity Tasks with Python',
        'Put It to Work: Prepare for Cybersecurity Jobs'
      ]
    }

  ];

  const allCredentials = [...credlyBadges, ...courseraCredentials];

  const renderCredlyBadge = (badge: any) => (
    <div className="certifications-badge-container">
      <div 
        className="certifications-badge-embed"
        dangerouslySetInnerHTML={{ 
          __html: `<div data-iframe-width="400" data-iframe-height="250" data-share-badge-id="${badge.id}" data-share-badge-host="https://www.credly.com"></div>` 
        }}
      />
    </div>
  );

  const renderCourseraCertificate = (credential: any) => (
    <div className="certifications-coursera-container">
      <div className="certifications-coursera-badge">
        <div className="certifications-coursera-logo">
          <span className="text-blue-500 font-bold text-lg">coursera</span>
        </div>
        <div className="certifications-coursera-type">
          <span className="text-xs text-gray-400">SPECIALIZATION CERTIFICATE</span>
        </div>
      </div>
      
      {/* Cursos incluídos */}
      <div className="certifications-coursera-courses">
        {credential.courses.map((course: string, index: number) => (
          <div key={index} className="certifications-course-item">
            <Award size={12} className="text-green-400" />
            <span className="text-xs text-gray-300">{course}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            &lt;Certificações/&gt;
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {allCredentials.length} certificações profissionais verificadas digitalmente
          </p>
        </motion.div>

        {/* Grid de Badges */}
        <div className="certifications-grid">
          {allCredentials.map((credential, index) => (
            <motion.div
              key={credential.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`certifications-card ${credential.type === 'coursera' ? 'certifications-card-coursera' : ''}`}
            >
              {/* Badge/Certificate Display */}
              {credential.type === 'credly' 
                ? renderCredlyBadge(credential)
                : renderCourseraCertificate(credential)
              }

              {/* Badge Info */}
              <h3 className="certifications-title">
                {credential.title}
              </h3>
              
              <div className="certifications-info">
                <div className="certifications-issuer">{credential.issuer}</div>
                <div className="certifications-date">
                  {new Date(credential.date).toLocaleDateString('pt-PT', { 
                    year: 'numeric', 
                    month: 'short' 
                  })}
                </div>
              </div>


              {/* Links */}
              <div className="certifications-links">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={credential.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certifications-link"
                >
                  <ExternalLink size={10} />
                  <span>Ver</span>
                </motion.a>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resumo atualizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="certifications-summary"
        >
          <div className="certifications-stat-card">
            <div className="certifications-stat-number certifications-stat-rumos">
              {credlyBadges.filter(b => b.issuer === 'Rumos').length}
            </div>
            <div className="certifications-stat-label">Certificações Rumos</div>
          </div>
          
          <div className="certifications-stat-card">
            <div className="certifications-stat-number certifications-stat-cisco">
              {credlyBadges.filter(b => b.issuer === 'Cisco').length}
            </div>
            <div className="certifications-stat-label">Certificações Cisco</div>
          </div>
          
          <div className="certifications-stat-card">
            <div className="certifications-stat-number certifications-stat-coursera">
              {courseraCredentials.length}
            </div>
            <div className="certifications-stat-label">Certificações Coursera</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
