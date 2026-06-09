import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home/index.jsx'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout.jsx'
import Detail from '../containers/Detail/index.jsx'

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/filmes" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/detalhe/:type/:id" element={<Detail />} />
            </Route>
        </Routes>
    )
}

export default Router