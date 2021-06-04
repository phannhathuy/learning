import './App.css'
import Header from './components/header/header'
import Banner from './components/main/banner/banner'
import Education from './components/main/education/education'
import Introduction from './components/main/introduction/introduction'
import School from './components/main/school/school'
import NewsEvent from './components/main/newsevent/newsEvent'
import ReviewsJob from './components/main/reviewsjob/reviewsJob'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Education></Education>
      <Introduction />
      <School />
      <NewsEvent />
      <ReviewsJob />
      <Footer/>
    </div>
  );
}

export default App;