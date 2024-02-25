import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist();

const NameState = atom({
  key: 'NameState',
  default: "",
  effects_UNSTABLE: [persistAtom],
})
export default NameState