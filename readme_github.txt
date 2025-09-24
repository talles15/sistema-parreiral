# 🍇 Sistema de Custos do Parreiral

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-green.svg)](https://seu-usuario.github.io/sistema-parreiral/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)

## 📖 Sobre

Sistema completo para calcular e controlar os custos das aplicações em parreiral. Desenvolvido para produtores de uva que precisam de uma ferramenta simples, eficiente e gratuita para gestão de custos.

### 🎯 Funcionalidades

- ✅ **Cadastro de Produtos**: Registre defensivos, fertilizantes e adjuvantes
- ✅ **Múltiplos Produtos**: Adicione vários produtos por aplicação
- ✅ **Cálculo Automático**: Conversão de unidades e custos em tempo real
- ✅ **Controle por Hectare**: Acompanhe custos por área tratada
- ✅ **Histórico Completo**: Visualize todas as aplicações realizadas
- ✅ **Relatórios Detalhados**: Análise por período e resumos executivos
- ✅ **Export/Import**: Backup completo dos dados em JSON
- ✅ **Responsivo**: Funciona perfeitamente em desktop e mobile
- ✅ **Offline**: Funciona sem internet após o primeiro carregamento

## 🚀 Demo

👉 **[Acesse o sistema online](https://seu-usuario.github.io/sistema-parreiral/)**

### 📱 Screenshots

![Screenshot Desktop](docs/images/desktop-screenshot.png)
![Screenshot Mobile](docs/images/mobile-screenshot.png)

## 💻 Como Usar

### 1. Acesso Online
Simplesmente acesse [https://seu-usuario.github.io/sistema-parreiral/](https://seu-usuario.github.io/sistema-parreiral/) em qualquer navegador.

### 2. Instalação Local
```bash
git clone https://github.com/seu-usuario/sistema-parreiral.git
cd sistema-parreiral
# Abrir index.html no navegador ou servir com servidor local
python -m http.server 8000  # Python 3
# ou
npx serve .  # Node.js
```

### 3. Primeiros Passos
1. **Cadastre os Produtos**: Vá na aba "Produtos" e adicione defensivos e fertilizantes
2. **Registre Aplicações**: Na aba "Aplicações", adicione cada tratamento
3. **Acompanhe Custos**: O sistema calcula automaticamente
4. **Analise Resultados**: Use a aba "Relatórios" para insights

## 📊 Exemplo Prático

**Cenário**: Tratamento fungicida em 2,5 hectares
- Fungicida Azoxistrobina: 1,5 L/ha × R$ 89,50/L = R$ 134,25/ha
- Adjuvante Espalhante: 0,5 L/ha × R$ 18,75/L = R$ 9,38/ha
- **Resultado**: R$ 143,63/ha × 2,5 ha = **R$ 359,08 total**

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3 (Grid/Flexbox), JavaScript ES6+
- **Armazenamento**: LocalStorage API
- **Design**: Responsive Design, CSS Grid, Animações CSS
- **PWA**: Service Worker para funcionamento offline
- **Compatibilidade**: Chrome, Firefox, Safari, Edge, Mobile browsers

## 📁 Estrutura do Projeto

```
sistema-parreiral/
├── index.html          # Aplicação principal
├── sw.js              # Service Worker para PWA
├── manifest.json      # Web App Manifest
├── README.md          # Este arquivo
├── LICENSE           # Licença MIT
└── docs/             # Documentação e assets
    ├── images/       # Screenshots e imagens
    └── CHANGELOG.md  # Histórico de versões
```

## 🔧 Funcionalidades Técnicas

### Conversão de Unidades
O sistema converte automaticamente entre:
- Litros (L) ↔ Mililitros (mL)
- Quilogramas (kg) ↔ Gramas (g)

### Backup e Restauração
- **Exportação**: JSON com todos os dados + metadados
- **Importação**: Validação e recuperação completa
- **Limpeza**: Reset total com confirmação dupla

### Cálculos Precisos
```javascript
// Exemplo de cálculo
custoTotal = (preçoProduto × dose × área) + conversãoUnidades
custoMédio = custoTotal / áreaTotal
```

## 📈 Relatórios Disponíveis

- **Resumo Geral**: Total de aplicações, área, custos
- **Por Período**: Filtros por data inicial/final
- **Por Produto**: Análise de uso e investimento
- **Insights**: Produtos mais usados, eficiência média

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### 🐛 Reportando Bugs
Use as [Issues do GitHub](https://github.com/seu-usuario/sistema-parreiral/issues) para reportar bugs ou sugerir melhorias.

## 📋 Roadmap

- [ ] Export para Excel/PDF
- [ ]