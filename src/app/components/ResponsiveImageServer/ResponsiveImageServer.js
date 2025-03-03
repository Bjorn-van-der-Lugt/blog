import Image from "next/image";

export default function ResponsiveImageServer({ src, alt, priority, aspectRatio }) {
    return (
        <div 
            style={{ 
                width: "100%", 
                position: "relative", 
                paddingTop: `calc(100% / ${aspectRatio})`, 
            }}
        >
            <Image 
                src={src}
                alt={alt}
                priority={priority}
                fill
            />
        </div>
    );
}
