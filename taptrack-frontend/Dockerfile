# Usa Node 22.20.0 (mesma versão que você usa localmente)
FROM node:22.20.0

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (melhor cache)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código do projeto Angular
COPY . .

# Expõe a porta padrão do ng serve
EXPOSE 4200

# Comando para rodar em modo desenvolvimento com proxy ativo
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4200", "--proxy-config", "src/proxy.conf.json"]