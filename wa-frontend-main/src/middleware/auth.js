export default function auth({ next, router }) {        
    if (!localStorage.getItem('authenticated')) {       
        return router.push({ name: 'login' });
    }

    return next();
}