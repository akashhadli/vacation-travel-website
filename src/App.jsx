import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Offers />
			<Plan />
			<Rooms />
			<ImageCarousel />
			<Footer />
		</div>
	);
}

export default App;
