// import Navbar from './navbar'
// import Footer from './footer'

export default function DefaultTemplate({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <h1>Default layout</h1>
      <p>======================</p>
      {children}
      <p>======================</p>
      {/* <Footer /> */}
    </>
  );
}
