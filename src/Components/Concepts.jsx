"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, Eye, Zap, Globe, AlertTriangle } from "lucide-react"

const concepts = [
  {
    icon: Shield,
    title: "Princípios da Cibersegurança",
    content:
      "A cibersegurança se baseia em três princípios fundamentais: Confidencialidade (manter dados privados), Integridade (garantir que os dados não sejam alterados) e Disponibilidade (assegurar acesso aos dados quando necessário). Esses princípios são conhecidos como a tríade CIA.",
  },
  {
    icon: Lock,
    title: "Criptografia",
    content:
      "A criptografia é como um cofre digital para suas informações. Ela transforma dados legíveis em um formato codificado, protegendo-os de olhares indesejados. Existem dois tipos principais: simétrica (usa a mesma chave para codificar e decodificar) e assimétrica (usa um par de chaves, uma pública e uma privada).",
  },
  {
    icon: Eye,
    title: "Engenharia Social",
    content:
      "A engenharia social é a arte de manipular pessoas para obter informações confidenciais. É como um truque de mágica, mas com consequências sérias. Os atacantes usam táticas psicológicas para enganar as pessoas e fazê-las revelar dados sensíveis ou realizar ações prejudiciais.",
  },
  {
    icon: Zap,
    title: "Firewall",
    content:
      "Um firewall é como um guarda de segurança digital para sua rede. Ele monitora e controla o tráfego de entrada e saída com base em regras predeterminadas. Firewalls podem ser de hardware ou software e são essenciais para proteger redes contra ameaças externas.",
  },
  {
    icon: Globe,
    title: "VPN (Rede Privada Virtual)",
    content:
      "Uma VPN é como um túnel seguro através da internet. Ela criptografa sua conexão, tornando-a privada e segura, mesmo em redes públicas. VPNs são úteis para proteger sua privacidade online e acessar conteúdo com restrições geográficas.",
  },
  {
    icon: AlertTriangle,
    title: "Malware",
    content:
      "Malware é um termo geral para software malicioso, incluindo vírus, trojans, ransomware e spyware. É como um invasor digital que pode causar danos, roubar informações ou tomar controle de sistemas. A proteção contra malware é crucial para a segurança cibernética.",
  },
]

const CyberSecurityConcepts = () => {
  const [selectedConcept, setSelectedConcept] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D4C3B] to-[#1A2C23] text-[#E3DACD] p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-[#2D4C3B] opacity-10"
        style={{
          backgroundImage: `linear-gradient(#D96C4A 1px, transparent 1px), linear-gradient(90deg, #D96C4A 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#D96C4A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Conceitos Fundamentais de Cibersegurança
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              className="bg-[#E3DACD] text-[#2D4C3B] p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedConcept(selectedConcept === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <concept.icon className="w-8 h-8 mr-4 text-[#D96C4A]" />
                <h2 className="text-xl font-semibold">{concept.title}</h2>
              </div>
              <AnimatePresence>
                {selectedConcept === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm mt-2"
                  >
                    {concept.content}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#E3DACD] text-[#2D4C3B] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Teste seus Conhecimentos</h2>
          <p className="mb-4">
            Agora que você aprendeu sobre alguns conceitos fundamentais de cibersegurança, que tal colocar esse
            conhecimento em prática? Aqui está um pequeno desafio para você:
          </p>
          <pre className="bg-[#2D4C3B] text-[#E3DACD] p-4 rounded-lg overflow-x-auto">
            <code>{`
# Desafio de Cibersegurança

# 1. Implemente uma função simples de criptografia
def cifra_cesar(texto, chave):
    # Sua implementação aqui
    pass

# 2. Crie uma função para verificar a força de uma senha
def verificar_forca_senha(senha):
    # Sua implementação aqui
    pass

# 3. Simule um firewall básico
def firewall_basico(pacote):
    # Sua implementação aqui
    pass

# Teste suas funções aqui
print(cifra_cesar("HELLO WORLD", 3))
print(verificar_forca_senha("senha123"))
print(firewall_basico({"origem": "192.168.1.1", "destino": "10.0.0.1", "porta": 80}))
            `}</code>
          </pre>
          <p className="mt-4">
            Tente implementar essas funções! Isso ajudará a solidificar seu entendimento dos conceitos de
            cibersegurança.
          </p>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl mb-4">Pronto para aprofundar seus conhecimentos em cibersegurança?</p>
          <button className="bg-[#D96C4A] text-[#E3DACD] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#C05A3E] transition-colors duration-300 shadow-lg">
            Explorar Tópicos Avançados
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default CyberSecurityConcepts

