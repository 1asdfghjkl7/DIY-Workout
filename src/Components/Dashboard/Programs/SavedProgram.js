import React from "react";
import { Link } from "react-router-dom";

const SavedProgram = ({ program }) => {
    return (
        <Link
            to={{
                pathname: `/Dashboard/Programs/SavedPrograms/${program.id}`,
                state: { program: program }
            }}
        >
            <div>
                <h1>{program.name}</h1>
            </div>
        </Link>
    );
};

export default SavedProgram;
