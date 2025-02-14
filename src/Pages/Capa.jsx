"use client"

import { useState, useEffect } from "react"
import { ShieldCheck, Clock, Code, Network, Lock, FileText, Zap } from "lucide-react"
import logo from '../Assets/logo.png'
const CyberSecurityWorkshopCover = () => {
  const [matrix, setMatrix] = useState([])

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
    const rows = 20
    const cols = 40

    const generateMatrix = () => {
      return Array(rows)
        .fill()
        .map(() =>
          Array(cols)
            .fill()
            .map(() => characters[Math.floor(Math.random() * characters.length)]),
        )
    }

    setMatrix(generateMatrix())

    const interval = setInterval(() => {
      setMatrix(generateMatrix())
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D4C3B] to-[#1A2C23] flex items-center justify-center p-4">
      <div className="relative bg-[#E3DACD] rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl">
        {/* Matrix Background */}
        <div className="absolute inset-0 opacity-10">
          {matrix.map((row, i) => (
            <div key={i} className="flex">
              {row.map((char, j) => (
                <span key={j} className="text-[#D96C4A] text-[0.5rem] sm:text-xs md:text-sm font-mono">
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Column */}
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D4C3B] mb-4 leading-tight">
                Workshop de Introdução à CyberSegurança com Python
              </h1>
              <p className="text-lg sm:text-xl text-[#D96C4A] mb-6">
                Domine as habilidades essenciais para proteger o mundo digital
              </p>
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D4C3B]" />
                <span className="text-base sm:text-lg text-[#2D4C3B]">Duração: 2 horas</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#2D4C3B] mb-4">Estrutura do Workshop</h2>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: ShieldCheck, text: "Introdução à Cibersegurança" },
                  { icon: Code, text: "Conceitos Básicos de Python" },
                  { icon: Zap, text: "Automação de Tarefas" },
                  { icon: Network, text: "Análise de Redes" },
                  { icon: Lock, text: "Criptografia Básica" },
                  { icon: FileText, text: "Insights de CyberSegurança" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-[#2D4C3B] p-1.5 sm:p-2 rounded-full">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#E3DACD]" />
                    </div>
                    <span className="text-base sm:text-lg text-[#2D4C3B]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-6 sm:pt-8 border-t border-[#2D4C3B] flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Python Logo" className="w-8 h-8 sm:w-12 sm:h-12" />
              <span className="text-xl sm:text-2xl font-semibold text-[#2D4C3B]">Python para Cibersegurança</span>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-base sm:text-lg text-[#2D4C3B]">Para iniciantes e intermediários</p>
              <p className="text-base sm:text-lg text-[#2D4C3B]">Hands-on com exemplos práticos</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 sm:w-24 sm:h-24 border-4 border-[#D96C4A] rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 sm:w-24 sm:h-24 border-4 border-[#2D4C3B] rounded-full opacity-30 animate-ping"></div>
      </div>
    </div>
  )
}

export default CyberSecurityWorkshopCover

