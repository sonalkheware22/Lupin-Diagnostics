import React from "react";
import Header from "./components/Header";
import MultiOptionMenu from "./components/MultiOptionMenu";
import BookingForm from "./components/BookingForm";
import CardList from "./components/CardList";
import Testimonials from "./components/Testimonials";
import Videos from "./components/Videos";
import LatestBlogs from "./components/LatestBlogs";
import FAQs from "./components/FAQs";
import HealthPackages from "./components/HealthPackages";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import "./App.css";
import BookedTest from "./components/BookedTest";
import CheckupPackages from "./components/CheckupPackages";

function App() {
  return (
    <div>
      <TopHeader />
      <Header />
      <MultiOptionMenu />
      <BookingForm />
      <CheckupPackages />
      <BookedTest />
      <CardList />
      <Testimonials />
      <Videos />
      <LatestBlogs />
      <FAQs />
      <HealthPackages />
      <Footer />
    </div>
  );
}

export default App;
