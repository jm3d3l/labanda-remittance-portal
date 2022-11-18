import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Transaction from './pages/Transaction';
function NotFound() {
    return <div className="page-not-found">Page not found</div>;
}

// const LazyRoute = ({ children }): => (
//     <React.Suspense fallback={<>...</>}>{children}</React.Suspense>
// );



const PageRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route path="transaction" element={<Transaction />} />
            <Route path="*" element={NotFound()} />
        </Routes>
    );
};

export default PageRoutes;
