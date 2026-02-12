import GiftGif from "../assets/gift.gif";
export default function Gift() {
    return (
        <>
            <button
                className="cursor-pointer hover:scale-105 hover:transition-all duration-200 ease-out"
            >
                <img className="size-64" src={GiftGif} alt="" />
            </button>
        </>
    );
}
