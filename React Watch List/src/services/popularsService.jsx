export const API_KEY = "api_key=c0f4ea0f3155b9732a1a6c2955b11a3f";
export const BASE_URL = "https://api.themoviedb.org/3/discover/";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGY0ZWEwZjMxNTViOTczMmExYTZjMjk1NWIxMWEzZiIsInN1YiI6IjY2NzUxMDIzOWYxZWJmMjZlN2M1MWU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XSu8hLv81NaaXV8oumFZL5v82H8kvNSvAAhIIVdy_uE'
  }
};

export const getPopulars = async (type, page) => {
  try {
    const response = await fetch(`${BASE_URL + type}?include_adult=true&include_video=false&page=${page}&sort_by=popularity.desc&${API_KEY}`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error; 
  }
};
