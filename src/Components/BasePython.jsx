"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Terminal, FileText, Book, Play, ChevronRight, ChevronLeft } from "lucide-react"

const topics = [
  {
    title: "Variáveis e Tipos de Dados",
    icon: Code,
    content: `
# Variáveis e Tipos de Dados em Python

# Strings (texto)
nome = "Alice"  # Uma variável 'nome' recebendo uma string

# Números inteiros
idade = 30  # Uma variável 'idade' recebendo um número inteiro

# Números de ponto flutuante (decimais)
altura = 1.65  # Uma variável 'altura' recebendo um número decimal

# Booleanos (True/False)
is_estudante = True  # Uma variável 'is_estudante' recebendo um valor booleano

# Listas (coleções ordenadas e mutáveis)
hobbies = ["leitura", "natação", "música"]  # Uma lista de strings

# Dicionários (pares de chave-valor)
pessoa = {
    "nome": "Alice",
    "idade": 30,
    "cidade": "São Paulo"
}  # Um dicionário com informações sobre uma pessoa

# Imprimindo os valores
print(f"Nome: {nome}")
print(f"Idade: {idade}")
print(f"Altura: {altura}")
print(f"É estudante? {is_estudante}")
print(f"Hobbies: {hobbies}")
print(f"Informações da pessoa: {pessoa}")
    `,
  },
  {
    title: "Estruturas de Controle",
    icon: FileText,
    content: `
# Estruturas de Controle em Python

# Estrutura condicional (if, elif, else)
idade = 18

if idade < 18:
    print("Menor de idade")
elif idade == 18:
    print("Acabou de atingir a maioridade")
else:
    print("Maior de idade")

# Loop for (para iterar sobre uma sequência)
frutas = ["maçã", "banana", "laranja"]

for fruta in frutas:
    print(f"Eu gosto de {fruta}")

# Loop while (executa enquanto uma condição for verdadeira)
contador = 0

while contador < 5:
    print(f"Contagem: {contador}")
    contador += 1  # Incrementa o contador

# Usando break para sair de um loop
for i in range(10):
    if i == 5:
        print("Encontramos o 5!")
        break
    print(i)

# Usando continue para pular uma iteração
for i in range(5):
    if i == 2:
        continue
    print(i)
    `,
  },
  {
    title: "Funções",
    icon: Book,
    content: `
# Funções em Python

# Definindo uma função simples
def saudacao(nome):
    return f"Olá, {nome}!"

# Chamando a função
mensagem = saudacao("Alice")
print(mensagem)

# Função com múltiplos parâmetros e valor padrão
def calcular_preco(valor, desconto=0):
    return valor - (valor * desconto)

# Chamando a função com e sem desconto
preco1 = calcular_preco(100)
preco2 = calcular_preco(100, 0.1)

print(f"Preço sem desconto: {preco1}")
print(f"Preço com 10% de desconto: {preco2}")

# Função com número variável de argumentos
def soma(*numeros):
    total = 0
    for num in numeros:
        total += num
    return total

# Chamando a função com diferentes números de argumentos
resultado1 = soma(1, 2, 3)
resultado2 = soma(10, 20, 30, 40)

print(f"Soma 1: {resultado1}")
print(f"Soma 2: {resultado2}")
`,
  },
  {
    title: "Módulos e Bibliotecas",
    icon: Book,
    content: `
# Módulos e Bibliotecas em Python

# Importando um módulo inteiro
import math

# Usando funções do módulo math
raiz_quadrada = math.sqrt(16)
print(f"A raiz quadrada de 16 é: {raiz_quadrada}")

# Importando funções específicas de um módulo
from random import randint, choice

# Gerando um número aleatório entre 1 e 10
numero_aleatorio = randint(1, 10)
print(f"Número aleatório: {numero_aleatorio}")

# Escolhendo um item aleatório de uma lista
frutas = ["maçã", "banana", "laranja", "uva"]
fruta_escolhida = choice(frutas)
print(f"Fruta escolhida aleatoriamente: {fruta_escolhida}")

# Importando um módulo com um alias
import datetime as dt

# Obtendo a data e hora atual
agora = dt.datetime.now()
print(f"Data e hora atual: {agora}")

# Criando e usando nosso próprio módulo
# Suponha que temos um arquivo chamado 'meu_modulo.py' com o seguinte conteúdo:
#
# def saudacao(nome):
#     return f"Olá, {nome}! Bem-vindo ao nosso módulo personalizado."
#
# CONSTANTE = 42

# Importando e usando nosso módulo personalizado
import meu_modulo

mensagem = meu_modulo.saudacao("Alice")
print(mensagem)
print(f"A constante do nosso módulo é: {meu_modulo.CONSTANTE}")
    `,
  },
  {
    title: "Exemplo Prático",
    icon: Terminal,
    content: `
# Exemplo Prático: Contando linhas em um arquivo

# Importando o módulo 'os' para lidar com caminhos de arquivo
import os

# Função para contar as linhas de um arquivo
def contar_linhas(nome_arquivo):
    # Verifica se o arquivo existe
    if not os.path.exists(nome_arquivo):
        return f"Erro: O arquivo '{nome_arquivo}' não existe."
    
    # Inicializa o contador de linhas
    contador = 0
    
    # Abre o arquivo e conta as linhas
    try:
        with open(nome_arquivo, 'r') as arquivo:
            for linha in arquivo:
                contador += 1
        return f"O arquivo '{nome_arquivo}' tem {contador} linhas."
    except Exception as e:
        return f"Ocorreu um erro ao ler o arquivo: {str(e)}"

# Nome do arquivo que queremos contar as linhas
nome_arquivo = "exemplo.txt"

# Chama a função e imprime o resultado
resultado = contar_linhas(nome_arquivo)
print(resultado)

# Exemplo de uso:
# 1. Crie um arquivo chamado 'exemplo.txt' com algumas linhas de texto
# 2. Execute este script
# 3. O script irá contar e exibir o número de linhas no arquivo
    `,
  },
]

const PythonBasics = () => {
  const [activeTopic, setActiveTopic] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const nextTopic = () => setActiveTopic((prev) => (prev + 1) % topics.length)
  const prevTopic = () => setActiveTopic((prev) => (prev - 1 + topics.length) % topics.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D4C3B] via-[#1F3A2D] to-[#1A2C23] text-[#E3DACD] p-4 sm:p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Revisão Rápida de Python
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile menu button */}
          <button
            className="md:hidden bg-[#D96C4A] text-[#E3DACD] px-4 py-2 rounded-lg mb-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          </button>

          {/* Sidebar */}
          <AnimatePresence>
            {(isMenuOpen || !isMenuOpen) && (
              <motion.div
                className={`md:w-1/4 ${isMenuOpen ? "block" : "hidden md:block"}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-2">
                  {topics.map((topic, index) => (
                    <motion.button
                      key={index}
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        activeTopic === index
                          ? "bg-[#D96C4A] text-[#E3DACD]"
                          : "bg-[#E3DACD] text-[#2D4C3B] hover:bg-[#D96C4A] hover:text-[#E3DACD]"
                      }`}
                      onClick={() => {
                        setActiveTopic(index)
                        setIsMenuOpen(false)
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <topic.icon className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">{topic.title}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTopic}
                className="bg-[#E3DACD] text-[#2D4C3B] p-4 sm:p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4">{topics[activeTopic].title}</h2>
                <div className="bg-[#2D4C3B] text-[#E3DACD] p-4 rounded-lg overflow-x-auto">
                  <pre className="font-mono text-xs sm:text-sm whitespace-pre-wrap">
                    <code>
                      {topics[activeTopic].content.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {"\n"}
                        </React.Fragment>
                      ))}
                    </code>
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6">
              <motion.button
                className="bg-[#D96C4A] text-[#E3DACD] px-4 py-2 rounded-lg flex items-center"
                onClick={prevTopic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Anterior
              </motion.button>
              <motion.button
                className="bg-[#D96C4A] text-[#E3DACD] px-4 py-2 rounded-lg flex items-center"
                onClick={nextTopic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Próximo
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PythonBasics

