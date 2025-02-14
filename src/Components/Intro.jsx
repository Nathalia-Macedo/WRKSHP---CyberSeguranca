"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Zap, Globe, Database, Code } from "lucide-react"
import React from "react"

const concepts = [
  {
    icon: Shield,
    title: "O que é Cibersegurança?",
    content:
      "A cibersegurança é a prática de proteger sistemas, redes e programas contra ataques digitais. Assim como um escudo protege um guerreiro, a cibersegurança defende nossa presença digital contra ameaças maliciosas.",
    color: "#D96C4A",
  },
  {
    icon: Lock,
    title: "Por que é importante?",
    content:
      "Na era digital, nossas vidas estão online. A cibersegurança é crucial para proteger dados sensíveis, manter a privacidade e garantir a integridade de sistemas críticos. Sem ela, estaríamos vulneráveis a roubos de identidade, fraudes financeiras e muito mais.",
    color: "#2D4C3B",
  },
  {
    icon: Zap,
    title: "Ataques comuns",
    content:
      "Hackers usam várias técnicas: Phishing engana usuários para obter informações, Malware infecta sistemas, e ataques DDoS sobrecarregam serviços. Conhecer essas ameaças é o primeiro passo para se proteger contra elas.",
    color: "#D96C4A",
  },
  {
    icon: Globe,
    title: "Áreas de atuação",
    content:
      "A cibersegurança abrange várias especialidades: Segurança de Redes protege infraestruturas de comunicação, Análise de Vulnerabilidades identifica pontos fracos, e Forense Digital investiga incidentes. Cada área desempenha um papel vital na defesa digital.",
    color: "#2D4C3B",
  },
  {
    icon: Database,
    title: "Ferramentas necessárias",
    content:
      "Profissionais de cibersegurança utilizam um arsenal de ferramentas: Linguagens de programação como Python, ambientes de desenvolvimento como VS Code, e bibliotecas especializadas. Essas ferramentas permitem criar soluções de segurança personalizadas e eficazes.",
    color: "#D96C4A",
  },
  {
    icon: Code,
    title: "Python em Cibersegurança",
    content:
      "Python é uma linguagem versátil e poderosa na cibersegurança. Sua simplicidade e vasta gama de bibliotecas permitem criar scripts de automação, ferramentas de análise de rede e programas de criptografia. Python é essencial para qualquer profissional de segurança moderno.",
    color: "#2D4C3B",
  },
]

const CyberSecurityHub = () => {
  const [activeConcept, setActiveConcept] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D4C3B] via-[#1F3A2D] to-[#1A2C23] text-[#E3DACD] p-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#D96C4A] rounded-full"
              initial={{
                opacity: Math.random() * 0.5 + 0.1,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#D96C4A]/5 dark:text-[#D96C4A]/10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                y: [0, -20, 0],
                rotate: [0, i % 2 === 0 ? 360 : -360],
              }}
              transition={{
                duration: 8,
                delay: i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 40 + 20}px`,
              }}
            >
              {["function()", "const", "let", "=>", "</>", "{}", "[]"][i % 7]}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Central de Operações de Cibersegurança
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveConcept(activeConcept === index ? null : index)}
            >
              <div className="w-32 h-36 relative cursor-pointer">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.polygon
                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                    fill={concept.color}
                    stroke="#E3DACD"
                    strokeWidth="1"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: activeConcept === index ? 1 : 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#E3DACD]">
                  <concept.icon className="w-8 h-8 mb-2" />
                  <p className="text-xs text-center px-2">{concept.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#2D4C3B]/80 backdrop-blur-md text-[#E3DACD] p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: activeConcept !== null ? 1 : 0,
            y: activeConcept !== null ? 0 : 50,
          }}
          transition={{ duration: 0.3 }}
        >
          {activeConcept !== null && (
            <>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span style={{ color: concepts[activeConcept].color }}>
                  {React.createElement(concepts[activeConcept].icon, { className: "w-6 h-6 mr-2" })}
                </span>
                {concepts[activeConcept].title}
              </h2>
              <p>{concepts[activeConcept].content}</p>
            </>
          )}
        </motion.div>
      </div>

   
    </div>
  )
}

export default CyberSecurityHub

