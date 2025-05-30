import OffCanva from "@/app/components/ui/OffCanva"

interface SearchSectionProps {
    onClick: () => void;
    isOpen: boolean;
}

export default function SearchSection(props: SearchSectionProps) {
    const { onClick, isOpen } = props;
    return(
        <OffCanva onClick={onClick} isOpen={isOpen} title="Buscar">
            <h1></h1>
        </OffCanva>
    )
}