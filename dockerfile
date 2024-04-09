# Use a imagem nginx como base
FROM nginx:alpine

# Copie todos os arquivos do diretório atual para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80 para permitir acesso ao servidor web
EXPOSE 80

# Comando de inicialização para iniciar o servidor Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
