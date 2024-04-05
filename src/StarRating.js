
import { useState } from "react";
const containerStyle = {
    display:'flex', //side-by-side
    // alignItems: 'center',
    // gap: "16px"
};


const starContainerStyle = {
    display: 'flex',
    gap: "4px"
}

export default function StarRating({maxRating = 5, color = '#fcc419', size = '48'})
{
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0)

    function handleRating(rating) {
        setRating(rating)
    }

    const textStyle = {
        lineHeight: "1",
        margin: "0", 
        color, 
        fontSize: `${size /1.5}px`,
    
    }
    
    return (
        <div style={containerStyle}>
         <div style={starContainerStyle}>
            {Array.from({length: maxRating}, (_, i) => (
                <Star 
                    key={i} 
                    full={tempRating ? tempRating >= i + 1: rating >= i + 1}
                    onRate={() => handleRating(i+1)}
                    onHoverIn={() => setTempRating(i+1)}
                    onHoverOut={() => setTempRating(0)}
                />
             ))}
            </div>
            <p style={textStyle}>{tempRating || rating || ""}</p>
        </div>
    )
}


function Star({onRate, full, onHoverIn, onHoverOut, color, size}) {
    const starStyle = {
        width: `${size}px`,
        height: `${size}px`,
        display: 'block',
        cursor: 'pointer',
    }
    return (
        <span role='button' style={starStyle} 
        onClick={onRate} 
        onMouseEnter={() => onHoverIn}
        onMouseLeave={() => onHoverOut}
        color={color}
        size={size}
        >
        {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#000"
        stroke="#000"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
      
              
        )}
</span>

    )
}
