export default function Workout(props) {
    return (
        <>
            {Object.entries(props.workout).map(([key, value]) => (
                <h1 key={key}>{key} {value}`</h1>
            ))}
        </>
    );
}
