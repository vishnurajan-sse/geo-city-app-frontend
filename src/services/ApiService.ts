export const fetchData = async ( url : string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.filteredData;

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};