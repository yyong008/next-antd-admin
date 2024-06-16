import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      let payload = action.payload;
      payload.createdAt = new Date(payload.createdAt).toString();
      payload.updatedAt = new Date(payload.updatedAt).toString();
      return {
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
