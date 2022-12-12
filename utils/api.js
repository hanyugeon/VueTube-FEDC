const API_END_POINT = process.env.VUE_APP_API_END_POINT;
const API_KEY = process.env.VUE_APP_API_KEY;

export const requestMovieList = async (keywords) => {
  try {
    const response = await fetch(`${API_END_POINT}${API_KEY}&s=${keywords}`);

    if (!response.ok) {
      throw new Error("API 호출에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    alert(error.message);
  }
};

export const requestMovieDetail = async (imdbID) => {
  try {
    const response = await fetch(`${API_END_POINT}${API_KEY}&i=${imdbID}&plot=full`);

    if (!response.ok) {
      throw new Error("API 호출에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    alert(error.message);
  }
};
