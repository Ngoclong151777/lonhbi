
import { productsApi ,useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";
import { addToCart } from "../features/cartSlice";


const Home = () => {
    const {data, error, isLoading} = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const Navigate  = useNavigate ();
    
    const handleAddToCart = (product) =>{
         console.log(">>add")
        dispatch(addToCart(product));
        Navigate("/cart");
    };

    return <div className="home-container">
            { isLoading ? ( <p>Loading...</p>) : error? (
            <p>Lỗi không hiển thị...</p>  
            ) : (
                <>
                <h2>New Arrivals</h2>
                <div className="products">
                    {data?.map( product => 
                        <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <img src={product.img} alt={product.name}/>
                        <div className="details">
                            <span>{product.desc}</span>
                            <span className="price">${product.price}</span>
                        </div>
                        <button onClick={() => handleAddToCart(product)}>
                            Add to Cart 
                        </button>
                    </div>)}
                </div>
                </>
            )           
            }
     </div>
    };
 
export default Home;