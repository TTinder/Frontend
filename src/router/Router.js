import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/signup/SignUp';
import InformationInput from '../pages/InformationInput';
import Main from '../pages/main/main/Main';
import Detail from '../pages/main/detail/Detail';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/informationinput" element={<InformationInput />} />

        <Route path="/main" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
