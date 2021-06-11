import {getFirestore} from '../../firebase'

const ItemListContainer = (props) => {
    const {catId} = useParams();
    const [loading, setLoading]=useState(null);
    const[products, setProducts]=useState(null);
    useEffect(()=>{
    setLoading(true)
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        itemsCollection.get().then((snapshot)=>{
            setProducts(snapshot.docs.map(doc=>doc.data()));
            console.log(products)
        }).finally(()=>{
            setLoading(false);
        })
    },[catId])};