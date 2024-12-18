import { createSlice } from '@reduxjs/toolkit'
import { updateUser } from '../../../../backend/src/services/UserService'

const initialState = {
  name: '',
  email: '',
  access_token: '',
  exp: '',
  id: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState: (state, action) => { // Đổi tên action creator
      const { name, email, access_token, exp, id } = action.payload
      state.name = name || email
      state.email = email
      state.access_token = access_token
    },
    resetUser: (state) => {
      state.name = ''
      state.email = ''
      state.access_token = '' // Đảm bảo xóa đúng access_token
    }
  }
})

// Action creators tự động được tạo cho mỗi reducer
export const { updateUserState } = userSlice.actions

export default userSlice.reducer
