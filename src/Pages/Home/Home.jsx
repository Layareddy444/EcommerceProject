
// function Home() {
//   const [data, setData] = useState([])

//   const[number,setNumber]=useState(0)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/product.json');
//         const jsonData = await response.json();
//         const dataArray = Object.entries(jsonData).map(([key, value]) => ({ key, value }));

//         setData(dataArray[0].value[number])

        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setData([]);
//       }
//     };

//     fetchData();
//   }, [number]);

//   // data && console.log(data[0].value)
//   console.log(data)
//   // data.map(item => console.log(item))
//   Object.entries(data).map(([key, value]) => {
//     console.log(key + ":")
//     console.log(value)

//     // value[0].products&& console.log(value[0].products[0])
//   })
//   return (
//     <>
//      {/* <Navbar/> */}
//      {/* <Router>
//    <Navbar/>
//    <Routes>
     
//      <Route path='/groceries' element={<Groceries/>}/>
//      <Route path='/electronics' element={<Electronics/>}/>
//      <Route path='/fashion' element={<Fashion/>}/>
//    {/* <Route path="/*" element={<PageNotFound/>}/> */}
//   {/* </Routes>
//  </Router> */} */

//     <div>
// <button onClick={()=>setNumber(0)}>Groceries</button>
// <button onClick={()=>setNumber(1)}>Electronics</button>
// <button onClick={()=>setNumber(2)}>Fashion</button>
//       {
//         Object.entries(data).map(([key, value]) => (
//           <div key={key}>
//             <h1>{key == 'cat_name' && value} </h1>
//             <img src={key=='image' && value} />
//             <h4>{value[0].cat_name}</h4>
//             {
//               value[0].products && value[0].products.map((item) => (
//                 <div>
//                   <h2>{item.productName}</h2>
//                   <h3>{item.description}</h3>
//                 <img src={item.catImg} />
//                 <button>Add to cart</button>
//                 </div>
//               ))
//             }
//           </div>
//         ))
//       }
//     </div>
//    <Groceries setNumber={setNumber}/>
//     </>
//   );
// }

// export default Home;


import React from 'react'
import Products from '../Products/Products'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Pages/Home/Components/HeroSection'

const Home = ({onAddToCart}) => {
  return (
    <>
    {/* <HeroSection/> */}
    <Products onAddToCart={onAddToCart}/>
    </>
  )
}

export default Home