import { createContext, useState } from "react";

interface GenreProviderProps {
  selectGenreId: number
}

export const GenresContext = createContext({} as GenreProviderProps);

export function GenreContext() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <GenreContext.Provider 
      value={{}}
    />
  )
}