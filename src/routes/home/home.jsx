// import Data from '../../components/datas/data'
import './home.scss'
// import FilterContainer from '../../components/FilterContainer/FilterContainer';
import Footer from '../../components/footer/footer';
// import { useDispatch } from 'react-redux';
import Shop from '../shop/shop';
// import Banner from '../../components/Banner/Banner';
// import { categoryFilter } from '../../redux/slice';
import { useNavigate } from 'react-router-dom';



const Home =()=>{
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const store = [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
          },
          {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/7/1.jpg",
              "https://i.dummyjson.com/data/products/7/2.jpg",
              "https://i.dummyjson.com/data/products/7/3.jpg",
              "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
            ]
          },
          {
            "id": 12,
            "title": "Brown Perfume",
            "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            "price": 40,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/12/1.jpg",
              "https://i.dummyjson.com/data/products/12/2.jpg",
              "https://i.dummyjson.com/data/products/12/3.png",
              "https://i.dummyjson.com/data/products/12/4.jpg",
              "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
            ]
          },
          {
            "id": 16,
            "title": "Hyaluronic Acid Serum",
            "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
            "price": 19,
            "discountPercentage": 13.31,
            "rating": 4.83,
            "stock": 110,
            "brand": "L'Oreal Paris",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/16/1.png",
              "https://i.dummyjson.com/data/products/16/2.webp",
              "https://i.dummyjson.com/data/products/16/3.jpg",
              "https://i.dummyjson.com/data/products/16/4.jpg",
              "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
            ]
          },
          {
            "id": 22,
            "title": "Elbow Macaroni - 400 gm",
            "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
            "price": 14,
            "discountPercentage": 15.58,
            "rating": 4.57,
            "stock": 146,
            "brand": "Bake Parlor Big",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/22/1.jpg",
              "https://i.dummyjson.com/data/products/22/2.jpg",
              "https://i.dummyjson.com/data/products/22/3.jpg"
            ]
          },
          {"id": 27,
          "title": "Flying Wooden Bird",
          "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
          "price": 51,
          "discountPercentage": 15.58,
          "rating": 4.41,
          "stock": 17,
          "brand": "Flying Wooden",
          "category": "home-decoration",
          "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
          "images": [
            "https://i.dummyjson.com/data/products/27/1.jpg",
            "https://i.dummyjson.com/data/products/27/2.jpg",
            "https://i.dummyjson.com/data/products/27/3.jpg",
            "https://i.dummyjson.com/data/products/27/4.jpg",
            "https://i.dummyjson.com/data/products/27/thumbnail.webp"
          ]
        },
    ];
    const filterValue = (category)=>{
      navigate('/shop');
      <Shop category={category} />
    }

    return (
        <div >
            {/* <Banner store={store}/> */}
            <div className='heading'>
              <h1>Shopping Everyday</h1>
              <strong> when online retailers and sellers of goods were a novelty. Today, there are innumerable virtual stores and malls on the internet selling all types of consumer goods.</strong>
            </div>
            <div className='container-home'>
            {store.map(({id, brand, category, images })=>{
                return(
                    <div className='card-home' key={id}>
                        <div className='brand' >
                        <h3 >{category}</h3>
                        <button onClick={filterValue(category)}>Shop Now</button>
                        </div>
                        <div className='img-container'>
                          <img className='img-background' src={images[0]} alt={brand}/>
                        </div>
                    </div>
                )
            })}
            
            </div>
            <Footer/>
            
                    
                    
        </div>
    )
    
}
export default Home;