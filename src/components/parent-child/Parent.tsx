import { useCallback, useState } from "react";

const Parent = () => {
    const [dummy, setDummy] = useState(true);

    const handleClick = useCallback(() => {
        setDummy(!dummy);
    }, [dummy]);
};