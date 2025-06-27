# LangGraph Agent System (TypeScript)

A modular, TypeScript-based agent orchestration framework leveraging LangGraph and modern LLMs. This project demonstrates how to build, compose, and coordinate AI agents for retrieval-augmented generation (RAG) and advanced task delegation using a vector database.

## Features

- **Agent-based architecture:** Easily add or modify agents for specialized tasks.
- **Retrieval-Augmented Generation (RAG):** Integrate LLMs with external knowledge sources via vector search.
- **Workflow orchestration:** Use LangGraph to define dynamic, multi-step agent workflows.
- **TypeScript-first:** Strong typing for safety and maintainability.
- **Environment-based configuration:** Securely manage API keys and settings.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [LangGraph.js](https://js.langgraph.com/)
- [LangChain OpenAI Integration](https://js.langchain.com/docs/integrations/llms/openai)
- [Pinecone Vector Database](https://www.pinecone.io/)
- [Zod](https://zod.dev/) for schema validation
- [dotenv](https://github.com/motdotla/dotenv) for environment management

## Getting Started

1. **Clone the repository:**
git clone https://github.com/your-username/langgraph-agent-assessment.git
cd langgraph-agent-assessment

2. **Install dependencies:**
npm install

3. **Set up environment variables:**
Create a `.env` file in the root directory with your API keys:
OPENAI_API_KEY=your-openai-key
PINECONE_API_KEY=your-pinecone-key
PINECONE_INDEX=your-pinecone-index

4. **Run the app:**
npx ts-node src/main.ts


## Folder Structure

src/
agents/ # Agent implementations (e.g., Manager, RAG agent)
graph/ # Workflow/graph definitions
api-interfaces.ts # Shared type definitions
main.ts # Entry point
utils.ts # Utility functions

## License

This project is licensed under the MIT License.