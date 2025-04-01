import Button from "@/app/components/ui/Button";

export default function Products() {
    return (
        <div className="h-screen bg-gray-100 px-5 md:px-0 text-center content-center grid gap-6">
            <h1>Products</h1>
            <Button variant="primary" content="Hola"/>
            <Button variant="secondary" content="Mundo"/>
        </div>
        
    );
}
