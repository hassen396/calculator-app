import { useParams, useSearchParams } from "react-router-dom"

export default function ProductsDetails () {
    const {id } = useParams();
    const [searchParams] = useSearchParams();
    const name=searchParams.get('name');
    const price = searchParams.get('price');
    console.log(id, name, price)
    console.log(id, 'id')
    return(
        <div>
            <p>some story</p>
        <p>{`Id ${id} Name ${name} Price ${price}` }</p>
        </div>
    )
}