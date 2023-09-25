import { useRef, useEffect } from 'react';

const Canvas = (props) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        context.fillStyle = '#ffff11'
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        context.fillRect(0, 0, 10, 10)
    }, [])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas