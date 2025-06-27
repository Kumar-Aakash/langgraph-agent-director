
import { chunkRetrievalAgent } from "./agents/ChunkRetrievalAgent";
import { generalistAgent } from "./agents/Generalist";
import { AgentState } from "./api-interfaces";

// Simulate a user query
const initialState: AgentState = {
  input: "Find documents about machine A",
  pendingToolCalls: [],
  toolResponses: [],
};

const afterGeneralist = generalistAgent(initialState);

// For each pending tool call, let the ChunkRetrievalAgent handle it
const toolResponses = afterGeneralist.pendingToolCalls.map((toolCall) =>
    chunkRetrievalAgent(toolCall)
);

const finalState: AgentState = {
    ...afterGeneralist,
    toolResponses,
    pendingToolCalls: [],
};

console.log("Final Agent State:", finalState);
