//import LiquidChrome from "./LiquidChrome";

// export function Background( {children}: {children: React.ReactNode} ){
//     return <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
//             <LiquidChrome className="absolute inset-0 " 
//             speed={0.1}
//             interactive={false}/>
//             <div className="relative z-10 flex items-center justify-center w-full h-full">
//                 {children}
//             </div>
//         </div>
// }
export function Background( {children}: {children: React.ReactNode}){
    return <div>
        <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                {children}
            </div>
        </div>
    </div>
}