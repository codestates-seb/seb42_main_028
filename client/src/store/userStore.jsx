import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const userStore = create(
	persist(
		(set) => ({
			userId: '',
			setUserId: (e) => {
				set({
					userId: e,
				});
			},
			//이름추가
			name: '',
			setName: (e) => {
				set({
					name: e,
				});
			},
		}),
		{
			userId: 'userid',
			//이름 추가
			name: 'name',
		},
	),
);

export default userStore;
