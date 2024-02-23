interface Type {
    color?: string;
 }
 
 export const DownIcon: React.FC<Type> = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48">
        <path fill="none" stroke={color ? color : "#fff"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M36 18L24 30L12 18"/>
    </svg>
 );
 