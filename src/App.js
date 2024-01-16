import { Suspense ,lazy} from 'react';
import {  Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import SuspenseLoader from './Components/Common/SuspenseLoader';

const ErrorComponent=lazy(()=>import('../src/Components/Common/ErrorComponent'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}  />
      <Route path={routes.main.path} element={<routes.main.element/>}>
         <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element/>} errorElement={<ErrorComponent/>} />
         <Route path={routes.view.path} element={<routes.view.element/>} errorElement={<ErrorComponent/>} />
      </Route>

      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>} />
    </Route>
  )
)


function App() {
  return (
    <div className="App">
      <Suspense fallback={<SuspenseLoader/>}>
       <RouterProvider  router={router}/>
       </Suspense>
    </div>
  );
}

export default App;
