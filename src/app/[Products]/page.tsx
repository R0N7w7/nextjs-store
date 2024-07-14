
interface CategoryProps {
    params: {
        Products: string[],
    }
    searchParams?: string
}


export default function Product(props: CategoryProps) {
    const { Products } = props.params;
    return (
        <div className="text-text text-6xl">
            <h1>Hola</h1>
            {Products}
        </div>
    );
}
