const API_URL = "http://localhost:5000/api/users";

export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the data directly
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw error;
  }
};

export const submitTestResults = async (userId, results) => {
  try {
    const response = await fetch(`${API_URL}/${userId}/results`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ results }), // No need to send userId again
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the data from the server
  } catch (error) {
    console.error("Failed to submit test results:", error);
    throw error;
  }
};

export const getTestHistory = async (userId) => {
 try {
    const response = await fetch(`${API_URL}/${userId}/history`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the data from the server
  } catch (error) {
    console.error("Failed to fetch test history:", error);
    throw error;
  }
};