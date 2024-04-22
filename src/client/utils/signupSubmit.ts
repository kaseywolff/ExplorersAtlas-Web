// api call when user presses 'submit' on sign up page

const signupSubmit = async (formData) => {
  try {
    // Perform any necessary validation or data preparation


    // Make HTTP request to submit form data to backend server
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    // Return response data if needed
    return response.json();
  } catch (error) {
    // Handle errors (e.g., network errors, validation errors)
    console.error('Form submission error:', error);
    throw error;
  }
};

export default signupSubmit;
