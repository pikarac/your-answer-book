# The Book of Answers 📖✨

A mystical electronic book that answers your questions with beautiful 3D flip animations. Powered by Azure OpenAI.

## Features

- 🎨 Beautiful mystical UI with star background and magic particles
- 📖 3D book flip animation
- 🤖 AI-powered answers using Azure OpenAI
- 🌟 Philosophical, mysterious responses in Chinese
- 💫 Graceful fallback when API is unavailable

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Azure OpenAI resource (for AI-powered answers)

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd your-answer-book
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and fill in your Azure OpenAI credentials:
   ```
   VITE_AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com
   VITE_AZURE_OPENAI_API_KEY=your-api-key-here
   VITE_AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4
   VITE_AZURE_OPENAI_API_VERSION=2024-02-15-preview
   ```

   > **Note**: Get these values from your Azure Portal → Azure OpenAI resource → Keys and Endpoint

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
your-answer-book/
├── components/
│   ├── MagicParticles.tsx    # Floating magic particles
│   ├── StarBackground.tsx    # Animated star background
│   └── TheBook.tsx           # 3D book component
├── services/
│   └── azureOpenAIService.ts # Azure OpenAI API integration
├── App.tsx                   # Main application component
├── index.tsx                 # React entry point
├── index.html                # HTML template
├── index.css                 # Global styles
├── types.ts                  # TypeScript type definitions
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_AZURE_OPENAI_ENDPOINT` | Your Azure OpenAI endpoint URL | Yes |
| `VITE_AZURE_OPENAI_API_KEY` | Your Azure OpenAI API key | Yes |
| `VITE_AZURE_OPENAI_DEPLOYMENT_NAME` | The deployment name (e.g., gpt-4) | Yes |
| `VITE_AZURE_OPENAI_API_VERSION` | API version (e.g., 2024-02-15-preview) | Yes |

## Fallback Mode

If Azure OpenAI credentials are not configured or the API call fails, the app will gracefully fall back to a mock response mode with a default answer.

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Azure OpenAI** - AI-powered responses

## License

See [LICENSE](LICENSE) file for details.
