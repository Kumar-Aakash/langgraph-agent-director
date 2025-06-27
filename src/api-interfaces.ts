// Represents a request from the Generalist to a specialist agent/tool
export interface ToolCall {
    tool_call_id: string;
    name: string;
    arguments: Record<string, any>;
}

// Represents a response from a specialist agent/tool
export interface ToolResponse {
    tool_call_id: string;
    content: string;
}

// Represents the shared state passed around the agent graph
export interface AgentState {
    input: string;
    pendingToolCalls: ToolCall[];
    toolResponses: ToolResponse[];
}

// For RAG: Represents a document and its metadata
export interface RetrievedDocument {
    id: string;
    text: string;
    metadata: {
      [key: string]: any;
    };
}

