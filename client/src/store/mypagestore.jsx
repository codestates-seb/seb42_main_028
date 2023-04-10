import { create } from 'zustand';

const mypagestore = create((set) => ({
	profileData: '',
	setProfileData: (data) => set(() => ({ profileData: { ...data } })),
}));

export default mypagestore;
