import { create } from 'zustand';

const useErrorMessageStore = create((set) => ({
	errorMessage: '',
	setErrorMessage: (messageContent) =>
		set(() => ({ errorMessage: messageContent })),
}));

const useIsLoginStore = create((set) => ({
	isLogin: Boolean(window.localStorage.getItem('userInfoStorage')),
	setIsLogin: (loginstate) => set(() => ({ isLogin: loginstate })),
}));

const useLoginInfoStore = create((set) => ({
	loginInfo: {
		email: '',
		password: '',
	},
	setLoginInfo: (state) => set(() => ({ loginInfo: state })),
}));

export { useErrorMessageStore, useIsLoginStore, useLoginInfoStore };
