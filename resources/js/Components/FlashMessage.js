import { CheckIcon } from "@heroicons/react/20/solid";

const FlashMessage = ({value}) => {
    return (
        <div className="bg-green-500 text-white p-2 flex"><CheckIcon className="text-white w-6 h-6" />{value}</div>
    )
}

export default FlashMessage;
