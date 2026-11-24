const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getStudents = async () => {
    const response = await fetch(`${BASE_URL}/students`)
    if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  return response.json()
}