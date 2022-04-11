import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchInput() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={topFilms.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

// 이건 자주쓰는 기능을 밑에 추천 느낌으로 달아놓는 건데 일단 놔뒀습니다!

const topFilms = [
  { title: '여찬복의 고난' },
  { title: '송용호의 언더테일만들기' },
  { title: '박이레의 오류내기' },
  { title: '알리의 인공지능 교실' },
  { title: '김세형의 먼지랑 놀기'},
];