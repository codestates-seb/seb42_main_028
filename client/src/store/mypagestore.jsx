//41-20안되면 이걸 살린다
import { create } from 'zustand';

const mypagestore = create((set) => ({
	profileData: '',
	setProfileData: (data) => set(() => ({ profileData: { ...data } })),
}));

export default mypagestore;
