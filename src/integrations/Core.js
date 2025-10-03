export const UploadFile = async ({ file }) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);
    
    // Simulating file upload - Replace with actual API endpoint
    setTimeout(() => {
      const mockUrl = URL.createObjectURL(file);
      resolve({ file_url: mockUrl });
    }, 1000);
  });
};