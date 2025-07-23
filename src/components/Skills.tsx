import React, { type JSX } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { useLanguage } from '../contexts/LanguageContext';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCoffeescript,
  SiKotlin,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiGit,
  SiDocker,
  SiAndroid,
  SiNginx,
  SiSharp,
  SiUnity,
  SiSpringboot,
  SiMui,
} from "react-icons/si";
import { FaLeaf } from "react-icons/fa";

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const categories = {
    frontend: t('skills.frontend'),
    backend: t('skills.backend'),
    mobile: t('skills.mobile'),
    database: t('skills.database'),
    tools: t('skills.tools'),
  };

  const getSkillIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      react: <SiReact className="text-blue-400" />,
      javascript: <SiJavascript className="text-yellow-400" />,
      typescript: <SiTypescript className="text-blue-500" />,
      python: <SiPython className="text-green-400" />,
      java: <SiCoffeescript className="text-red-500" />,
      csharp: <SiSharp className="text-purple-600" />,
      kotlin: <SiKotlin className="text-purple-500" />,
      html5: <SiHtml5 className="text-orange-500" />,
      css3: <SiCss3 className="text-blue-500" />,
      nodejs: <SiNodedotjs className="text-green-500" />,
      django: <SiDjango className="text-green-600" />,
      mysql: <SiMysql className="text-blue-600" />,
      postgresql: <SiPostgresql className="text-blue-700" />,
      linux: <SiLinux className="text-yellow-500" />,
      git: <SiGit className="text-orange-600" />,
      docker: <SiDocker className="text-blue-400" />,
      android: <SiAndroid className="text-green-500" />,
      nginx: <SiNginx className="text-green-600" />,
      unity: <SiUnity className="text-gray-300" />,
      springboot: <SiSpringboot className="text-green-500" />,
      materialui: <SiMui className="text-blue-500" />,
      h2: <FaLeaf className="text-green-400" />
    };
    return iconMap[iconName] || <span className="text-2xl">💻</span>;
  };

  const languages = [
    { 
      lang: t('lang.portuguese'), 
      level: t('lang.native'), 
      flag: "🇵🇹",
      flagImage: "https://flagcdn.com/w40/pt.png",
      country: t('lang.portugal')
    },
    { 
      lang: t('lang.french'), 
      level: t('lang.native'), 
      flag: "🇫🇷",
      flagImage: "https://flagcdn.com/w40/fr.png",
      country: t('lang.france')
    },
    { 
      lang: t('lang.english'), 
      level: "C2", 
      flag: "🇬🇧",
      flagImage: "https://flagcdn.com/w40/gb.png",
      country: t('lang.uk')
    },
    { 
      lang: t('lang.spanish'), 
      level: "B2", 
      flag: "🇪🇸",
      flagImage: "https://flagcdn.com/w40/es.png",
      country: t('lang.spain')
    },
    { 
      lang: t('lang.chinese'), 
      level: "A1", 
      flag: "🇨🇳",
      flagImage: "https://flagcdn.com/w40/cn.png",
      country: t('lang.china')
    },
    { 
      lang: t('lang.japanese'), 
      level: "A1", 
      flag: "🇯🇵",
      flagImage: "https://flagcdn.com/w40/jp.png",
      country: t('lang.japan')
    },
    { 
      lang: t('lang.thai'), 
      level: "A1", 
      flag: "🇹🇭",
      flagImage: "https://flagcdn.com/w40/th.png",
      country: t('lang.thailand')
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            &lt;{t('skills.title')}/&gt;
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, title]) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === key
            );

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-6 font-mono">
                  {title}
                </h3>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getSkillIcon(skill.icon)}</span>
                        <span className="text-gray-300 font-mono">{skill.name}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          />
                        </div>
                        <span className="text-gray-400 text-sm font-mono w-8">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Linguagens faladas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect rounded-lg p-6"
        >
          <h3 className="text-2xl font-bold text-white mb-6">{t('skills.languages')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {languages.map((language) => (
              <div
                key={language.lang}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors group"
              >
                <div className="mb-3 flex justify-center">
                  <img
                    src={language.flagImage}
                    alt={`Bandeira ${language.country}`}
                    className="w-8 h-6 object-cover rounded shadow-lg group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-2xl">${language.flag}</span>`;
                      }
                    }}
                  />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  {language.lang}
                </h4>
                <p className="text-gray-400 text-xs">{language.level}</p>
                <p className="text-gray-500 text-xs mt-1">{language.country}</p>
              </div>
            ))}
          </div>
          
          {/* Legenda dos níveis */}
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3 text-center">{t('skills.proficiencyLevels')}</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="text-green-400">
                <strong>Nativo:</strong> {t('skills.native')}
              </span>
              <span className="text-blue-400">
                <strong>C2:</strong> {t('skills.c2')}
              </span>
              <span className="text-yellow-400">
                <strong>B2:</strong> {t('skills.b2')}
              </span>
              <span className="text-orange-400">
                <strong>A1:</strong> {t('skills.a1')}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
