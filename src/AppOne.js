import {useState} from "react";

function AppOne(){
    const[robot, setRobot] = useState(20);

    const onRobotIncrease = ()=>{
        setRobot(robot+1);

    }

    const onRobotDecrease = ()=>{
        setRobot(robot-1);
    }

    const getElements = () => {
        if (robot > 30) {
       
        } else {
            return <p>Tot mai aproape de deciza corecta!</p>;
        }
    };

    return (
    <>
        <h1>Reset robot</h1>
        <p>{robot}</p>
        <button onClick={onRobotIncrease}>Adauga roboti</button>
        <br></br>
        <br></br>
        <button onClick={onRobotDecrease}>Scade roboti</button>
        {robot > 30 ? (
                <p className='TEST'> Ai ajuns la peste 30 roboti! Acceseaza site-ul si achizitioneaza acum robotul tau!</p>
            ) : (
             <p></p>
            )}

            {getElements()}
    </>
    );
}
export default AppOne;