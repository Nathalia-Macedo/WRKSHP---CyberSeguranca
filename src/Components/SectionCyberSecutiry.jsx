"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Terminal } from "lucide-react"

const topics = [
  {
    icon: Shield,
    title: "Automação de Tarefas",
    content: `
# Automação de Tarefas em Cibersegurança

# Importamos a biblioteca hashlib para funções de hash criptográfico
# hashlib é uma biblioteca padrão do Python para trabalhar com hashes criptográficos
import hashlib

# Definimos uma função para calcular o hash de um arquivo
# Um hash é como uma "impressão digital" única para dados
# Usamos hashes para verificar se arquivos foram alterados
def calcular_hash(arquivo, algoritmo='sha256'):
    # Criamos um novo objeto de hash com o algoritmo especificado
    # hashlib.new(algoritmo) cria um novo objeto de hash
    hash_func = hashlib.new(algoritmo)
    
    # Abrimos o arquivo em modo binário
    # open(arquivo, 'rb') abre o arquivo em modo de leitura binária
    with open(arquivo, 'rb') as f:
        # Lemos o arquivo em blocos de 4096 bytes
        # iter(lambda: f.read(4096), b'') lê o arquivo em pedaços para economizar memória
        # Continua lendo até encontrar uma string vazia (fim do arquivo)
        for bloco in iter(lambda: f.read(4096), b''):
            # Atualizamos o objeto de hash com cada bloco
            # hash_func.update(bloco) adiciona cada pedaço ao cálculo do hash
            hash_func.update(bloco)
    
    # Retornamos o hash final como uma string hexadecimal
    # hash_func.hexdigest() retorna o hash final como string hexadecimal
    return hash_func.hexdigest()

# Especificamos o nome do arquivo a ser verificado
arquivo = 'exemplo.txt'

# Calculamos e imprimimos o hash do arquivo
print(f"Hash do arquivo: {calcular_hash(arquivo)}")

# Este script pode ser usado para verificar a integridade de arquivos
# comparando o hash calculado com um hash conhecido

# Uso prático:
# - Verificar se arquivos foram modificados
# - Confirmar se downloads foram concluídos corretamente
# - Identificar arquivos duplicados sem comparar todo o conteúdo

# Lembre-se: SHA-256 é considerado seguro atualmente, enquanto MD5 e SHA-1
# são mais rápidos, mas menos seguros para fins criptográficos
    `,
  },
  {
    icon: Terminal,
    title: "Análise de Redes",
    content: `
# Análise de Redes em Cibersegurança

# Importamos a biblioteca socket para comunicação em rede
# socket é usado para criar conexões de rede em Python
# IPv6 (Internet Protocol version 6):
# - É a versão mais recente do protocolo de Internet
# - Usa endereços de 128 bits (ex: 2001:0db8:85a3:0000:0000:8a2e:0370:7334)
# - Oferece um espaço de endereçamento muito maior que o IPv4
# - Tem melhor suporte para segurança e qualidade de serviço

# TCP (Transmission Control Protocol):
# - É um protocolo de transporte confiável e orientado a conexão
# - Garante que os dados sejam entregues na ordem correta e sem erros
# - Usado por muitas aplicações como navegadores web, email, e transferência de arquivos
# Permite que programas se comuniquem através da internet
import socket

# Definimos uma função para verificar se uma porta está aberta
def verificar_porta(ip, porta):
    # Criamos um novo objeto de socket
    # socket.socket(socket.AF_INET, socket.SOCK_STREAM) cria um novo socket
    # Para usar IPv6, você mudaria para: sock = socket.socket(socket.AF_INET6, socket.SOCK_STREAM)
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    
    # Definimos um timeout de 1 segundo para a conexão
    # sock.settimeout(1) define um limite de 1 segundo para tentar se conectar
    sock.settimeout(1)
    
    # Tentamos conectar ao IP e porta especificados
    # sock.connect_ex((ip, porta)) tenta se conectar ao IP e porta
    # Retorna 0 se a conexão for bem-sucedida (porta aberta)
    resultado = sock.connect_ex((ip, porta))
    
    # Fechamos o socket para liberar recursos
    # sock.close() fecha o socket para liberar recursos
    sock.close()
    
    # Retornamos True se a porta estiver aberta, False caso contrário
    return resultado == 0

# Definimos o IP que queremos verificar (127.0.0.1 é o localhost)
ip = '127.0.0.1'

# Iteramos sobre as primeiras 1024 portas
for porta in range(1, 1025):
    # Se a porta estiver aberta, imprimimos uma mensagem
    if verificar_porta(ip, porta):
        print(f"Porta {porta} está aberta.")

# Este script realiza uma varredura básica de portas
# Lembre-se: varrer portas sem permissão pode ser ilegal

# Uso prático:
# - Identificar quais serviços estão rodando em um computador
# - Encontrar possíveis vulnerabilidades em uma rede
# - Verificar se um firewall está funcionando corretamente

# Importante: Sempre obtenha permissão antes de escanear redes que não são suas.
# Varreduras não autorizadas podem ser ilegais e consideradas uma atividade maliciosa.
    `,
  },
  {
    icon: Lock,
    title: "Criptografia Básica",
    content: `
# Criptografia Básica em Cibersegurança

# Importamos a classe Fernet da biblioteca cryptography
# Fernet é uma implementação de criptografia simétrica
# "Simétrica" significa que a mesma chave é usada para criptografar e descriptografar
from cryptography.fernet import Fernet

# Geramos uma nova chave de criptografia
# Fernet.generate_key() gera uma chave segura aleatória de 32 bytes
# Esta chave é crucial para a segurança - quem tiver a chave pode descriptografar a mensagem
chave = Fernet.generate_key()

# Criamos um objeto Fernet com a chave gerada
# Fernet(chave) cria um objeto cipher (cifra) usando a chave gerada
# Este objeto será usado para criptografar e descriptografar mensagens
cipher = Fernet(chave)

# Definimos a mensagem que queremos criptografar
texto = "Minha mensagem secreta"

# Criptografamos a mensagem
# texto.encode() converte a string em bytes (necessário para criptografia)
# cipher.encrypt() criptografa a mensagem usando a chave
texto_criptografado = cipher.encrypt(texto.encode())

# Imprimimos o texto criptografado
print(f"Criptografado: {texto_criptografado}")

# Descriptografamos a mensagem
# cipher.decrypt() descriptografa o texto criptografado usando a mesma chave
# .decode() converte os bytes descriptografados de volta para string
texto_descriptografado = cipher.decrypt(texto_criptografado).decode()

# Imprimimos o texto descriptografado
print(f"Descriptografado: {texto_descriptografado}")

# Este script demonstra criptografia simétrica
# A mesma chave é usada para criptografar e descriptografar

# Demonstração do script:
# - Como gerar uma chave segura para criptografia
# - Como criptografar uma mensagem para que fique ilegível sem a chave
# - Como descriptografar uma mensagem usando a chave correta

# Importância e aplicações:
# - A segurança depende totalmente da proteção da chave
# - Útil para:
#   - Armazenar dados sensíveis de forma segura
#   - Enviar mensagens confidenciais
#   - Proteger informações em trânsito ou armazenadas

# Lembre-se: Na prática, o gerenciamento seguro de chaves é um dos maiores desafios em criptografia
    `,
  },
]

const CyberSecuritySection = () => {
  const [activeTopic, setActiveTopic] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [typedContent, setTypedContent] = useState("")

  useEffect(() => {
    setIsTyping(true)
    setTypedContent("")
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < topics[activeTopic].content.length) {
        setTypedContent((prev) => prev + topics[activeTopic].content[i])
        i++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
      }
    }, 10)

    return () => clearInterval(typingInterval)
  }, [activeTopic])

  return (
    <div className="min-h-screen bg-black text-[#E3DACD] p-4 sm:p-8 font-mono">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-[#D96C4A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cibersegurança com Python
        </motion.h1>

        <div className="bg-[#1a1a1a] rounded-lg p-4 mb-8 flex flex-wrap justify-center gap-4">
          {topics.map((topic, index) => (
            <motion.button
              key={index}
              className={`flex items-center p-3 rounded-md transition-colors ${
                activeTopic === index ? "bg-[#D96C4A] text-black" : "bg-[#2D4C3B] text-[#E3DACD] hover:bg-[#3a6b4f]"
              }`}
              onClick={() => setActiveTopic(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <topic.icon className="w-6 h-6 mr-2" />
              <span className="text-sm font-medium">{topic.title}</span>
            </motion.button>
          ))}
        </div>

        <div className="bg-black border-2 border-[#2D4C3B] rounded-lg p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-[#2D4C3B] flex items-center px-4">
            <div className="w-3 h-3 rounded-full bg-[#D96C4A] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#E3DACD] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#2D4C3B]"></div>
            <span className="ml-4 text-[#E3DACD] text-sm">python script.py</span>
          </div>
          <pre className="mt-8 text-sm overflow-x-auto whitespace-pre-wrap break-words">
            <code>
              {typedContent.split("\n").map((line, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <span className="text-[#D96C4A]">{">>> "}</span>
                  {line.startsWith("#") ? (
                    <span className="text-[#2D4C3B]">{line}</span>
                  ) : line.match(/(import|from|def|class)/) ? (
                    <span className="text-[#4a9e90]">{line}</span>
                  ) : line.match(/(True|False|None)/) ? (
                    <span className="text-[#e2b93d]">{line}</span>
                  ) : (
                    <span className="text-[#E3DACD]">{line}</span>
                  )}
                </motion.span>
              ))}
            </code>
          </pre>
          {isTyping && (
            <motion.span
              className="inline-block h-5 w-2 bg-[#D96C4A]"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
            />
          )}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xl mb-4 text-[#E3DACD]">Pronto para mergulhar mais fundo na cibersegurança?</p>
          <button className="bg-[#D96C4A] text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#c75b3b] transition-colors duration-300">
            Explorar Mais Tópicos
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default CyberSecuritySection

