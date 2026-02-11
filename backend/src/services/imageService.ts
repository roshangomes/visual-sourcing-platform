export const createImageSession = async (filePath: string) => {
  // TODO: Implement image session creation logic
  return {
    id: Date.now().toString(),
    filePath,
    createdAt: new Date().toISOString(),
  };
};
