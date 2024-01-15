import React, {FC, useState} from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('drop')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dragWithPrevent = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }

    return (
        <div>
            <input 
                value={value}
                onChange={changeHandler}
                type="text"
            />
            <button
            onClick={clickHandler}
            >
                try me
            </button>
            <div
                onDrag={dragHandler}
                draggable
                style={{width: 250, height: 250, background: 'orange'}}
            >
                drag me
            </div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPrevent}
                style={{width: 250, height: 250, background: isDrag ? 'chocolate' : 'bisque', marginTop: 10}}
            >
                drag on me
            </div>
        </div>
    )
}

export default EventsExample