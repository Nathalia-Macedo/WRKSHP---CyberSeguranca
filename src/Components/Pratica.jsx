"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, Eye, Zap, Globe, AlertTriangle, Server, Cpu } from "lucide-react"

const concepts = [
  {
    icon: Shield,
    title: "Firewall",
    content:
      "Um firewall é como um guarda de segurança digital para sua rede. Ele monitora e controla o tráfego de entrada e saída, protegendo contra ameaças externas.",
    realWorldExample:
      "Imagine um banco: o firewall é como o sistema de segurança que decide quem pode entrar e sair, verificando a identidade e as intenções de cada 'visitante' digital.",
  },
  {
    icon: Lock,
    title: "Criptografia",
    content:
      "A criptografia transforma dados em um formato codificado, protegendo-os de acessos não autorizados. É como um cofre digital para suas informações.",
    realWorldExample:
      "Quando você usa um aplicativo de mensagens seguro, a criptografia garante que apenas você e o destinatário possam ler as mensagens, mesmo que alguém as intercepte.",
  },
  {
    icon: Eye,
    title: "Engenharia Social",
    content:
      "A engenharia social explora a psicologia humana para obter informações confidenciais. Os atacantes manipulam pessoas para revelar dados sensíveis ou realizar ações prejudiciais.",
    realWorldExample:
      "Um golpista ligando para você, fingindo ser do suporte técnico do seu banco, pedindo suas credenciais para 'resolver um problema' é um exemplo clássico de engenharia social.",
  },
  {
    icon: Zap,
    title: "Malware",
    content:
      "Malware é um software malicioso projetado para danificar, interromper ou ganhar acesso não autorizado a um sistema. Inclui vírus, trojans, ransomware e spyware.",
    realWorldExample:
      "O ransomware que bloqueou sistemas de saúde em vários países em 2017, exigindo pagamento para liberar os dados, é um exemplo impactante de malware.",
  },
  {
    icon: Globe,
    title: "VPN (Rede Privada Virtual)",
    content:
      "Uma VPN cria um túnel seguro e criptografado através da internet, protegendo sua privacidade e permitindo acesso seguro a recursos de rede remotos.",
    realWorldExample:
      "Funcionários trabalhando remotamente usam VPNs para acessar com segurança os sistemas internos da empresa, como se estivessem no escritório.",
  },
  {
    icon: AlertTriangle,
    title: "Phishing",
    content:
      "Phishing é uma técnica que usa comunicações fraudulentas para enganar as pessoas e fazê-las revelar informações sensíveis ou baixar malware.",
    realWorldExample:
      "Um e-mail que parece ser do seu banco, pedindo para você 'verificar' sua conta clicando em um link, é uma tentativa comum de phishing.",
  },
  {
    icon: Server,
    title: "Backup e Recuperação",
    content:
      "Backup envolve copiar dados para armazenamento seguro, enquanto recuperação é o processo de restaurar esses dados em caso de perda ou corrupção.",
    realWorldExample:
      "Empresas realizam backups regulares de seus dados críticos para se proteger contra falhas de hardware, ataques de ransomware ou desastres naturais.",
  },
  {
    icon: Cpu,
    title: "Segurança de IoT",
    content:
      "A segurança de IoT (Internet das Coisas) protege dispositivos conectados e redes na era da computação ubíqua, abordando vulnerabilidades únicas desses sistemas.",
    realWorldExample:
      "Proteger câmeras de segurança domésticas inteligentes contra hackers que poderiam usá-las para espionar residências é um desafio crítico de segurança de IoT.",
  },
]

const CyberSecurityInsights = () => {
  const [selectedConcept, setSelectedConcept] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#E3DACD",
        color: "#2D4C3B",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dynamic background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(to bottom right, #E3DACD, rgba(217, 108, 74, 0.3), rgba(45, 76, 59, 0.2))",
          backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`,
          transition: "background-position 0.3s ease-out",
        }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              backgroundColor: "rgba(45, 76, 59, 0.2)",
              borderRadius: "50%",
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
          />
        ))}
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <motion.h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#2D4C3B",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Insights de Cibersegurança
        </motion.h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              style={{
                backgroundColor: "rgba(227, 218, 205, 0.8)",
                backdropFilter: "blur(10px)",
                padding: "1.5rem",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                border: "1px solid rgba(45, 76, 59, 0.2)",
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(227, 218, 205, 0.9)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedConcept(selectedConcept === index ? null : index)}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundColor: "#D96C4A",
                    borderRadius: "50%",
                    padding: "0.5rem",
                    marginRight: "1rem",
                  }}
                >
                  <concept.icon style={{ width: "1.5rem", height: "1.5rem", color: "#E3DACD" }} />
                </motion.div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#2D4C3B" }}>{concept.title}</h2>
              </div>
              <AnimatePresence>
                {selectedConcept === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p style={{ fontSize: "0.875rem", marginBottom: "1rem", color: "#2D4C3B" }}>{concept.content}</p>
                    <div style={{ backgroundColor: "rgba(45, 76, 59, 0.1)", padding: "1rem", borderRadius: "0.5rem" }}>
                      <h3 style={{ color: "#D96C4A", fontWeight: "600", marginBottom: "0.5rem" }}>
                        Exemplo do Mundo Real:
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "#2D4C3B" }}>{concept.realWorldExample}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{
            backgroundColor: "rgba(227, 218, 205, 0.8)",
            backdropFilter: "blur(10px)",
            padding: "2rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(45, 76, 59, 0.2)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#D96C4A" }}>
            Protegendo-se no Mundo Digital
          </h2>
          <p style={{ marginBottom: "1rem", color: "#2D4C3B" }}>
            A cibersegurança não é apenas para grandes empresas ou especialistas em tecnologia. Todos nós podemos tomar
            medidas para nos proteger online. Aqui estão algumas dicas práticas:
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", color: "#2D4C3B" }}>
            <li>Use senhas fortes e únicas para cada conta</li>
            <li>Mantenha seu software e sistemas operacionais atualizados</li>
            <li>Seja cauteloso ao clicar em links ou baixar anexos de e-mails</li>
            <li>Use autenticação de dois fatores sempre que possível</li>
            <li>Faça backups regulares de seus dados importantes</li>
            <li>Seja cuidadoso ao usar redes Wi-Fi públicas</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default CyberSecurityInsights

