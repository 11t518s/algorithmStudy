function solution(genres, plays) {
  const answer = [];
  const playInfos = genres.map((item, index) => ({
    id: index,
    genre: item,
    play: plays[index]
  }))

  const uniqueGenres = [...new Set(genres)]

  const uniqueGenresWithPlay = uniqueGenres.map(genre => ({
    genre: genre,
    play: playInfos
      .filter(playInfo => playInfo.genre === genre)
      .map(playInfo => playInfo.play)
      .reduce((prev, curr) => prev + curr)
  })).sort((prev, curr) => curr.play - prev.play)

  uniqueGenresWithPlay.forEach(item => playInfos
    .filter(playInfo => playInfo.genre === item.genre)
    .sort((prev, curr) => curr.play - prev.play)
    .slice(0,2)
    .forEach(item => answer.push(item.id))
  )

  return answer;
}
