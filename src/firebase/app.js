import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import key from './key'
export const App = Firebase.initializeApp(key.config);