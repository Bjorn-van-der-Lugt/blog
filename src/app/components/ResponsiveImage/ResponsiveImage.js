import Image from "next/image";

export default function ResponsiveImage({ src, alt, priority = false, aspectRatio }) {
    return (
        <div 
            className="image-container"
            style={{
                position: "relative",
                width: "100%",
                paddingTop: `calc(100% / (${aspectRatio}))` 
            }}
        >
            <Image 
                src={src} 
                alt={alt} 
                priority={priority} 
                fill 
                style={{ objectFit: "contain" }}
            />
        </div>
    );
}

