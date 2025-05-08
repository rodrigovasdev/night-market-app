import Container from "../components/ui/Container";

export default function Checkout() {
    //DEJAR EL PADDING MEDIANTE PROPS EN EL COMPONENTE CONTAINER
    return (
        <div className="w-full h-full flex flex-row py-10 gap-10 px-8 md:h-screen bg-gray-200 shadow-md">
            <div className="w-2/3">
                <Container shadow={false}>
                <table className="table-auto text-left">
                    <thead className="underline">
                        <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        </tr>
                        <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                        </tr>
                        <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        </tr>
                    </tbody>
                    </table>
                </Container>
            </div>
            <div className="w-1/3">
            <Container>
                    <form action="" className="w-full">
                    <input type="text" className="bg-white rounded-full w-full border-1 border-gray-300" name="" placeholder="jhon.doe@mail.com" id="" />
                    </form>
            </Container>
            </div>
                
                
        </div>
    );
}