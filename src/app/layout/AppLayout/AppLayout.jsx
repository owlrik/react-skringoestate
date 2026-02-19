import Header from '@/app/layout/Header';
import Footer from '@/app/layout/Footer';
import Home from '@/pages/Home';

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
